var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: { type: String },
    parent: {type: mongoose.SchemaTypes.ObjectId, ref:'Category'}//关联父级
})

module.exports = mongoose.model('Category',schema)