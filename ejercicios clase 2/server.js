const http = require('node:http');

//Se crea el servidor
const server = http.createServer(function(request, response){

    console.log("hola te estoy escuchando")
    // la solicitud
        console.log("solicitud",request.url);

        if(request.url == "/"){
            response.write("<h1>Mi espectacular pagina web</h1>");
            response.write("Nicolas Sartori");
        }else if(request.url == "/materia"){
            response.write("<h1>Mi espectacular pagina web</h1>");
            response.write("El nombre de la materia es Aplicaciones Hibridas")
        }else if(request.url == "/profesor") {
            response.write("<h1>Mi espectacular pagina web</h1>");
            response.write("el nombre del profesor es: Brian Esteban Lara Campos")
        }else if(request.url == "/productos"){
            response.write("<h1>Mi espectacular pagina web</h1>");
            response.write(`
            <table>

                <tr>

                    <th>ID</th>

                    <th>Nombre</th>

                    <th>Precio</th>

                </tr>

                <tr>

                    <td>1</td>

                    <td>cafe expreso</td>

                    <td>200</td>

                </tr>

                <tr>

                    <td>2</td>

                    <td>Cafe Americano</td>

                    <td>250</td>

                </tr>

                <tr>

                    <td>3</td>

                    <td>Cafe Cortado</td>

                    <td>200</td>

                </tr>

                <tr>

                    <td>4</td>

                    <td>Cafe Doble</td>

                    <td>250</td>

                </tr>

                <tr>

                    <td>5</td>

                    <td>Cafe Lagrima</td>

                    <td>200</td>

                </tr>
            </table>
            `)

        }else{
            response.write("<h1>Mi espectacular pagina web</h1>");
            response.write("pagina no encontrada");
        }
    // lo que le vamos a responder al cliente

    response.end()
})
//se le indica que puerto debe escuchar
server.listen(2022)