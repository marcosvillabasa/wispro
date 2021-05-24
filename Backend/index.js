const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
//Initialize the sever
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Connecting to DB
mongoose
  .connect(
    'mongodb+srv://wispro_user:leon2020@cluster0.vutve.mongodb.net/test',
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

app.listen(4000, () => {
  console.log('sever listening on port:4000')
})
