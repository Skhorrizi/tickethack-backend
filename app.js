var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var tripsRouter = require('./routes/trips');
var basketRouter = require('./routes/basket');
var reservationRouter = require('./routes/reservation');

var app = express();
const cors= require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', tripsRouter);
app.use('/', basketRouter);
app.use('/', reservationRouter);

module.exports = app;
