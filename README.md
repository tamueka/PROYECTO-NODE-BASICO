
# Nodepop

Api compatible iOS / Android apps.

Nodepop is an API for selling second-hand items

This API connects to a database and shows us the items for sale

Through filters we can make queries to the database and show us the results


Api compatible con aplicaciones iOS / Android.

Nodepop es una API para vender artículos de segunda mano

Esta API se conecta a una base de datos y nos muestra los artículos en venta

A través de filtros podemos realizar consultas a la base de datos y mostrarnos los resultados

#Ir a Articulos para filtar:


##Listar todos los articulos de la base de datos

##Listado por tag, hacemos una busqueda incluyendo un filtrado por etiquetas

##Listado por tipo de anuncio (venta o busqueda)

##Listado por rango de precio (precio min. y precio max.)

##Listado por nombre de articulo



###Open App

proyecto node
cd nodepop

### Deploy
### Install dependencies

npm install

### Configure

Review lib/connectMongoose.js to set database configuration

### Init Database

To initialize the database use:

npm run install_db


To modificate the database use:

nodemon install_db.js

## Run

To start the application in production use:

npm start


## Development

To run the application in development use:

npm run dev

### Base Path

The API can be used with the path:
[API V1](/apiv1/anuncios)

### Error example

    {
      "ok": false,
      "error": {
        "code": 401,
        "message": "This is the error message."
      }
    }

### GET /anuncios

**Input Query**:

start: {int} skip records
limit: {int} limit to records
sort: {string} field name to sort by
includeTotal: {bool} whether to include the count of total records without filters
tag: {string} tag name to filter
venta: {bool} filter by venta or not
precio: {range} filter by price range, examples 10-90, -90, 10-
nombre: {string} filter names beginning with the string

Input query example: ?start=0&limit=2&sort=precio&includeTotal=true&tag=mobile&venta=true&precio=-90&nombre=bi

**Result:** 

    {
      "ok": true,
      "result": {
        "rows": [
          {
            "_id": "55fd9abda8cd1d9a240c8230",
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50,
            "foto": "/images/anuncios/iphone.png",
            "__v": 0,
            "tags": [
              "lifestyle",
              "mobile"
            ]
          }
        ],
        "total": 1
      }
    }


### GET /anuncios/tags

Return the list of available tags for the resource anuncios.

**Result:** 

    {
      "ok": true,
      "allowed_tags": [
        "work",
        "lifestyle",
        "motor",
        "mobile"
      ]
    }
#   p r o y e c t o _ n o d e _ b a s i c o  
 