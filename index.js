const express = require('express')
const app = express()
const connectDB = require('./config/connectDB');
const dotenv  = require('dotenv').config()

const port = process.env.PORT || 4000
connectDB()

app.use("/", (req, res) => {
    res.send("hello from serve")
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))