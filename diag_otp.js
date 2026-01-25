const db = require('./db');

async function test() {
    try {
        const [users] = await db.execute('SELECT email, verification_otp FROM users WHERE email LIKE "testbot%"');
        console.log(JSON.stringify(users, null, 2));
        process.exit(0);
    } catch (err) {
        console.error('DB Diagnostic Error:', err);
        process.exit(1);
    }
}

test();
