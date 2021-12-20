const clientRoute = require('express').Router()
var validator = require('email-validator');

//Client model
let Client = require('../modals/clientModal')


//Add Client with email validation
clientRoute.post('/create', (req, res) => {
    //debug with console
    console.log(req.body)
    //email validation
    if(validator.validate(req.body.email)){
    Client.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json({ data: data, msg: "added successfully" })
        }
    })
    } else {
        res.status(500).send({ error: true, msg: 'invalid email address as input ' })
    }
})

//Get all the Clients
clientRoute.get('/', (req, res) => {
    Client.find((err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//Get one Client
clientRoute.get('/read/:id', (req, res) => {
    Client.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//update Client with email validation
clientRoute.put('/update/:id', (req, res) => {
    //email validation
    if(validator.validate(req.body.email)) {
    Client.findByIdAndUpdate(req.params.id,
        { $set: req.body }, (err, data) => {
            if (err) {
                res.status(500).send({ error: true, msg: err.message })
            } else {
                res.status(200).json({ data: data, msg: "updated successfully" });
            }
        }
    )
    } else {
        res.status(500).send({ error: true, msg: "not valid email" })
    }
})

//Delete Client
clientRoute.delete('/delete/:id', (req, res) => {
    Client.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json({ data: data, msg: "deleted successfully" });
        }
    })
})


module.exports = clientRoute;