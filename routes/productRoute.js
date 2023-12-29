const express = require('express');
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } = require('../controller/productController');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authmiddlewares');



router.get('/', getAllProduct);
router.get('/:id', getProduct);
router.post('/create', authMiddleware, isAdmin, createProduct);
router.put('/update/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);


module.exports = router;