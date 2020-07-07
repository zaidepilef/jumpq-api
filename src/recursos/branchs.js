const { Router, request } = require('express');
const MySqlConnection = require('../database');
const Branchs = Router();

//model
var _branch = {
    _company_id: "",
    _name: "",
    _adress_1: "",
    _adress_2: "",
    _comuna_id: "",
    _url_map: ""
}

// GET
Branchs.get('/', (_required, response) => {
    var query = "SELECT * FROM `branch_office` ORDER BY `branch_id` DESC";
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", branchs: rows })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// GET
Branchs.get('/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `branch_office` WHERE `branch_id` = " + id;
    MySqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            if (rows.length == 0) {
                response.json({ status: "OK", branch: null })
            } else {
                response.json({ status: "OK", branch: rows[0] })
            }
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// GET LINK MAP
Branchs.get('/link/:id', (req, response) => {
    const { id } = req.params;
    var query = "SELECT * FROM `branch_office` WHERE `name_link` = '" + id + "'";
    MySqlConnection.query(query, (err, rows, fields) => {

        if (!err) {
            if (rows.length == 0) {
                response.json({ status: "OK", branch: null })
            } else {
                response.json({ status: "OK", branch: rows[0] })
            }
        } else {
            response.json({ status: "ERROR", message: err })
        }

    });
});

// POST
Branchs.post('/', (req, response) => {

    const { code, business_name, name, description } = req.body;

    if (!code) {
        response.json({ status: "ERROR", message: "Code is required" })
        return;
    }

    if (!business_name) {
        response.json({ status: "ERROR", message: "Name business is required" })
        return;
    }

    if (!name) {
        response.json({ status: "ERROR", message: "Name is required" })
        return;
    }

    if (!description) {
        company._company_description = "";
    }

    _branch._company_id = code;
    _branch._name = name;
    _branch._adress_1 = business_name;
    _branch._adress_2 = description;
    _branch._comuna_id = description;
    _branch._url_map = description;


    //INSERT INTO `branch_office` (`branch_id`, `company_id`, `branch_name`, `branch_adress_1`, `branch_adress_2`, `comuna_id`, `url_location_map`) VALUES (NULL, '5', 'Desabolladura y Pintura', 'Chacabuco 2012, Valparaíso', NULL, '81', NULL);
    var query = "INSERT INTO `branch_office` (`company_id`, `branch_name`, `branch_adress_1`, `branch_adress_2`, `comuna_id`, `url_location_map`) VALUES ( '5', 'Desabolladura y Pintura', 'Chacabuco 2012, Valparaíso', NULL, '81', NULL);";
    MySqlConnection.query(query,
        [
            _branch._company_id,
            _branch._name,
            _branch._adress_1,
            _branch._comuna_id,
            _branch._url_map
        ],
        (err, rows, fields) => {
            if (!err) {
                response.json({ message: "Branch Saved", status: "OK" })
            } else {
                response.json({ message: err, status: "ERROR" })
            }
        });
});

// PUT update
Branchs.put('/:id', (req, response) => {

    const { id } = req.params;
    const { code, business_name, name, description } = req.body;

    if (!code) {
        response.json({ status: "ERROR", message: "Code is required" })
        return;
    }

    if (!business_name) {
        response.json({ status: "ERROR", message: "Name business is required" })
        return;
    }

    if (!name) {
        response.json({ status: "ERROR", message: "Name is required" })
        return;
    }

    if (!description) {
        company._company_description = "";
    }

    company._company_code = code;
    company._company_name = name;
    company._company_business_name = business_name;
    company._company_description = description;

    var query = "UPDATE `branch_office` SET `company_code` = ?, `company_name` = ?, `company_business_name` = ?, `company_description` = ? WHERE `company`.`company_id` = ?";

    MySqlConnection.query(query, [
        company._company_code,
        company._company_name,
        company._company_business_name,
        company._company_description, id
    ], (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", message: "Branch Updated" })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });
});

// DELETE
Branchs.delete('/:id', (req, response) => {

    const { id } = req.params;

    if (!id) {
        response.json({ status: "ERROR", message: "" })
        return;
    }
    var query = "DELETE FROM `branch_office` WHERE `branch_id` = ?";

    MySqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            response.json({ status: "OK", message: "Branch Deleted" })
        } else {
            response.json({ status: "ERROR", message: err })
        }
    });

});

module.exports = Branchs;
