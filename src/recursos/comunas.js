const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Comunas = Router();

// GET ALL
Comunas.get('/', (req, response) => {
    var query = "SELECT * FROM `comunas` ORDER BY `id` ASC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows)
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});

// GET ID
Comunas.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `comunas` WHERE `id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows[0])
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});

// GET PROVINCIA ID
Comunas.get('/provincia/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `comunas` WHERE `provincia_id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows)
        } else {
            response.status(500).json({ status: "ERROR", message: err })
        }
    });
});

module.exports = Comunas;
