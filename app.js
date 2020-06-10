//Inyección de dependencias.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
app.use('/assets', express.static(__dirname + '/public')); //Aquí estarán nuestros contenidos estáticos.
app.set('view engine', 'ejs');


//* Incio de sesion --> Inicio
app.get('/', (req, res) => {
    res.render('home')
});

app.post('/validar', urlencodedParser, (req, res) => {

});






app.listen(port, () => console.log(`Escuchando en el puerto...${port}`))


