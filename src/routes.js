const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController.js');
const infoController = require('./controllers/infoController.js');
const mailController = require('./controllers/mailController.js');

routes.get('/users',userController.indexAll);
routes.get('/user/:id',userController.index);
routes.post('/user',userController.store);
routes.put('/user/:id',userController.update);
routes.delete('/suer/:id',userController.delete);

routes.get('/infos',infoController.indexAll);
routes.get('/info/:id',infoController.index);
routes.get('/infos-priority',infoController.indexPriority);
routes.post('/info',infoController.store);
routes.put('/info/:id',infoController.update);
routes.delete('/info/:id',infoController.delete);

routes.post('/help',mailController.sendHelp);

module.exports = routes;