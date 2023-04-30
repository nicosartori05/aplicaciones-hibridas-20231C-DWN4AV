import * as service from '../services/alumnos.service.js';
import * as view from '../views/alumnos.view.js';  

function getAlumnos(req, res) {
    service.getAlumnos({ eliminado: true })
        .then(function (alumnos) {
            res.send(view.crearPaginaListaAlumnos(alumnos))
        })
}


function getAlumnosById(req,res) {
    const legajoAlumno = req.params.legajoAlumno;

    service.getAlumnoById(legajoAlumno)
        .then(function(alumno){
            console.log(alumno)
            if(alumno) {
                res.send(view.crearPaginaAlumno(alumno));
            }else{
                res.send(view.crearPagina('Error','<p>Alumno no encontrado</p>'))
            }
        })
}

function formCrearNuevoAlumno(req, res){
    res.send(view.formCrearNuevoAlumno())
}

function createAlumno(req,res){
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        ano: req.body.ano
    }
    service.createAlumno(alumno)
    .then(function(newAlumno){
        res.send(view.crearPagina('Alumno creado', `<p>${newAlumno.nombre} creado con el legajo ${newAlumno.legajo}</p>`))
    })
    .catch(function(err){
        res.send(view.crearPagina('Error','<p>Ocurrio un error al crear el alumno.</p>'))
    })
}

function editFormAlumno(req,res){
    debugger
    const legajoAlumno = req.params.legajoAlumno

    console.log('legajo alumno a editar: '. legajoAlumno)
    service.getAlumnoById(legajoAlumno)
        .then(function(alumno){
            if(alumno){
                res.send(view.crearPaginaEditFormAlumno(alumno))
            }else{
                res.send(view.crearPagina('No se encontro!', '<h2>No se encontro el alumno solicitado</h2>'))
            }
        })
}

function editAlumno(req,res){
    const legajo = req.params.legajoAlumno

    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        ano: req.body.ano,
    }
    console.log(alumno)

    service.editAlumno(legajo,alumno)
        .then(function(alumno){
            if(alumno) {
                res.send(view.crearPagina('Alumno Modificado', `<h2>Alumno #${alumno.legajo} modificado con exito!</h2>`))
            }else{
                res.send(view.crearPagina('No se encontro', '<h1>No se encontro el alumno solicitado</h1>'))
            }
        })
}

function borrarAlumnoForm(req, res) {
    const legajoAlumno = req.params.legajoAlumno

    service.eliminarAlumno(legajoAlumno)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.crearFormBorrarAlumno(alumno))
            }
            else {
                res.send(view.crearPagina('No se encontro!', '<h1>No se encontro el alumno solicitado</h1>'))
            }
        })

}

function eliminarAlumno(req, res) {
    const legajoAlumno = req.params.legajoAlumno

    service.eliminarAlumno(legajoAlumno)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.crearPagina('alumno Eliminado', `<h2>alumno #${alumno.legajo} eliminado con exito!</h2>`))
            }
            else {
                res.send(view.crearPagina('No se encontro!', '<h1>No se encontro el alumno solicitado</h1>'))
            }
        })
}

export{
    getAlumnos,
    getAlumnosById,
    formCrearNuevoAlumno,
    createAlumno,
    editFormAlumno,
    editAlumno,
    borrarAlumnoForm,
    eliminarAlumno
}