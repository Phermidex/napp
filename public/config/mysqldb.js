const mysql = require('mysql');
require('dotenv').config();
// connection configurations
var dbConn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});
// connect to database
dbConn.connect();

module.exports = dbConn;