
const express = require('express'); //import express framework
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const db = require('./db');

const app = express(); //express creates a server object that listens to HTTP requests.
app.use(bodyParser.json()); //middleare:parses json
//checks Content-Type: application/json and parses JSON string body into a JS object. 
//It then sets req.body = { name, email, password }. Without it, req.body would be undefined.
app.use(bodyParser.urlencoded({ extended: true }));//decodes html form submissions and parses the data
//extended:true allows for rich(nested) objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Register route
app.post('/register', async (req, res) => { //res and req are objects
  try {
    const { name, email, password } = req.body;//object destructuring
    const [existing] = await db.execute('SELECT * FROM users WHERE email = ?', [email]); //db.execute returns an array
    // which then Takes the first element of the array (rows) and assign it to the variable existing.
    if (existing.length > 0) { //existing is an array of rows returned from the database query.
      return res.status(400).send('Email already registered!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);//await pauses the function until the password is hashed.
    await db.execute( //.execute returns a Promise that resolves to an array containing the results and fields
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    res.send('User registered!'); //sends a response back to the client
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(400).send('User not found');

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send('Incorrect password');

    res.send('Login successful!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
