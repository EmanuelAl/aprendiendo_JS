
var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();//usamos este servicio Router() para crear rutas


router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project', ProjectController.saveProject);//para guardar un project
router.get('/project/:id?',ProjectController.getProject);//para  consultar un project
                  // :id asi es obligatorio con los :
                  // :id? asi es opcional  
router.get('/projects',ProjectController.getProjects);//para obtener la lista de todos los proyectos
router.put('/project/:id',ProjectController.updateProject);//para actualizar un projecto pasando el id por url
router.delete('/project/:id',ProjectController.deleteProject);//para borrar/eliminar un projecto pasando el id por url

module.exports = router;