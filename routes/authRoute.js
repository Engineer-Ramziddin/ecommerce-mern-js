const express = require('express');
const { createUser, loginUser, getAllUser, getOneUser, deleteaUser, updatedUser, blockUser, unBlockUser, handlerRefreshToken, logOut } = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authmiddlewares');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/all', authMiddleware, isAdmin, getAllUser);
router.get('/get/:id', getOneUser);
router.put('/update/:id', authMiddleware, updatedUser);
router.delete('/delete/:id', deleteaUser)
router.put('/block/:userId', blockUser);
router.put('/unblock/:userId', unBlockUser);
router.get('/refreshtoken', handlerRefreshToken);
router.get('/logout', logOut)
module.exports = router;