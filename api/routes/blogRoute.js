const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authmiddlewares');
const { updateBlog, createBlog, deleteBlog, getAllBlog, getBlog, likeBlog, disliketheBlog, uploadImages } = require('../controller/blogController');
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImage');

router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);

router.put(
    "/upload/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
  );

router.get('/', getAllBlog);
router.put('/:id', getBlog);
router.post('/create', authMiddleware, isAdmin, createBlog);
router.put('/update/:id', authMiddleware, isAdmin, updateBlog);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);


module.exports = router;
