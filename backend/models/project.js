//video clase nro 221 crear modelos

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({ //definimos el objeto molde
    name: String,
    descripcion: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});
            //mongoose.model( nombre entidad, esquema);
module.exports = mongoose.model('Project',ProjectSchema);
//projects  --> guarda los documents en la coleccion

// con esto tenemos todo listo para que cada objeto que creemos con este modelo esquema
// se guarde en la base de datos de mongodb, en la coleccion projects , le pasamos como nombre de entidad
// 'Projects' y el squema, pero lo que hace mongoose es pluralizar y poner en minusculas
// el nombre de la entidad 'Project', quedando en la base de datos 'projects', si 
//el nombre de la entidad en la base de datos no existiese , se creará con el nombre de 'projects'
//y si ya existe , pues lo deja igual y guardara los datos(documents) en la coleccion, que en este caso
//el nombre de la coleccion es 'projects'

// mirar video si no se entendio la explicacion
