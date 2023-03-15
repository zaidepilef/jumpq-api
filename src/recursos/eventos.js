const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Eventos = Router();

//model
var evento = {
    id: "",
    titulo: "",
    descripcion: "",
    locacion: "",
    estado: ""
}

// GET
Eventos.get('/', (req, response) => {
    var query = "SELECT * FROM eventos ORDER BY id DESC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.status(200).json(rows)
        } else {
            response.json(err)
        }
    });
});

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

// POST
Eventos.post('/', (req, response) => {
    const { titulo, descripcion, locacion ,estado} = req.body;

    if (!titulo) {
        response.status(400).json({ status: "ERROR", message: "titulo is required" })
        return;
    }

    if (!descripcion) {
        response.status(400).json({ status: "ERROR", message: "descripcion is required" })
        return;
    }

    if (!locacion) {
        response.status(400).json({ status: "ERROR", message: "locacion is required" })
        return;
    }

    if (!estado) {
        response.status(400).json({ status: "ERROR", message: "estado is required" })
        return;
    }

    evento.titulo = titulo;
    evento.descripcion = descripcion;
    evento.locacion = locacion;
    evento.estado = estado;

    var query = "INSERT INTO `eventos` (`titulo`, `descripcion`, `locacion`, `estado`) VALUES ( ?, ?, ?, ?)";
    MySqlConnection.query(query, [evento.titulo, evento.descripcion, evento.locacion, evento.estado], (err, rows) => {
        if (!err) {
            response.status(201).json({ message: "eventos Saved", status: "OK", id: rows.insertId })
        } else {
            response.status(500).json({ message: err, status: "ERROR" })
        }
    });
});



// PUT update
Eventos.put('/:id',(req, response) => {

    const { name, lastname, email, phone, rut } = req.body;
    const { id } = req.params;

    if (!id) {
        response.json({ status: "ERROR", message: "" })
        return;
    }

    if (!name) {
        response.json({ status: "ERROR", message: "Name is required" })
        return;
    }

    if (!lastname) {
        response.json({ status: "ERROR", message: "Lastname is required" })
        return;
    }

    if (!email) {
        response.json({ status: "ERROR", message: "Email is required" })
        return;
    }

    if (!phone) {
        client._phone = "";
    }else{
        client._phone= phone;
    }

    if (!rut) {
        client._rut = "";
    }else{
        client._rut= rut;
    }

    client._name = name;
    client._lastname = lastname;
    client._email = email;

    var query = "UPDATE `clients` SET `client_name` = ?, `client_lastname` = ?, `client_email` = ?, `client_phone` = ?, `rut` = ? WHERE `clients`.`client_id` = ?";

    MySqlConnection.query(query, [client._name, client._lastname, client._email, client._phone, client._rut, id], (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", message: "Client Updated" })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});



module.exports = Eventos;