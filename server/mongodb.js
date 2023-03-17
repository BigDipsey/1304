const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const frageSchema = new mongoose.Schema({
  question: String,
  answer: String,
})

const question = mongoose.model('generalquestion', frageSchema)

mongoose
  .connect(
    'mongodb+srv://Thikal:Denko12345@cluster.rkr89yd.mongodb.net/LA1304(Quiz)?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database')
  })

app.get('/questions', (req, res) => {
  question
    .find({}, { _id: 0 }, (err, data) => {
      res.json(data)
    })
    .catch((err) => console.log(err))
})

app.listen(3000, () => {
  console.log('Server running on Port 3000')
})
