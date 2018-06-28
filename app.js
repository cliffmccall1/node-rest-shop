const express = require('express');
const app = express();
const orderRoutes = require('./api/routes/orders');
const productsRoutes = require('./api/routes/products');

app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
