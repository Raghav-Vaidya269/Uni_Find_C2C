require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.query('DESCRIBE items', (err, results) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.table(results);
    process.exit(0);
});
