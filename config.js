const mysql = require('mysql2');
const sequelize = require('sequelize');
require('dotenv').config();

const db ={
host:process.env.DB_HOST,
port:process.env.DB_PORT,
database:process.env.DB_NAME,
username :process.env.DB_USERNAME,
password : process.env.DB_PASSWORD,
}
module.exports= db;