var express = require('express');
var router = express.Router();
const api = require('./api');
const path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

router.use('/api', api);

module.exports = router;
