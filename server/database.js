const { Pool } = require('pg');
//const{response} = require("express")
//require('dotenv').config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "loginDB",
  password: "Password01",
  port: 5432,
});

/*const createTblQry = `CREATE TABLE accounts(
    user_id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) UNIQUE NOT NULL);`

pool
.query(createTblQry)
.then((Response) => {
    console.log("Table created");
    console.log(response);
})
.catch((err)=>{
    console.log(err);
});*/

module.exports = pool;