const mongoose = require('mongoose')

const shoppingCartSchema = mongoose.Schema({
//    id: String,
    userId: String,
    books: [String]
}, {collection: 'cart'})

module.exports = shoppingCartSchema