const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://Thikal:Denko12345@cluster.rkr89yd.mongodb.net/LA1304(Quiz)?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database')

    const frageSchema = new mongoose.Schema({
      question: String,
      answer: String,
    })

    const question = mongoose.model('generalquestion', frageSchema)

    question.find({}, (err, data) => {
      if (err) {
        console.error(err)
      } else {
        console.log(data[0])
      }
    })
  })
