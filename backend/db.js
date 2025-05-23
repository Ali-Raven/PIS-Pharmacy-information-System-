const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

connection.connect((err) => {
    err ? console.log(`Error connecting to the database : ${err}`) :
     console.log('Connecting to the database is successful ...');
})

module.exports = connection;
