import { readFile } from "fs/promises";

async function getAlumns(){
    return readFile('./data/alumnos.json')
    .then(function(data){
        return JSON.parse(data);
    })
    .catch(function(err){
        return [];
    })
}

async function getAlumnsById(idAlumno) {
    return getAlumns()
    .then(function(alumns){
        for (let i = 0; i < alumns.length; i++) {
            if (alumns[i].nombre == idAlumno) {
                return alumns[i];
            }
        }
        return null
    })
}

export {
    getAlumns,
    getAlumnsById
}