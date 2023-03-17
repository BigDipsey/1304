const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(cors())

const frageSchema = new mongoose.Schema({
  question: String,
  answer: String,
})

const question = mongoose.model('generalquestion', frageSchema)

mongoose.connect(`${process.env.DATABASE_URL}`).then(() => {
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
