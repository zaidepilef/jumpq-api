const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Eventos = Router();
const sqlConcat = require('sql-concat')

//model
var evento = {
    id: "",
    titulo: "",
    descripcion: "",
    descripcion_2: "",
    locacion: "",
    estado: ""
}

// GET ALL
Eventos.get('/', (req, response) => {
    const { estado, locacion } = req.query;
    
    let query = sqlConcat.select('*').from('eventos')
    
    if (!(estado == undefined || estado == '')) {
        query = query.where('eventos.estado', estado)
    }

    if (!(locacion == undefined || locacion == '')) {
        query = query.where('eventos.locacion', locacion)
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
Eventos.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM eventos WHERE id = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json(rows[0])
        } else {
            response.json(err)
        }
    });
});

// CREATE new
Eventos.post('/', (req, response) => {

    const {
        titulo,
        descripcion,
        descripcion_2,
        locacion
    } = req.body;

    
    if (!(titulo == undefined || titulo == '')) {
        evento.titulo = titulo
    } else {
        response.status(400).json({ status: "ERROR", message: "titulo is required" })
    }

    if (!(descripcion == undefined || descripcion == '')) {
        evento.descripcion = descripcion
    } else {
        response.status(400).json({ status: "ERROR", message: "descripcion is required" })
    }

    if (!(descripcion_2 == undefined || descripcion_2 == '')) {
        evento.descripcion_2 = descripcion_2
    } else {
        response.status(400).json({ status: "ERROR", message: "descripcion_2 is required" })
    }

    if (!(locacion == undefined || locacion == '')) {
        evento.locacion = locacion
    } else {
        response.status(400).json({ status: "ERROR", message: "locacion is required" })
    }    
    evento.estado = "CREADO";

    var query = "INSERT INTO `eventos` (`titulo`, `descripcion`, `descripcion_2`,`locacion`, `estado`) VALUES ( ?, ?, ?, ?, ?)";
    MySqlConnection.query(query, [evento.titulo, evento.descripcion, evento.descripcion_2, evento.locacion, evento.estado], (err, rows) => {
        if (!err) {
            response.status(201).json({ message: "eventos Saved", status: "OK", id: rows.insertId })
        } else {
            response.status(500).json({ message: err, status: "ERROR" })
        }
    });
});

// PUT update
Eventos.put('/:id', (req, response) => {

    const { id } = req.params;
    const {
        titulo,
        descripcion,
        descripcion_2,
        locacion,
        estado
    } = req.body;

    if (!id) {
        
        response.status(400).json({ status: "ERROR", message: "id is required" })
        return;

    } else {

        if (!(titulo == undefined || titulo == '')) {
            evento.titulo = titulo
        } else {
            response.status(400).json({ status: "ERROR", message: "titulo is required" })
        }

        if (!(descripcion == undefined || descripcion == '')) {
            evento.descripcion = descripcion
        } else {
            response.status(400).json({ status: "ERROR", message: "descripcion is required" })
        }

        if (!(descripcion_2 == undefined || descripcion_2 == '')) {
            evento.descripcion_2 = descripcion_2
        } else {
            response.status(400).json({ status: "ERROR", message: "descripcion_2 is required" })
        }

        if (!(locacion == undefined || locacion == '')) {
            evento.locacion = locacion
        } else {
            response.status(400).json({ status: "ERROR", message: "locacion is required" })
        }

        if (!(estado == undefined || estado == '')) {
            evento.estado = estado
        } else {
            response.status(400).json({ status: "ERROR", message: "estado is required" })
        }
        
        var query = "UPDATE `eventos` SET `titulo` = ?, `descripcion` = ?, `descripcion_2` = ?, `locacion` = ?, `estado` = ? WHERE `eventos`.`id` = ?";

        MySqlConnection.query(query, [
            evento.titulo,
            evento.descripcion,
            evento.descripcion_2,
            evento.locacion,
            evento.estado,
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
                    message: err,
                })
            }
        });
    }



});



module.exports = Eventos;