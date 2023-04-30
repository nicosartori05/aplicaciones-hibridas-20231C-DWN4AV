import express from 'express';
import * as controller from '../controllers/alumnos.controller.js';

const route = express.Router();

route.get('/alumnos', controller.getAlumnos)


route.get('/alumnos/nuevo', controller.formCrearNuevoAlumno)
route.post('/alumnos/nuevo', controller.createAlumno)

route.get('/alumnos/:legajoAlumno/edit', controller.editFormAlumno)
route.post('/alumnos/:legajoAlumno/edit', controller.editAlumno)

route.get('/alumnos/:legajoAlumno/borrar', controller.borrarAlumnoForm)
route.post('/alumnos/:legajoAlumno/borrar', controller.eliminarAlumno)

route.get('/alumnos/:legajoAlumno', controller.getAlumnosById)
export default route;