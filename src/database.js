const mysql = require('mysql');
require('dotenv').config()

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

const MySqlConnection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

MySqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('database connected');
    }
});

module.exports = MySqlConnection;