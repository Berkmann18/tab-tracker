'use strict'

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || require('../config').port || 8081

const {sequelize} = require('./models')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync() // use {force: true} to clear the DB
  .then(() => {
    app.listen(PORT)
    console.log(`Server started on ${PORT}`)
  }).catch(err => console.log('Sequelize sync error:', err))
