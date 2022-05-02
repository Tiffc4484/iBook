const mongoose = require('mongoose')
const bookSchema = require('./book-schema')

const bookModel = mongoose.model(
    "bookModel",
    bookSchema
)
module.exports = bookModel