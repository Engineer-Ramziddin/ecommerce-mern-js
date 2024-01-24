const express = require('express');
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct, addToWishlist, rating, uploadImage } = require('../controller/productController');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authmiddlewares');
const { uploadPhoto, productImgResize } = require('../middlewares/uploadImage');


router.put(
    "/upload/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 2),
    productImgResize,
    uploadImage
  );


router.get('/', getAllProduct);
router.get('/:id', getProduct);
router.post('/create', authMiddleware, isAdmin, createProduct);
router.put('/wishlist', authMiddleware, addToWishlist);
router.put('/rating', authMiddleware, rating);
router.put('/update/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteProduct);


module.exports = router;