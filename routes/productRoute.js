const express = require('express');
const { createProduct, getProduct, getAllProduct, updateProduct } = require('../controller/productController');
const router = express.Router();

router.post('/create', createProduct);
router.put('/update/:id', updateProduct)
router.get('/:id', getProduct);
router.get('/', getAllProduct);

module.exports = router;