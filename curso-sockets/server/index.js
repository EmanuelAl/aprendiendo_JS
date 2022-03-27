//Configuracion:
var express = require('express');
var app = express();

var server = require('http').Server(app);//esta variable server se la pasamos a socket.io 
//para que entienda que va a estar trabajando con sockets 
//dentro de la conexion http y servidor http que creemos 
var io = require('socket.io')(server,{
    cors: { // Permite el acceso de orígenes mixtos (CORS)
        origin: '*'
    }
});//le pasamos al socket.io la variable server que engloba http y la app ,
//ya con esta configuracion basica podemos hacer uso de los sockets

//vista HTML stactica por defecto
app.use(express.static('client'));//middleware, se ejecuta antes que se realice otra peticion
// express.static('client') sirve para indicar que utilice el html que haya en la carpeta client, que seria el/los html estaticos


var messages = [{
    id: 1,
    text:'Bienvenido al chat privado de Socket.io y NodeJS de Emanuel Alderete',
    nickname:"Bot - EmanuelAlderete.com"
}];


// el metodo .on nos permite lanzar Eventos 
// el evento connection lo mandamos al cliente
//sirve para recibir las conexiones de los clientes y va a detectar cada vez que un cliente se conecte
io.on('connection', function(socket){//cuando se conecte ,se ejecuta el callback
    console.log("alguien se ha conectado con socket");
    console.log("El cliente con IP: "+socket.handshake.address+" se ha conectado...");
               //   evento , callback
    socket.emit('messages', messages);

    socket.on('add-message', function(data){
        messages.push(data);
        
        io.sockets.emit('messages', messages);//emite para todos los que esten conectados
    });
});



//ruta de prueba 
app.get('/hola-mundo', (req, res)=>{
    res.status(200).send('Hola mundo desde una ruta');
});

server.listen(6677, function(){//pasamos el nro de puerto, y funcion callback
    console.log("Servidor está funcionando en http://localhost:6677");
});