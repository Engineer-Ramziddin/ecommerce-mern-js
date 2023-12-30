const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refreshtoken");
const validateMongoDbId = require("../utils/validateMongodbId");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("./emailController");
const crypto = require("crypto");


const createUser = expressAsyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already exists")
    }
})

const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 1 * 60 * 60 * 1000,
        });
        res.json([{
            _id: findUser?._id,
            fristname: findUser?.fristname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        }]);
    } else {
        throw new Error("Yaroqsiz hisob ma'lumotlari")
    }
})

const getAllUser = expressAsyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find()
        res.json({
            getUsers,
        });
    } catch (error) {
        throw new Error(error)
    }
})

const getOneUser = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)

    try {
        const getUser = await User.findById(id)
        res.json({
            getUser,
        });
    } catch (error) {
        throw new Error(error)
    }
})

const deleteaUser = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)

    try {
        const userToDelete = await User.findById(id);

        if (!userToDelete) {
            res.status(404).json({
                msg: `Siz o'chirmoqchi bo'lgan foydalanuvchi ma'lumotlar bazasidan topilmadi`,
            });
            return;
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (deletedUser) {
            res.json({
                deletedUser,
                msg: `${deletedUser.firstname} ${deletedUser.lastname} nomli foydalanuvchi malumotlar bazasida muvaffaqiyatli o'chirildi`,
            });
        } else {
            res.status(500).json({
                msg: 'Foydalanuvchini o‘chirib bo‘lmadi',
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Internal server error',
            error: error.message,
        });
    }
});


const updatedUser = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
        const updateaUser = await User.findByIdAndUpdate(
            id,
            {
                fristname: req?.body?.fristname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
                password: req?.body?.password,
            },
            {
                new: true
            }
        );
        res.json({
            updateaUser,
            msg: "User updated successfully"
        });
    } catch (error) {
        throw new Error(error)
    }
})

//block unblock user


const blockUser = expressAsyncHandler(async (req, res) => {
    const userId = req.params.userId;
    validateMongoDbId(userId)
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        }

        user.isBlocked = true;
        await user.save();

        res.json({ message: 'Foydalanuvchi muvaffaqiyatli bloklandi' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server xatosi' });
    }
})

const unBlockUser = expressAsyncHandler(async (req, res) => {
    const userId = req.params.userId;
    validateMongoDbId(userId)

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        }

        user.isBlocked = false;
        await user.save();

        res.json({ message: 'Foydalanuvchi muvaffaqiyatli blokdan chiqarildi' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server xatosi' });
    }
})

// refreshToken

const handlerRefreshToken = expressAsyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) {
        throw new Error("No Refresh Token In Cookies")
    }
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if (!user) {
        throw new Error('NO refresh token persent in db or not matched')
    }
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error('There is something wrong  with refresh token');
        }
        const accessToken = generateRefreshToken(user?._id);
        res.json({
            accessToken
        });
    }
    )
})

const logOut = expressAsyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) throw new Error("No Refresh Token in Cookie")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true
        })
        return  res.sendStatus(204);
    }
    const updatedUser = await User.findOneAndUpdate(
        { refreshToken },
        { $set: { refreshToken: "" } },
        { new: true }
    );
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true
    })
    return  res.sendStatus(204);
})

//password

const updatePassword = expressAsyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
      user.password = password;
      const updatedPassword = await user.save();
      res.json(updatedPassword);
    } else {
      res.json(user);
    }
  });

  
const forgotPassword = expressAsyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({email});
    console.log(user);
    if (!user) {
        throw new Error("User not fount with this email")
    }
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:3000/api/user/reset-password/${token}'>Click Here</>`;
        const data = {
          to: email,
          text: "Hey User",
          subject: "Forgot Password Link",
          html: resetURL,
        };
        await sendEmail(data);
        res.json({token});
    } catch (error) {
        throw new Error(error)
    }
  });

  const resetPassword = expressAsyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error(" Token Expired, Please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
  });
  

module.exports = {
    createUser,
    loginUser,
    getAllUser,
    getOneUser,
    updatedUser,
    deleteaUser,
    blockUser,
    unBlockUser,
    handlerRefreshToken,
    logOut,
    updatePassword,
    forgotPassword,
    resetPassword,
};

