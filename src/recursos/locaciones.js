const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Locaciones = Router();
const sqlConcat = require('sql-concat')

//model
var locacion = {
    id: "",
    nombre: "",
    comuna: "",
    direccion: ""
}

// GET ALL
Locaciones.get('/', (req, response) => {
    const { comuna } = req.query;

    let query = sqlConcat.select('*').from('locaciones')

    if (!(comuna == undefined || comuna == '')) {
        query = query.where('locaciones.comuna', comuna)
    }

    query = query.build()

    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows)
        } else {
            response.status(500).json(err)
        }
    });

});

// GET BY ID
Locaciones.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM locaciones WHERE id = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows[0])
        } else {
            response.status(500).json(err)
        }
    });
});

// CREATE new
Locaciones.post('/', (req, response) => {

    const {
        nombre,
        comuna,
        direccion
    } = req.body;

    locacion.nombre = nombre ? nombre : response.response.status(400).json({ status: "ERROR", message: "nombre is required" });
    locacion.comuna = comuna ? comuna : response.response.status(400).json({ status: "ERROR", message: "comuna is required" });;
    locacion.direccion = direccion ? direccion : response.response.status(400).json({ status: "ERROR", message: "direccion is required" });

    let query = "INSERT INTO `locaciones` (`nombre`, `comuna`, `direccion`) VALUES (?, ?, ?)";

    MySqlConnection.query(query, [locacion.nombre, locacion.comuna, locacion.direccion], (err, rows) => {
        if (!err) {
            response.status(201).json({ message: "locaciones Saved", status: "OK", id: rows.insertId })
        } else {
            response.status(500).json({ message: err, status: "ERROR" })
        }
    });
});

// PUT update
Locaciones.put('/:id', (req, response) => {

    const { id } = req.params;
    const {
        nombre,
        comuna,
        direccion
    } = req.body;

    if (!id) {
        response.status(400).json({ message: "id is required" })
        return;
    } else {

        if (!(nombre == undefined || nombre == '')) {
            locacion.nombre = nombre
        } else {
            response.status(400).json({ status: "ERROR", message: "nombre is required" })
            return;
        }

        if (!(comuna == undefined || comuna == '')) {
            locacion.comuna = comuna
        } else {
            response.status(400).json({ status: "ERROR", message: "comuna is required" })
            return;
        }

        if (!(direccion == undefined || direccion == '')) {
            locacion.direccion = direccion
        } else {
            response.status(400).json({ status: "ERROR", message: "direccion is required" })
            return;
        }

        var query = "UPDATE `locaciones` SET `nombre` = ?, `comuna` = ?, `direccion` = ? WHERE `locaciones`.`id` = ?";

        MySqlConnection.query(query, [
            locacion.nombre,
            locacion.comuna,
            locacion.direccion,
            id
        ], (err, rows, fields) => {
            if (!err) {
                response.status(204).json({
                    status: "OK",
                    message: "eventos updated"
                })
            } else {
                response.status(500).json({
                    status: "ERROR",
                    message: err
                })
            }
        });
    }



});



module.exports = Locaciones;