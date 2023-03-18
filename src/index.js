
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config()


/**
 * settings
 */
 const PORT = process.env.PORT || 3000;
app.set('port', PORT);
app.set('json spaces', 2);

/**
 * middlewares
 * con esto declaramos lo que el express permitira en este caso es json y url´s
 */

app.use(morgan('dev'));
 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/**
 * RUTAS
 * recursos con nombre de rutas y verbos GET POST PUT UPDATE DELETE
 */

app.use('/api/test', require('./routes/index'));
app.use('/api/eventos', require('./recursos/eventos'));
app.use('/api/locaciones', require('./recursos/locaciones'));

app.use('/api/comunas', require('./recursos/comunas'));
app.use('/api/provincias', require('./recursos/provincias'));
app.use('/api/regiones', require('./recursos/regiones'));

// starting the server
app.listen(3000, () => {
    var port = app.get('port');
    console.log('node server at port:', port);
})
