const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 8080;

var app = express();

hbs.registerPartials(__dirname + '/public/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));