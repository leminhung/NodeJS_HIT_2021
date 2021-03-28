const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/database')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
require("dotenv").config({
  path: "./config/config.env",
});
connectDB()


const app = express()
app.use(express.static(path.join(__dirname, './upload')))
const port = 3000


app.use(morgan('combined'))

const router = require('./routers')

app.use(express.json())

router(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


