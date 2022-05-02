const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookTitle: String,
  author: String,
  imageURL: String,
  bookQuantity: Number,
  price: Number
}, { versionKey: false });

module.exports = bookSchema
