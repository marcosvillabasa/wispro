const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
//Initialize express app
const app = express()
//Initialize the sever
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
// Connecting to DB
mongoose
  .connect(
    'mongodb+srv://wispro_user:5bYGZS0jQfjMyLbC@cluster0.vutve.mongodb.net/wisproDB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('connected to db')
  })
  .catch(error => {
    console.log(error)
  })

app.use('/', require('./routes/user'))

app.listen(3000, () => {
  console.log('sever listening on port:3000')
})
