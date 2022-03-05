
var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();//usamos este servicio Router() para crear rutas


router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project', ProjectController.saveProject);

module.exports = router;