const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Companies = Router();

//model
var company = {
    _company_code: "",
    _company_business_name: "",
    _company_name: "",
    _company_description: ""
}

// GET
Companies.get('/', (req, response) => {
    var query = "SELECT * FROM `company` ORDER BY `company_id` DESC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", companies: rows })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});



// GET
Companies.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `company` WHERE `company_id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", company: rows[0] })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// GET RUT/COMPANY/CODE
Companies.get('/rut/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `company` WHERE `company_code` = '" + id +"'";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", company: rows[0] })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// POST
Companies.post('/', (req, response) => {
    const { code, business_name, name, description } = req.body;

    if (!code) {
        response.json({ message: "code is required", status: "ERROR" })
        return;
    }

    if (!business_name) {
        response.json({ message: "business_name is required", status: "ERROR" })
        return;
    }

    if (!name) {
        response.json({ message: "name is required", status: "ERROR" })
        return;
    }

    if (!description) {
        company._company_description = "";
    }

    company._company_code = code;
    company._company_name = name;
    company._company_business_name = business_name;
    company._company_description = description;

    var query = "INSERT INTO `company` (`company_id`, `company_code`, `company_business_name`, `company_name`, `company_description`) VALUES (NULL, ?, ?, ?, ?)";
    MySqlConnection.query(query, [
        company._company_code,
        company._company_name,
        company._company_business_name,
        company._company_description
    ], (err, rows, fields) => {
        if (!err) {
            response.json({ message: "Client Saved", status: "OK" })
        } else {
            response.json({ message: err, status: "ERROR" })
        }
    });
});

// PUT update
Companies.put('/:id', (req, response) => {

    const { id } = req.params;
    const { code, business_name, name, description } = req.body;

    if (!code) {
        response.json({ message: "code is required", status: "ERROR" })
        return;
    }

    if (!business_name) {
        response.json({ message: "business_name business is required", status: "ERROR" })
        return;
    }

    if (!name) {
        response.json({ message: "name is required", status: "ERROR" })
        return;
    }

    if (!description) {
        company._company_description = "";
    }

    company._company_code = code;
    company._company_name = name;
    company._company_business_name = business_name;
    company._company_description = description;

    var query = "UPDATE `company` SET `company_code` = ?, `company_name` = ?, `company_business_name` = ?, `company_description` = ? WHERE `company`.`company_id` = ?";

    MySqlConnection.query(query, [
        company._company_code,
        company._company_name,
        company._company_business_name,
        company._company_description, id
    ], (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", message: "Company Updated" })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// DELETE
Companies.delete('/:id', (req, response) => {

    const { id } = req.params;

    if (!id) {
        response.json({ status: "ERROR", message: "" })
        return;
    }
    var query = "DELETE FROM `company` WHERE `company_id` = ?";

    MySqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", message: "Company Deleted" })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });

});

module.exports = Companies;
