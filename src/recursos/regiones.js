const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Regions = Router();


// GET ALL
Regions.get('/', (req, response) => {
    var query = "SELECT * FROM `regiones` ORDER BY `id` ASC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows)
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});

// GET ID
Regions.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `regiones` WHERE `id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows[0])
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});


module.exports = Regions;
