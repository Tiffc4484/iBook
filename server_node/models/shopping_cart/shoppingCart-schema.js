const mongoose = require('mongoose');

const shoppingCartSchema = mongoose.Schema({
    username: String,
    books: [String]
}, {collection: 'cart'})

module.exports = shoppingCartSchema