'use strict';

const express = require('express');
const router = express.Router();

//cargamos nuestro modelo
const Anuncio = require('../../models/Anuncio');

router.get('/', (req, res, next) => {

    Anuncio.find().exec((err, anuncios) => {
    if (err){
        next(err);
        return;
    }
    res.json({ succes: true, result: anuncios });
    });
});

module.exports = router;

