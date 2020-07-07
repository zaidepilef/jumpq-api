const { Router } = require('express');
const test = Router();

test.get('/',(req,res) => {
    
    res.json("OK, happy coding!!!");
});

module.exports = test;