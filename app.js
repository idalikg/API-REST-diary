// Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const configurations = require('./configAPP');

const Contact = require('./model/contact.js');

const port = process.env.PORT || 8000;

const app = express();

// Settings
app.set('nameAPI','API-REST_diary');

// Middlewares
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Routes
app.get('/api/contact', (req, res) => {
    // res.status(200).send('Contacts List');

    Contact.find({}, (err, contactos) => {
        if(err) return res.status(500).send({ message : 'Hubo un error al ralizar la petición'})

        if(!contactos) return res.status(404).send({ message : 'Aún no hay contactos' })

        res.status(200).send({ contactos });
    });
});

app.get('/api/contact/:contactID', (req, res) => {
    res.status(200).send({ message : `Contact ${req.params.contactID} LOCATED`});
});

app.post('/api/contact', (req, res) => {
    res.status(200).send({ message :   'Contact REGISTERED'});
});

app.put('/api/contact/:contactID', (req, res) => {
    res.status(200).send({ message : `${req.params.contactID} UPDATED` });
});

app.delete('/api/contact/:contactID', (req, res) => {
    res.status(200).send({ message : `${req.params.contactID} DELECTED`});
});

// Mongoose & Server
mongoose.connection.openUri('mongodb://localhost:27017/diary', (err, res) => {
    if(err) throw err
    console.log('Conexión SATISFACTORIA a la Base de Datos en MongoDB');

    // Server running
    app.listen(configurations.port, () => {
        console.log(`${app.get('nameAPI')} running on port ${configurations.port}`);
    });
});