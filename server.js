const express = require('express');
const mongoose = require('mongoose');

const configurations = require('./configAPP');

const app = require('./app');

const port = process.env.PORT || 8000;

// Mongoose & Server
mongoose.connection.openUri('mongodb://localhost:27017/diary', (err, res) => {
    if (err) throw err
    console.log('Conexión SATISFACTORIA a la Base de Datos en MongoDB');

    // Server running
    app.listen(configurations.port, () => {
        console.log(`${app.get('nameAPI')} running on port ${configurations.port}`);
    });
});