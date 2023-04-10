import express from 'express';
const app = express();


app.use(express.urlencoded({ extended: true })) // para poder leer el body de las solicitudes POST
app.use('/', express.static('public'))

// app.use(AlumnRoute);

// app.get('/alumnos', function(req, res){
//     res.send("hola mundo")
// })


app.listen('2023', () => {
    console.log('servidor levantado!','http://localhost:2023')
})