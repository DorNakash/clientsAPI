const clientRoute = require('express').Router()

//Client model
let Client = require('../modals/clientModal')


//Add Employee
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

//Get all the Employees
clientRoute.get('/', (req, res) => {
    Client.find((err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//Get one employee
clientRoute.get('/read/:id', (req, res) => {
    Client.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//update employee $set
clientRoute.put('/update/:id', (req, res) => {
    Client.findByIdAndUpdate(req.params.id,
        { $set: req.body }, (err, data) => {
            if (err) {
                res.status(500).send({ error: true, msg: err.message })
            } else {
                res.status(200).json({ data: data, msg: "updated successfully" });
            }
        }
    )
})

//Delete employee
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