const express = require('express');
const router = express.Router();

router.get('/here', (req, res) => {
    res.send('We are here');
});

module.exports = router;


