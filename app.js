// Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

const app = express();

// Settings
app.set('nameAPI','API-REST_diary');

// Middlewares
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Routes
app.get('/api/contact', (req, res) => {
    res.status(200).send('Contacts List');
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

// Server
app.listen(port, () => {
    console.log(`${app.get('nameAPI')} running on port ${port}`);
});