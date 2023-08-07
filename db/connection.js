const mariadb = require("mariadb");
require("dotenv").config();
const { DB_HOSTNAME, DB_PASSWORD, DB_USERNAME, DB_PORT, DB_NAME } = process.env;
const pool = mariadb.createPool({
  host: DB_HOSTNAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME,
  connectionLimit: 5, // Adjust the connection limit as needed
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log("not connected due to error: " + err);
  } else {
    console.log("connected ! connection id is " + conn.threadId);
    conn.end(); //release to pool
  }
});

module.exports = pool;
