import { createPage } from "../pages/untils";

const createAlumnListPage = (alumns) => {

    let html = '<h1>Alumnos</h1>'
    html += '<ul>'

    for (let i = 0; i < alumns.length; i++) {
        html += `<li>${alumns[i].nombre} <a href="/alumns/${alumns[i].legajo}">Ver</a></li>`
    }

    html += '</ul>'

    return createPage('Alumnos', html)

}

const createAlumnPage = () => {

    let html = `<h1>${alumn.nombre} ${alumn.apellido}</h1>`
    html += `<p>Precio: $${alumn.legajo}</p>`
    html += `<p>${alumn.ano}</p>`

    return createPage(alumn.nombre, html)

}

export{
    createAlumnListPage,
    createAlumnPage,
    createPage
}