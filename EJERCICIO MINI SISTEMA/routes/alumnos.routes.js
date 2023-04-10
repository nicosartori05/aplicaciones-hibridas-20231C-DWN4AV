import express from 'express';
import * as controller from '../controllers/alumnos.controllers.js';

const route = express.Router();

route.get('/alumnos', controller.getAlumns)
route.get('/alumnos/:idAlumn', controller.getAlumnsById)

export default route;