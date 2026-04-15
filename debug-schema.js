require('dotenv').config();
const mysql = require('mysql2');
// Run it to see what columns exist in the items table:
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.query('DESCRIBE items', (err, results) => { //connection.query(SQL, callback)
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.table(results);
    process.exit(0);
});
