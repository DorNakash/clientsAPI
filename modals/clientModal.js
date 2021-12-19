const {Router} = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema

//define the collection 

let Client = new Schema({
    name: {
        type: String , required: true
    },
    email: {
        type: String, required: true
    },
    phoneNumber: {
        type: String, required: true
    },
},
    { collection: 'clients' },
    { timestamps: true }
)


module.exports = mongoose.model('Clients' , Client)
