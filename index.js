const express = require('express')
const connectDB = require('./config/connectDB');
const app = express()
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoute');
const productRoute = require('./routes/productRoute')
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const dotenv  = require('dotenv').config();
const cookieParser = require("cookie-parser");
const morgan = require('morgan')

const port = process.env.PORT || 4000

connectDB()

app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/user', authRouter);
app.use('/api/product', productRoute)
app.use("/", (req, res) => {
    res.send("hello from serve")
});

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))