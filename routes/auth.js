const express = require('express');
const router = express.Router();//Router() creates a new router object that can be used to define routes.
//It returns an object that can store and handle routes (like .get, .post)
const bcrypt = require('bcryptjs'); //object that provides functions for hashing and comparing passwords securely. It uses the bcrypt algorithm, which is designed to be slow and resistant to brute-force attacks, making it a good choice for password hashing.
const jwt = require('jsonwebtoken'); //object that provides functions for creating and verifying JSON Web Tokens (JWTs). JWTs are a compact, URL-safe means of representing claims to be transferred between two parties. They are commonly used for authentication and authorization in web applications.
const { v7: uuidv7 } = require('uuid');
const db = require('../db'); // ./ means look for db in the SAME folder as this file
// ../ means look for db in the PARENT folder of this file (which is the root folder of the project)
const { JWT_SECRET } = require('../middleware/auth'); //onject destructuring means we are importing the JWT_SECRET variable from the auth.js file in the middleware folder. 
// This variable is likely used as the secret key for signing JWT tokens in our authentication process.
const nodemailer = require('nodemailer'); // object that provides functions for sending emails from Node.js applications. It allows you to create and send email messages using various transport methods (like SMTP, Sendmail, etc.) and supports features like attachments, HTML content, and more. In this code, it's used to send OTPs (One-Time Passwords) for registration and password reset processes.

//A config object is a JavaScript object that contains key-value pairs used to configure the behavior of a function, module, or application.
//  In the context of nodemailer, a config object is typically used to specify the email service provider, authentication details (like username and password), and other settings required to establish a connection for sending emails. For example, when creating a transporter in nodemailer, you would pass a config object that includes the service (e.g., 'gmail') and the auth object with user and pass properties for authentication.

// Helper to send OTP
async function sendOTP(email, otp, type) { 
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({ // createTransport is a function provided by nodemailer that creates a transporter object using the specified configuration.
        //  The transporter object is responsible for handling the actual sending of emails based on the provided configuration.
        // {service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }} is the configuration object that specifies the email service provider (in this case, Gmail) and the authentication details (username and password) required to connect to the email service and send emails.
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"UniFind" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `UniFind - ${type} OTP`,
            text: `Your ${type.toLowerCase()} verification code is: ${otp}\n\nThis code expires in 15 minutes.`
        };

        await transporter.sendMail(mailOptions);
    } else {
        console.log('---------------------------------------------------');
        console.log(`[MOCK EMAIL SERVICE] To: ${email}`);
        console.log(`[MOCK EMAIL SERVICE] Subject: ${type} OTP`);
        console.log(`[MOCK EMAIL SERVICE] Your verification code is: ${otp}`);
        console.log('---------------------------------------------------');
    }
}

// 1. Auth - Simple REST API (KUmail only)
router.post('/kumail', async (req, res) => {
    try {
        const { email, name, type, password } = req.body; // object destructuring is a convenient way to extract multiple properties from an object and assign them to variables in a single statement.
        //  In this case, we are extracting the email, name, type, and password properties from the req.body object, which contains the data sent in the request body when a client makes an HTTP request to this endpoint. 
        // This allows us to easily access these values as individual variables for further processing in our authentication logic.

        // Validate KUmail domain - accept both @ku.edu.np and @student.ku.edu.np
        const isValidKUmail = email.endsWith('@ku.edu.np') || email.endsWith('@student.ku.edu.np');

        if (!isValidKUmail) {
            return res.status(403).json({
                error: 'Access restricted to verified Kathmandu University students only.'
            });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
        }

        // Check if user exists
        const [existingUsers] = await db.execute(
            'SELECT id, email, name, password, is_verified FROM users WHERE email = ?',
            [email]
        );

        let user;

        if (type === 'login') {
            if (existingUsers.length === 0) {
                return res.status(404).json({ error: 'Account not found. Please register first.' });
            }
            user = existingUsers[0];

            if (!user.is_verified) {
                return res.status(403).json({
                    error: 'Account not verified. Please check your email for the verification code.',
                    unverified: true
                });
            }

            const validPassword = await bcrypt.compare(password, user.password || '');
            if (!validPassword) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

        } else if (type === 'register') {
            if (existingUsers.length > 0) {
                const existing = existingUsers[0];
                if (existing.is_verified) {
                    return res.status(409).json({ error: 'User already exists. Please login.' });
                }
                // If exists but not verified, we'll just update the OTP and password
                const otp = Math.floor(100000 + Math.random() * 900000).toString();
                const expiry = new Date(Date.now() + 15 * 60 * 1000);
                const hashedPassword = await bcrypt.hash(password, 10);
                const userName = name || email.split('@')[0];

                await db.execute(
                    'UPDATE users SET name = ?, password = ?, verification_otp = ?, verification_otp_expires = ? WHERE email = ?',
                    [userName, hashedPassword, otp, expiry, email]
                );

                // Send OTP
                await sendOTP(email, otp, 'Registration');

                return res.json({
                    message: 'Verification code sent to your email.',
                    requiresVerification: true
                });
            }
            // Create new unverified user
            const userName = name || email.split('@')[0];
            const userId = uuidv7();
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const expiry = new Date(Date.now() + 15 * 60 * 1000);
            const hashedPassword = await bcrypt.hash(password, 10);

            await db.execute(
                'INSERT INTO users (id, name, email, password, verification_otp, verification_otp_expires, is_verified) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [userId, userName, email, hashedPassword, otp, expiry, false]
            );

            // Send OTP
            await sendOTP(email, otp, 'Registration');

            return res.json({
                message: 'Verification code sent to your email.',
                requiresVerification: true
            });
        } else {
            return res.status(400).json({ error: 'Invalid auth type' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return user without password
        res.json({
            token,
            user: { id: user.id, name: user.name, email: user.email }
        });
    } catch (err) {
        console.error('Auth error:', err);
        res.status(500).json({ error: 'Authentication failed' });
    }
});

// Forgot Password - Send OTP
router.post('/forgot-password', async (req, res) => {
    console.log('==========================================');
    console.log('[FORGOT PASSWORD] Endpoint called');
    console.log('[FORGOT PASSWORD] Email:', req.body.email);
    console.log('==========================================');

    try {
        const { email } = req.body;

        // Check if user exists
        const [users] = await db.execute('SELECT id FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(404).json({ error: 'User with this email does not exist.' });
        }

        // Generate 6 digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

        // Save to DB
        await db.execute(
            'UPDATE users SET reset_otp = ?, reset_otp_expires = ? WHERE email = ?',
            [otp, expiry, email]
        );

        await sendOTP(email, otp, 'Password Reset');
        res.json({ message: 'Password reset code sent to your email.' });

    } catch (err) {
        console.error('Forgot Password error:', err);
        res.status(500).json({ error: 'Failed to process request' });
    }
});

// Reset Password - Verify OTP and Update
router.post('/reset-password', async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        if (!newPassword || newPassword.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters long.' });
        }

        // Verify OTP
        const [users] = await db.execute(
            'SELECT id, reset_otp, reset_otp_expires FROM users WHERE email = ?',
            [email]
        );

        if (users.length === 0) return res.status(400).json({ error: 'Invalid request' });

        const user = users[0];

        if (!user.reset_otp || user.reset_otp !== otp) {
            return res.status(400).json({ error: 'Invalid confirmation code' });
        }

        if (new Date(user.reset_otp_expires) < new Date()) {
            return res.status(400).json({ error: 'Confirmation code has expired. Please request a new one.' });
        }

        // Update Password and Clear OTP
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await db.execute(
            'UPDATE users SET password = ?, reset_otp = NULL, reset_otp_expires = NULL WHERE id = ?',
            [hashedPassword, user.id]
        );

        res.json({ message: 'Password has been reset successfully. You can now login.' });

    } catch (err) {
        console.error('Reset Password error:', err);
        res.status(500).json({ error: 'Failed to reset password' });
    }
});

// Verify Registration OTP
router.post('/verify-registration', async (req, res) => {
    try {
        const { email, otp } = req.body;

        const [users] = await db.execute(
            'SELECT id, name, email, verification_otp, verification_otp_expires FROM users WHERE email = ?',
            [email]
        );

        if (users.length === 0) return res.status(400).json({ error: 'User not found' });

        const user = users[0];

        if (!user.verification_otp || user.verification_otp !== otp) {
            return res.status(400).json({ error: 'Invalid verification code' });
        }

        if (new Date(user.verification_otp_expires) < new Date()) {
            return res.status(400).json({ error: 'Verification code has expired. Please register again.' });
        }

        // Mark as verified
        await db.execute(
            'UPDATE users SET is_verified = 1, verification_otp = NULL, verification_otp_expires = NULL WHERE id = ?',
            [user.id]
        );

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: { id: user.id, name: user.name, email: user.email },
            message: 'Email verified successfully!'
        });

    } catch (err) {
        console.error('Verify Registration error:', err);
        res.status(500).json({ error: 'Failed to verify email' });
    }
});

module.exports = router;
