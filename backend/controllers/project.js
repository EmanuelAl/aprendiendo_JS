//CONTROLADOR
/* va a ser una especie de clase o objetojson
con una serie de metodos o acciones
que va a poder hacer relacionadas con la
entidad definidida en el modelo

en este caso la entidad relacionada en la entidad
de project*/


var Project = require('../models/project');
var fs = require('fs');//libreria file system para borrar un archivo 

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
        project.description = params.descripcion;//corrigo project.descripcion por project.description
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

    },

    updateProject(req, res){//para actualizar un project por id
        var projectId = req.params.id;//recoge el parametro id que pasamos por url
        var update = req.body;//lo que pasamos por el body representa lo que queramos actualizar
        //{new: true} para que el metodo devuelva el objeto actualizado(y no el antiguo )cuando se hace el res.status(200)
        Project.findByIdAndUpdate(projectId, update, { new:true }, (err, projectUpdate) => {

            if(err) return res.status(500).send({message:'Error al actualizar'});

            if(!projectUpdate) return res.status(404).send({message:'No existe el proyecto para actualizar'});

            return res.status(200).send({
                project: projectUpdate
            });
        });
    },
    
    deleteProject(req, res){//para eleminar un projecto por id 
        let projectId = req.params.id;
//Aclaracion:
//.findByIdAndRemove y findByIdAndDelete hacen lo mismo, eliminan 

        Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
            if(err) return res.status(500).send({message:'No se ha podido borrar el proyecto'});

            if(!projectRemoved) return res.status(404).send({message:'No se puede eliminar ese proyecto'});

            return res.status(200).send({//devuelve el objeto eliminado
                project: projectRemoved
            });
        });

    },

    uploadImage(req,res){//para subir archivos de imagenes
        let projectId = req.params.id;
        let fileName = 'Imagen no subida...';

        if(req.files){
            let filePath = req.files.image.path;
            //usamos el metodo de cadenas .split() para recortar string, este metodo devuelve un array
            let fileSplit = filePath.split('\\');//recortamos la ruta del archivo el path
            let fileName = fileSplit[1];//indicamos que el nombre del archivo estaria en el indice uno 
            let extSplit = fileName.split('\.');//recortamos por el . del archivo para obtener la extension
            let fileExt = extSplit[1];//en el indice 1 esta la extension

            if(fileExt == 'png' ||  fileExt == 'jpg' ||  fileExt == 'jpeg' ||  fileExt == 'gif'){//se guardara el archivo si la extension coincide con estas opciones
                Project.findByIdAndUpdate(projectId, {image: fileName},{new: true},(err, projectUpdate) => {
                    if(err) return res.status(200).send({message:'La imagen no se ha subido'});
    
                    if(!projectUpdate) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});
    
                    return res.status(200).send({
                        project: projectUpdate
                    });
                });
            }else{

                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message:'La extension no es valida'});
                });
            }
            


            // console.log(req.files);
            // return res.status(200).send({
            //     files: fileName
            // });
        }else{
            return res.status(200).send({
                message: fileName
            });
        }


    }



};

module.exports = controller;