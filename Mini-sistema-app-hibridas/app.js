import express from 'express'
import rutaAlumnos from './routes/alumnos.route.js';

const app = express();

app.use(express.urlencoded({extended : true}));

app.use('/', express.static('public'));

app.use(rutaAlumnos);

app.listen(2023,function(){
    console.log('Servidor Levantado','http://localhost:2023')
})
