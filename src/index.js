
const express = require('express');
const app = express();
const morgan = require('morgan');


/**
 * settings
 */
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

/**
 * middlewares
 * con esto declaramos lo que el express permitira en este caso es json y url´s
 */

app.use(morgan('dev'));
 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/**
 * RUTAS
 * recursos con mnombre de rutas y verbos GET POST PUT UPDATE DELETE
 */
app.use('/api', require('./rutas/_test'));

app.use('/api/test', require('./rutas/index'));

app.use('/api/clients', require('./recursos/clients'));
app.use('/api/regions', require('./recursos/regions'));
app.use('/api/comunas', require('./recursos/comunas'));
app.use('/api/branchs', require('./recursos/branchs'));
app.use('/api/companies', require('./recursos/companies'));


app.use('/api/branchSettings', require('./recursos/branchSettings'));



// starting the server
app.listen(3000, () => {

    var port = app.get('port');
    console.log('node server at port:', port);
    //console.log('Server at puerto ${3000}');

})
