require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

const query = "ALTER TABLE items MODIFY COLUMN status ENUM('available', 'pending', 'reserved', 'sold', 'deleted') DEFAULT 'available'";

console.log('Running query:', query);

connection.query(query, (err, results) => {
    if (err) {
        console.error('FAILED to alter table:', err);
        process.exit(1);
    }
    console.log('Successfully altered table items to include "deleted" status.');
    process.exit(0);
});
