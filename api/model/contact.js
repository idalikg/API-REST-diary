const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var contactSchema = new Schema({
    name : String,
    lastname : String,
    relationship :{ type : String, enum : ['familia','amigos','trabajo','otro','otro']},
    number : Number,
    description : String
});

module.exports = mongoose.model('Contacts',contactSchema);