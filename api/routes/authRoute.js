const express = require('express');
const { createUser, loginUser, getAllUser, getOneUser, deleteaUser, updatedUser, blockUser, unBlockUser, handlerRefreshToken, logOut, updatePassword, forgotPassword, resetPassword, saveAddress, getWishlist, emptyCart, getUserCart, userCart, updateOrderStatus, getOrders, getAllOrders, getOrderByUserId, applyCoupon, createOrder,
    loginAdmin
} = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authmiddlewares');
const router = express.Router();

router.post('/cart', authMiddleware, userCart);
router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);

router.get('/all', getAllUser);//isAdmin, authMiddleware,  
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

router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);

router.post("/cart/cash-order", authMiddleware, createOrder);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.put( "/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

module.exports = router;