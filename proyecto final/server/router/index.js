const express = require('express');

//Express tiene un metodo que funciona como enrutador para enlazar todas nuestras rutas de nuestra aplicacion (Localhost:3100/)
const router = express.Router();

function routerAPI(app){

//esta funcion define nuestras rutas de la api que me permite conectar mi parte visual (html) con mi servidor (nodejs)

    app.user('/api/v1',router);
};

// vamos a exportar nuestra funcion para utilizarla en nuestro index.js principal del server

module.exports = routerAPI;

