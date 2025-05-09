const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: '퍼그'});
});

module.exports = router;