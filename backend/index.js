//inicio de configuracion de conexion con base de datos
var mongoose = require('mongoose');
//para conectar con servidor
var app = require('./app');
var port = 3700;//puerto del servidor

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(() =>{
            console.log("Conexion a la base de datos establecida con éxito...");

            //creacion del servidor
            app.listen(port, () => {
                console.log("servidor corriendo correctamente en la url: localhost:3700");
            });

    }).catch( err => console.log(err));
//fin de configuracion de conexion con base de datos