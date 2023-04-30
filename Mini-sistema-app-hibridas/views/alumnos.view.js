import { crearPagina } from "../pages/utils.js";

/**
 * crea el listado de alumnos con su link "ver" para visualizar la info de cada uno
 * @param {*} alumnos
 */
function crearPaginaListaAlumnos(alumnos) {
  let html = `<h1>Alumnos</h1>`;
  html += `<a href="/alumnos/nuevo">Agregar un nuevo Alumno</a>`;

  html += `<ul>`;

  for (let i = 0; i < alumnos.length; i++) {
    html += `<li>${alumnos[i].nombre} <a href="/alumnos/${alumnos[i].legajo}">Ver</a>
    <a href="/alumnos/${alumnos[i].legajo}/edit">Modificar</a>
    <a href="/alumnos/${alumnos[i].legajo}/borrar">Eliminar</a>
    </li>`;
  }
  html += `</ul>`;
  return crearPagina("Alumnos", html);
}

function crearPaginaAlumno(alumno) {
  let html = `<h1>${alumno.nombre}</h1>`;
  html += `<p>apellido: ${alumno.apellido}</p>`;
  html += `<p>año: ${alumno.ano}</p>`;

  return crearPagina(alumno.nombre, html);
}

function formCrearNuevoAlumno() {
  let html = `<h1>Crear nuevo alumno</h1>`;
  html += `
            <form action="/alumnos/nuevo" method="POST">
                <input type="text" name="nombre" placeholder="nombre">
                <input type="text" name="apellido" placeholder="apellido">
                <input type="text" name="ano" placeholder="año">
                <button type="submit">Crear</button>
            </form>
        `;
  return crearPagina("Crear Alumno", html);
}

function crearPaginaEditFormAlumno(alumno) {
  let html = "<h1>Modificar Alumno</h1>";
  html += `
    <form action="/alumnos/${alumno.legajo}/edit" method="POST">
        <input type="text" name="nombre" placeholder="Nombre" value="${alumno.nombre}">
        <input type="text" name="apellido" placeholder="Apellido" value="${alumno.apellido}">
        <input type="text" name="ano" placeholder="Año" value="${alumno.ano}">
        <button type="submit">Modificar</button>
    </form>`;

  return crearPagina("Modificar alumno", html);
}

function crearFormBorrarAlumno(alumno) {
    let html = `<h1>Nombre: ${alumno.nombre}</h1>`
    html += `<p>Apellido: ${alumno.apellido}</p>`
    html += `<p>Año: ${alumno.ano}</p>`

    html += `<form action="/alumnos/${alumno.legajo}/borrar" method="POST">
    <p>Esta segudo de que quiere eliminarlo?</p>
        <button type="submit">Elimnar</button>
    </form>`

    return crearPagina(alumno.nombre, html)
}
export {
  crearPaginaListaAlumnos,
  crearPaginaAlumno,
  crearPagina,
  formCrearNuevoAlumno,
  crearPaginaEditFormAlumno,
  crearFormBorrarAlumno
};
