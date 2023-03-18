const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Provincias = Router();

// GET ALL
Provincias.get('/', (req, response) => {
    var query = "SELECT * FROM `provincias` ORDER BY `id` ASC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows)
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});

// GET ID
Provincias.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `provincias` WHERE `id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows[0])
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});

Provincias.get('/region/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `provincias` WHERE `region_id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows)
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});


module.exports = Provincias;
