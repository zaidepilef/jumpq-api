const { Router, request } = require('express');
const MySqlConnection = require('../database');
const BranchSettings = Router();

//model


// GET
BranchSettings.get('/:id', (req, response) => {

    const { daily_schedule_date, branch_office_id } = req.body;
    //SELECT * FROM `branch_daily_schedule` WHERE `daily_schedule_date` = '2020-07-07' ORDER BY `branch_office_id` ASC
    var query = "SELECT * FROM `branch_daily_schedule` WHERE `daily_schedule_date` = ? AND `branch_office_id` = ? ORDER BY `branch_office_id` ASC";
    // var schedules =null;
    MySqlConnection.query(query, [
        daily_schedule_date,
        branch_office_id
    ], (err, rows, fields) => {
        if (!err) {
            // schedules = rows;
            response.json({ status: "OK", schedules: rows })
        } else {
            // console.log(err);
            response.json({ status: "ERROR", message: err })
        }
    });

});


BranchSettings.post('/getschedule', (req, response) => {

    const { daily_schedule_date, branch_office_id } = req.body;
    //SELECT * FROM `branch_daily_schedule` WHERE `daily_schedule_date` = '2020-07-07' ORDER BY `branch_office_id` ASC
    var query = "SELECT * FROM `branch_daily_schedule` WHERE `daily_schedule_date` = ? AND `branch_office_id` = ? ORDER BY `branch_daily_schedule`.`daily_schedule_hour` ASC";
    // var schedules =null;
    MySqlConnection.query(query, [
        daily_schedule_date,
        branch_office_id
    ], (err, rows, fields) => {
        if (!err) {
            // schedules = rows;
            response.json({ status: "OK", schedules: rows })
        } else {
            // console.log(err);
            response.json({ status: "ERROR", message: err })
        }
    });

});


// GET
BranchSettings.post('/addschedule', (_required, response) => {

    const { daily_schedule_date, daily_schedule_hour, cant_clients, branch_office_id } = _required.body;
    //INSERT INTO `branch_daily_schedule` (`daily_schedule_id`, `daily_schedule_date`, `daily_schedule_hour`, `cant_clients`, `branch_office_id`) VALUES (NULL, '2020-07-07', '00:00:00', '12', '5'), (NULL, '2020-07-07', '00:00:00', '12', '5');
    var query = "INSERT INTO `branch_daily_schedule` ( `daily_schedule_date`, `daily_schedule_hour`, `cant_clients`, `branch_office_id`) VALUES ( ?, ?, ?, ?)";
    MySqlConnection.query(query,
        [
            daily_schedule_date,
            daily_schedule_hour,
            cant_clients,
            branch_office_id
        ], (err, rows, fields) => {
            if (!err) {
                response.json({ message: "Daily Saved", status: "OK" })
            } else {
                response.json({ message: err, status: "ERROR" })
            }
        });


});



module.exports = BranchSettings;
