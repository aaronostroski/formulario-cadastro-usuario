const express = require('express'); 
const consign = require('consign');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser({ extended: false}));
app.use(bodyParser.json());
consign().include('routes').into(app);


app.listen(3000, 'localhost', ()=>{

    console.log("Servidor iniciado.")

});