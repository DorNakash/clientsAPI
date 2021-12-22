const {Router} = require('express');
const mongoose = require('mongoose');
const validEmailCheck = require('./middlewares/middleware');

const Schema = mongoose.Schema

//define the collection 

let Client = new Schema({
    name: {
        type: String , required: true
    },
    email: {
        type: String, required: true , 
        validate: {
            validator: validEmailCheck, message: 'Please enter a valid email'
        }
    },
    phoneNumber: {
        type: String, required: true
    },
},
    { collection: 'clients' },
    { timestamps: true }
)


module.exports = mongoose.model('Clients' , Client)
