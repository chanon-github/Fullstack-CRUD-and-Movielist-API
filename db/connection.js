require("dotenv").config();
const mysql = require('mysql2');

const { DB_HOSTNAME, DB_PASSWORD, DB_USERNAME, DB_PORT, DB_NAME } = process.env;
const connection = mysql.createConnection({
  host: DB_HOSTNAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  port:  DB_PORT,
  database: DB_NAME,
  ssl:{"rejectUnauthorized":true}
});

const query = async (queryString) =>{
    
  let results = await connection.promise().query(queryString)

  return results[0]
}
module.exports = query

