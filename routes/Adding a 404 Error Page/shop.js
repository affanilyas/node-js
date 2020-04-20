const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from Adding a 404 Error Page</h1>');
});

module.exports = router;