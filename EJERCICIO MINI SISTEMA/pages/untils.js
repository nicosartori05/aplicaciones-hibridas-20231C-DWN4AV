const createPage = (title, content) => {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<title>' + title + '</title></head><body>'
    html += '<h1>Mi espectacular pagina web!</h1>'
    html += content
    html += '</body> </html>'

    return html
}

const createAlumnList = (alumns) => {
    let content = '<ul>'
    for (let i = 0; i < alumns.length; i++) {
        content += '<li>' + alumns[i].nombre + '</li>'
    }
    content += '</ul>'
    return content
}


export {
    createPage,
    createAlumnList
}