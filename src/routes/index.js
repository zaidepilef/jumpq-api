const { Router } = require('express');
const index = Router();

const info = require('./info.json');

//console.log('info : ',info);

index.get('/',(req,res) => {
    
    res.json(info);
});

module.exports = index;