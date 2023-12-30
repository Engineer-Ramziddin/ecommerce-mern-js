const express = require('express');
const { createUser, loginUser, getAllUser, getOneUser, deleteaUser, updatedUser, blockUser, unBlockUser, handlerRefreshToken, logOut, updatePassword, forgotPassword, resetPassword, saveAddress, getWishlist } = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authmiddlewares');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/all', authMiddleware, isAdmin, getAllUser);
router.get('/get/:id', getOneUser);
router.put('/update/:id', authMiddleware, updatedUser);
router.delete('/delete/:id', deleteaUser)

router.put("/save-address", authMiddleware, saveAddress);
router.get('/wishlist', authMiddleware, getWishlist)

router.put('/block/:userId', blockUser);
router.put('/unblock/:userId', unBlockUser);
router.get('/refreshtoken', handlerRefreshToken);
router.get('/logout', logOut);

router.put('/updatepassword', authMiddleware, updatePassword);
router.post('/forgot-password-token', forgotPassword);
router.put('/reset-password/:token', resetPassword);
module.exports = router;