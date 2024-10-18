const mysql = require('mysql');
require('dotenv').config()


const connection = mysql.createConnection({
  host: process.env.HOST_KEY,
  port: process.env.USER_KEY,
  user: process.env.PORT_KEY,
  password: process.env.PASSWORD_KEY,
  database: process.env.DATABASE_KEY,
});



module.exports = connection;