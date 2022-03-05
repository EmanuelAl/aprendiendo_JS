//CONTROLADOR
/* va a ser una especie de clase o objetojson
con una serie de metodos o acciones
que va a poder hacer relacionadas con la
entidad definidida en el modelo

en este caso la entidad relacionada en la entidad
de project*/


var Project = require('../models/project');


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
    },
//metodo para guardar documentos de proyectos
    saveProject(req, res){
        let project = new Project();

        //para recorger los params que me llegan por el body en la peticion
        //y crear y preparar el objeto
        let params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        //para guardar en la base de datos usamos el metodo .save() del mongoose
        project.save((err, projectStored)=>{
            if(err) return req.status(500).send({message:'Error al guardar el documento'});

            if(!projectStored) return res.status(404).send({message:'No se ha podido guardar el proyecto'});

            return res.status(200).send({project: projectStored});
        });


        // return res.status(200).send({
        //     project: project,//deveuelve el objeto para mostrarlo en postman
        //     message: 'Metodo saveProject'
        // });
    }



};

module.exports = controller;