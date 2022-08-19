const express = require('express');
const router = express.Router();
const {listProduct, getProduct, deleteProduct} = require('./controller');

router.get('/list', listProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/:id', getProduct);

module.exports = router;