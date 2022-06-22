const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.USER_ID);
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_ID,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = pool;
