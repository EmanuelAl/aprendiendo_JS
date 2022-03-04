//CONFIG DE SERVIDOR CON EXPRESS Y BODY PARSER


//indicamos que acceda al directorio 
// de node_modules,vaya a la 
// carpeta de express y cargue la libreria
var express = require('express'); 
var bodyParser = require('body-parser');//lo mismo hace con la libreria body parser

var app = express();

//carga de archivos de rutas
var project_routes = require('./routes/project');



//middlewares  (metodo que se ejecuta antes de ejecutar la accion  de el resultado de una peticion)
app.use(bodyParser.urlencoded({extended:false}));//config necesaria para el bodyParser
app.use(bodyParser.json());//usamos bodyparser para que cualquier dato que me llegue por post lo convierta en un objeto json

//CORS




// **************RUTAS (endpoint)*****************
// // primer ejemplo RUTA:
// app.get('/test',(request,response) => {
//     response.status(200).send({
//         message: "Hola mundo desde mi API de NodeJS"
//     });
// });
// app.post('/test',(request,response) => {//peticion para hacer envios de datos/guardar datos que se le envian al servidor
//     //console.log(request);//imprime los datos que estoy enviando al servidor
//     //console.log(request.body.nombre);//recogemos los datos que enviamos a traves del body, en este caso recogemos el nombre que estamos enviando
//     console.log(request.query.web);//http://localhost:3700/test?web=youtbe.com en 'postman' por post enviamos 
//     //en la url el parametro youtbe.com y lo mostramos con request.query.web, en consola imprime "youtbe.com"

//     //video del curso explicativo del tema: nro220
//     response.status(200).send({
//         message: "respuesta post de mi API de NodeJS"
//     });
// });
// //Ejemplo para usar el request.params para capturar parametro en url 'id'  :

// app.post('/test/:id',(request,response) => { //http://localhost:3700/test/88?web=youtbe.com en 'postman' por post enviamos 
//  //en la url el id y lo mostramos con request.params.id 
//     console.log(request.params.id);//imprime por consola el 88, que es id que pasamos por url

//    //video del curos explicativo del tema: nro220
//     response.status(200).send({
//         message: "respuesta post de mi API de NodeJS con parametro id en url"
//     });
// });
// // segundo ejemplo RUTA:
// app.get('/',(request,response) => {
//     response.status(200).send(
//      "<h1>Pagina de inicio</h1>"
//     );
// });
// RUTAS (endpoint)
app.use('/api', project_routes);






//***************  exportar ***************
module.exports = app;
