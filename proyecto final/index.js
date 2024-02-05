const express = require('express');
const routerAPI = require('./server/router')
const cors = require('cors')

// esto es nuestra aplicacion - origen
const app = express();

// esta linea me sirve para quitar el problema de cors
app.use(cors());

// esta linea me permite entender los archivos json enviados desde la respuesta
app.use(express.json());

// esta funciona es nuestra API
routerAPI(app);

// .use: sirve para servir en nuestro servidor y recibir ncantidades de parametros, el primero va a ser nuestra ruta en la web y el segundo el middleware (logica cuando vaya a servir esa ruta)

app.use('/', (req, res) => {
    //req = solicitud o solicitar
    // res = respuesta o devolver 

    res.send("<h1>funciona</h1>");
})

//levantando nuestro servidor en el puerto x

//listen escucha nuestro servidor y como primer parametro recibe el puerto y como segundo la funcion a mostrar cuando nuestro servidor funcione

app.listen(3100, () => {
    console.log('aplicacion corriendo en el puerto 3100')
})