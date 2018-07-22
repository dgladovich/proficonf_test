var express = require('express');
var router = express.Router();

const albums = require('./albums');
const photos = require('./photos');


router.use('/albums', albums);
router.use('/photos', photos);

module.exports = router;
