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
    },

    getProject(req, res){
        var projectId = req.params.id;//recoge el parametro id que pasamos por url

        if(projectId == null) return res.status(404).send({message:'El proyecto no existe.'});


        Project.findById(projectId, (err, project) => {//.findId es un metodo que tiene mongoose, hay mas metodos, investigar en documentacion
             
            if(err) return res.status(500).send({message:'Error al devolver los datos'});

            if(!project) return res.status(404).send({message:'El proyecto no existe.'});

            return res.status(200).send({
                project
            });
        });
    },

    getProjects(req,res){//para obtener la lista de todos los proyectos
        //.find({}) es tambien un metodo mongoose
        //.find({}) puesto asi el metodo trae la lista de todos los projects
        //.find({year: 2019}) puesto asi filtraria la lista y traeria solo los projects que tengan ese parametro, osea en este ejemplo, los que coincidan con el year : 2019
        //.find({}).sort('year') me ordena la lista por año de menor a mayor,es decir, de mas antiguo a mas nuevo
        //.find({}).sort('-year') me ordena la lista por año de mayor a menor
        Project.find({}).exec((err, projects) => {
           
            if(err) return res.status(500).send({message:'Error al devolver los datos'});

            if(!projects) return res.status(404).send({message:'No hay proyectos que mostrar'});

            return res.status(200).send({projects});//devuelve un array de objetos 
        });

    }



};

module.exports = controller;