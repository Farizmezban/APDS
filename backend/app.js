var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var shop = require('./routes/shop')
var admin = require('./routes/admin')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/user', users);
app.use('/shop',shop)
app.use('/admin',admin)


module.exports = app;
