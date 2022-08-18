const express = require('express');
const router = express.Router();
const {listProduct, getProduct} = require('./controller');

router.get('/list', listProduct);
router.get('/:id', getProduct);

module.exports = router;