const express = require('express')
const connectDB = require('./config/connectDB');
const app = express()
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const dotenv  = require('dotenv').config();
const cookieParser = require("cookie-parser");
const morgan = require('morgan')

const authRouter = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const blogcategoryRouter = require("./routes/blogCatRoute");
const blogRoute = require('./routes/blogRoute');
const couponRouter = require("./routes/couponRoute");
const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const uploadRouter = require("./routes/uploadRoute");
const categoryRouter = require("./routes/prodcategoryRoute");

const cors = require("cors");

const port = process.env.PORT || 4000

connectDB()

app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors());

app.use('/api/user', authRouter);
app.use('/api/product', productRoute);
app.use('/api/blog', blogRoute);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/brand", brandRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);

app.use("/", (req, res) => {
    res.send("hello from serve")
});

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))