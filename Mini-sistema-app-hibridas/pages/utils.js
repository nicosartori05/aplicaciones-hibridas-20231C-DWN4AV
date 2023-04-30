/**
 * Crea la estructura basica de HTML
 * @param {*} title 
 * @param {*} content 
 * @returns 
 */
const crearPagina = (title,content) => {

    let html =`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">`;
    html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">`;
    html+= `<title>${title}</title>`;
    html+=`</head><body>${content}</body>`;
    html+=`</html>`;

    return html;
}

/**
 * crea la lista de alumnos completa obtenida del json
 * @param {*} PRODUCTOS 
 * @returns 
 */
const crearListaAlumnos = (alumnos) =>{

    let lista = `<ul>`;
    for (let index = 0; index < alumnos.length; index++) {
        
        lista += `<li>${alumnos[index].nombre}</li>`    
    };
    lista += `</ul>`;
    
    return lista;
}


export {
    crearPagina,
    crearListaAlumnos
}