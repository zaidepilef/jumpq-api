const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Regions = Router();

//modeln
var _region = {
    _company_id: "",
    _name: "",
    _adress_1: "",
    _adress_2: "",
    _comuna_id: "",
    _url_map: ""
}

// GET
Regions.get('/', (req, response) => {
    var query = "SELECT * FROM `region` ORDER BY `region_id` DESC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", regions: rows })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// GET
Regions.get('/country/:id', (req, response) => {
    const { id } = req.params;

    var query = "SELECT * FROM `region` WHERE `country` = '" + id + "'";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", regions: rows })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// GET
Regions.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `region` WHERE `region_id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", region: rows[0] })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});


module.exports = Regions;
