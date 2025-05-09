const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('redirect');
    res.status(302).redirect('/');
});

module.exports = router;