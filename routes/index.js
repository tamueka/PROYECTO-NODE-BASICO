'use strict';

var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');


/* GET home page. */
/*
router.get('/', function (req, res, next) {
  res.render('index', {
    page: 'Inicio',
    menuId: 'INICIO'
  });
});
*/

router.get('/', async function (req, res, next) {
  try {
    const filename = path.join(__dirname, '../README.md');
    const readme = await new Promise((res, rej) =>
      fs.readFile(filename, 'utf8', (err, data) => err ? rej(err) : res(data))
    );
    res.render('index', { 
      readme, 
      page: 'Inicio',
      menuId: 'INICIO'
     });
  } catch (err) { return next(err); }
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

