const express = require('express');
const router = express.Router();

//Client model
let Client = require('../modals/clientModal')


//Add Employee
router.post('/create', (req, res) => {
    Client.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json({ data: data, msg: "added successfully" })
        }
    })
})

//Get all the Employees
router.get('/', (req, res) => {
    Client.find((err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//Get one employee
router.get('/read/:id', (req, res) => {
    Client.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json(data);
        }
    })
})

//update employee $set
router.put('/update/:id', (req, res) => {
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
router.delete('/delete/:id', (req, res) => {
    Client.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({ error: true, msg: err.message })
        } else {
            res.status(200).json({ data: data, msg: "deleted successfully" });
        }
    })
})


module.exports = router