const mysql = require('mysql');

const MySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eshop'
});

MySqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = MySqlConnection;