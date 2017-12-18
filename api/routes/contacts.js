const express = require('express');
const app = express.Router();

const Contact = require('../model/contact.js');

app.get('/', (req, res) => {
    // res.status(200).send('Contacts List');

    Contact.find({}, (err, contactos) => {
        if (err) return res.status(500).send({ message: 'Hubo un error al ralizar la petición' })

        if (!contactos) return res.status(404).send({ message: 'Aún no hay contactos' })

        res.status(200).send({ contactos });
    });
});

app.get('/:contactID', (req, res) => {
    res.status(200).send({ message: `Contact ${req.params.contactID} LOCATED` });
});

app.post('/', (req, res) => {
    res.status(200).send({ message: 'Contact REGISTERED' });
});

app.put('/:contactID', (req, res) => {
    res.status(200).send({ message: `${req.params.contactID} UPDATED` });
});

app.delete('/:contactID', (req, res) => {
    res.status(200).send({ message: `${req.params.contactID} DELECTED` });
});

module.exports = app;