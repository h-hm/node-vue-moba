module.exports = app => {
  var mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost:27017/node-vue-moba',{
      useNewUrlParser: true,
      useCreateIndex: true
  })
}