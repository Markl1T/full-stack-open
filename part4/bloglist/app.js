const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogRouter = require('./controllers/blogs')

mongoose.connect(config.MONGODB_URI)

const app = express()
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app