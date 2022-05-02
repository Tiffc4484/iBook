const mongoose = require('mongoose');
const bookSchema = require('./book-Schema')

const shoppingCartSchema = mongoose.Schema({
    username: String,
    cart: [bookSchema]
}, {collection: 'cart'});

module.exports = shoppingCartSchema