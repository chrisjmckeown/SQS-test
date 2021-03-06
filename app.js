// Require objects.
const express  = require('express');
const routes = require('./routes.js');

const app = express();

app.use('/', routes);

module.exports = app;