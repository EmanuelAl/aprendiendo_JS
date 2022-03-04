//CONTROLADOR
/* va a ser una especie de clase o objetojson
con una serie de metodos o acciones
que va a poder hacer relacionadas con la
entidad definidida en el modelo

en este caso la entidad relacionada en la entidad
de project*/

var controller = {
    home: function(require,response){
        return response.status(200).send({
            message: 'Soy la home'
        });
    },

    test(require,response) {//declaro una funcion metodo como la anterior pero aplico ES6
        return response.status(200).send({
            message:'Soy el metodo o acción test del controlador de project'
        });
    }
};

module.exports = controller;