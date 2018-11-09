'use strict';

var express = require('express');
var router = express.Router();
const fs = require('fs');

const Anuncio = require('../models/Anuncio');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    page: 'Inicio',
    menuId: 'INICIO'
  });
});

router.get('/anuncios', function (req, res, next) {
  res.render('anuncios', {
    page: 'Anuncios',
    menuId: 'ANUNCIOS',
  });
});


router.get('/nosotros', function (req, res, next) {
  res.render('about', {
    page: 'Nosotros',
    menuId: 'NOSOTROS'
  });
});

router.get('/contacto', function (req, res, next) {
  res.render('contact', {
    page: 'Contacto',
    menuId: 'CONTACTO'
  });
});

module.exports = router;

