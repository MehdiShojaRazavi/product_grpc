const express = require('express');
const router = express.Router();
const {listProduct} = require('./controller');

router.get('/all', listProduct);

module.exports = router;