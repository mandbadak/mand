const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',    // Your database host (e.g., localhost)
    user: 'root',         // Your MySQL username
    password: 'ved1210', // Your MySQL password
    database: 'ecommerce_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

module.exports = db;
