const express = require('express');
const router = express.Router();
const homeProduct = require('./product/index');

router.use('/product', homeProduct);

module.exports = router;