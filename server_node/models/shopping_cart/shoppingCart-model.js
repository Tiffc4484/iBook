const mongoose = require('mongoose')
const shoppingCartSchema = require('./shoppingCart-schema')

const shoppingCartModel = mongoose.model(
    "shoppingCartModel",
    shoppingCartSchema
)

module.exports = shoppingCartModel