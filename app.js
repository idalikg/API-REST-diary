// Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const contactRoutes = require('./api/routes/contacts');

// Settings
app.set('nameAPI','API-REST_diary');

// Middlewares
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Routes
app.use('/contact', contactRoutes);

module.exports = app; 