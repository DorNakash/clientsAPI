const clientRoute = require('express').Router()

//Client model
let Client = require('../models/clientModel')


//Add Client with email validation
clientRoute.post('/create', (req, res) => {
    //debug with console
    console.log(req.body)
    Client.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json({ data: data, msg: "added successfully" })
        }
    })
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

//update Client with email validation { runValidators: true }
clientRoute.put('/update/:id', (req, res) => {
    Client.findByIdAndUpdate(req.params.id,
        { $set: req.body }, { runValidators: true }, (err, data) => {
            if (err) {
                res.status(500).send({ error: true, msg: err.message })
            } else {
                res.status(200).json({ data: data, msg: "updated successfully" });
            }
        }
    )
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