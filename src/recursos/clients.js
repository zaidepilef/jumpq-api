const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Clients = Router();

//model
var client = {
    _name: "",
    _lastname: "",
    _email: "",
    _phone: "",
    _rut: ""
}

// GET
Clients.get('/', (req, response) => {
    var query = "SELECT * FROM clients ORDER BY client_id DESC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json(rows)
        } else {
            response.json(err)
        }
    });
});

Clients.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM clients WHERE client_id = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json(rows[0])
        } else {
            response.json(err)
        }
    });
});

//getClientByEmail
Clients.get('/getClientByEmail/:email', (req, response) => {
    const { email } = req.params;
    var query = "SELECT * FROM clients WHERE client_email = '" + email + "'";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            if (rows.length == 0) {
                response.json({ status: "OK", client: null })
            } else {
                response.json({ status: "OK", client: rows[0] })
            }
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});



// POST
Clients.post('/', (req, response) => {
    const { name, lastname, email } = req.body;

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

    var query = "INSERT INTO `clients` (`client_id`, `client_name`, `client_lastname`, `client_email`, `client_phone`, `rut`) VALUES (NULL, ?, ?, ?, '', '')";
    MySqlConnection.query(query, [name, lastname, email], (err, rows) => {
        if (!err) {

            response.json({ message: "Client Saved", status: "OK", client_id:rows.insertId})
        } else {
            response.json({ message: err, status: "ERROR" })
        }
    });

   

});

// PUT update
Clients.put('/:id', (req, response) => {

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
    }

    if (!rut) {
        client._rut = "";
    }

    client._name = name;
    client._lastname = lastname;
    client._email = email;

    var query = "UPDATE `clients` SET `client_name` = ?, `client_lastname` = ?, `client_email` = ?, `cliente_phone` = ?, `rut` = ? WHERE `clients`.`client_id` = ?";

    MySqlConnection.query(query, [client._name, client._lastname, client._email, client._phone, client._rut, id], (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", message: "Client Updated" })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// DELETE
Clients.delete('/:id', (req, response) => {

    const { id } = req.params;

    if (!id) {
        response.json({ status: "ERROR", message: "" })
        return;
    }
    var query = "DELETE FROM `clients` WHERE `client_id` = ?";

    MySqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", message: "Client Deleted" })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });

});

module.exports = Clients;