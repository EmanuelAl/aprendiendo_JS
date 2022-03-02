//CONFIG DE SERVIDOR CON EXPRESS Y BODY PARSER


//indicamos que acceda al directorio 
// de node_modules,vaya a la 
// carpeta de express y cargue la libreria
var express = require('express'); 
var bodyParser = require('body-parser');//lo mismo hace con la libreria body parser

var app = express();

//carga de archivos de rutas

//middlewares  (metodo que se ejecuta antes de ejecutar la accion  de el resultado de una peticion)
app.use(bodyParser.urlencoded({extended:false}));//config necesaria para el bodyParser
app.use(bodyParser.json());//usamos bodyparser para que cualquier dato que me llegue por post lo convierta en un objeto json

//CORS

// RUTAS
// primer ejemplo RUTA:
app.get('/test',(request,response) => {
    response.status(200).send({
        message: "Hola mundo desde mi API de NodeJS"
    });
});
// segundo ejemplo RUTA:
app.get('/',(request,response) => {
    response.status(200).send(
     "<h1>Pagina de inicio</h1>"
    );
});
// exportar 
module.exports = app;
