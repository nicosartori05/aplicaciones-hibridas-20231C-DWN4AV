import * as service from '../services/alumnos.serivces.js';
import * as views from '../views/alumnos.views.js';

const getAlumns = (req, res) => {
    service.getAlumns()
    .then(function(alumns){
        res.send(views.createAlumnListPage(alumns))
    })
}

const getAlumnsById = (req, res) => {
    let idAlumn = req.params.idAlumn;

    service.getAlumnsById(idAlumn)
    .then(function(alumn){
        if (alumn) {
            res.send(views.createAlumnPage(alumn))           
        }else{
            res.send(views.createPage('Error', '<p>Alumno no encontrado</p>'))
        }
    })
}

export {
    getAlumns,
    getAlumnsById
}