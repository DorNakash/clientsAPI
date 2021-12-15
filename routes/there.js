const express = require('express');
const router = express.Router();

router.get('/there', (req, res) => {
    res.send('We are there');
    
    });

    module.exports = router;