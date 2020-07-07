const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Comunas = Router();

//model
var _comuna = {
    _company_id: "",
    _name: "",
    _adress_1: "",
    _adress_2: "",
    _comuna_id: "",
    _url_map: ""
}

// GET
Comunas.get('/', (req, response) => {
    var query = "SELECT * FROM `comuna` ORDER BY `comuna_id` DESC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", comunas: rows })
        } else {
            response.json({ status: "ERROR",  message: err })
        }
    });
});

// GET
Comunas.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `comuna` WHERE `comuna_id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
       
        if (!err) {
            response.json({ status: "OK", comuna: rows[0] })
        } else {
            response.json({ status: "ERROR",  message: err })
        }
    });
});


module.exports = Comunas;
