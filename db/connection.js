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

// const pool = mariadb.createPool({
//   host: 'un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   user: 'an4fuvb6qgbvaihy',
//   password: 'umzhfjouts7arze6',
//   port: '3306',
//   database: 'pzowcj8qn5zqp14y',
//   connectionLimit: 5, // Adjust the connection limit as needed
// });



pool.getConnection((err, conn) => {
  if (err) {
    console.log("not connected due to error: " + err);
  } else {
    console.log("connected ! connection id is " + conn.threadId);
    conn.end(); //release to pool
  }
});

module.exports = pool;
