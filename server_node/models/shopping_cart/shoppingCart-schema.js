const mongoose = require('mongoose');

const shoppingCartSchema = mongoose.Schema({
    bookTitle: String,
    author: String,
    imageURL: String,
    bookQuantity: Number,
    price: Number
}, {collection: 'cart'})

module.exports = shoppingCartSchema