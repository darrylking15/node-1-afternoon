const express = require('express'); 
const app = express(); 
const SERVER_PORT = 5050; 
const products = require('../products.json')
const ctrl = require('./getProducts')





//endpoint

app.get('/api/products', ctrl.getProducts)
app.get('/api/product/:id',  ctrl.getProduct)



app.listen(SERVER_PORT, () => console.log('Server Running On Port ' + SERVER_PORT))