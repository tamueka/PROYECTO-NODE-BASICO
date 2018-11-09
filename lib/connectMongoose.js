'use strict';

var mongoose = require('mongoose');
var conn = mongoose.connection;


conn.on('error', (err) =>
    console.error('Error de conexion Base de datos MongoDB', err));

conn.once('open', () =>
    console.info('Conectado a MongoDB en base de datos', conn.name));

mongoose.connect('mongodb://localhost:27017/anuncio', { useNewUrlParser: true });

module.exports = conn;