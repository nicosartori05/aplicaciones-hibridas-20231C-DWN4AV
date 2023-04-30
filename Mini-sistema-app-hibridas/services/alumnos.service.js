import { readFile, writeFile } from 'fs/promises';

async function getAlumnos (filter = {}){
    return readFile('./data/alumnos.json')
    .then(function(data){
        return JSON.parse(data)
    })
    .then(function (alumnos) {
        if (filter.eliminado) {
            const alumnosFiltrados = []

            for (let i = 0; i < alumnos.length; i++) {
                if (!alumnos[i].eliminado) {
                    alumnosFiltrados.push(alumnos[i])
                }
            }

            return alumnosFiltrados
        }
        else {
            return alumnos
        }
    })
    .catch(function(err){
        return[];
    })
}

/**
 * Se le pasa por parametro el legajo del alumno recibido por GET, buscamos su coincidencia dentro del array de alumnos y si coincide, lo devolvemos
 * @returns 
 */
async function getAlumnoById (legajoAlumno) {
    return getAlumnos()
        .then(function(alumnos){
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].legajo == legajoAlumno) {
                    return alumnos[i];
                }
            }
            return null
        })
}

async function createAlumno(alumno){
    const alumnos = await getAlumnos()
    const newAlumno = {
        ...alumno,
        legajo: alumnos.length + 1,
    };
    alumnos.push(newAlumno)

    await writeFile ('./data/alumnos.json', JSON.stringify(alumnos));

    return newAlumno;
}

async function guardarAlumnos(alumnos) {
    return writeFile('./data/alumnos.json', JSON.stringify(alumnos))
}

async function editAlumno(legajoAlumno, alumno) {
    const alumnos = await getAlumnos()
    let alumnoEditado = null

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].legajo == legajoAlumno) {
            alumnos[i] = {
                ...alumno,
                legajo: alumnos[i].legajo
            }

            console.log(alumnos[i])

            alumnoEditado = alumnos[i]
            break;
        }
    }

    if (alumnoEditado) {
        await guardarAlumnos(alumnos)
    }

    return alumnoEditado

}

async function eliminarAlumno(legajoAlumno) {
    const alumnos = await getAlumnos()
    let alumnoEliminado = null

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].legajo == legajoAlumno) {
            alumnos[i].eliminado = true

            alumnoEliminado = alumnos[i]
            break;
        }
    }

    if (alumnoEliminado) {
        await guardarAlumnos(alumnos)
    }

    return alumnoEliminado
}

export {
    getAlumnos,
    getAlumnoById,
    createAlumno,
    editAlumno,
    eliminarAlumno
}