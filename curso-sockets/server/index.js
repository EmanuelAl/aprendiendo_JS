//Configuracion:
var express = require('express');
var app = express();

var server = require('http').Server(app);//esta variable server se la pasamos a socket.io 
//para que entienda que va a estar trabajando con sockets 
//dentro de la conexion http y servidor http que creemos 
var io = require('socket.io')(server);//le pasamos al socket.io la variable server que engloba lo que http y la app ,
//ya con esta configuracion basica podemos hacer uso de los sockets


//ruta de prueba 
app.get('/hola-mundo', (req, res)=>{
    res.status(200).send('Hola mundo desde una ruta');
});

server.listen(6677, function(){//pasamos el nro de puerto, y funcion callback
    console.log("Servidor está funcionando en http://localhost:6677");
});