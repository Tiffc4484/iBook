const mongoose = require("mongoose")
const userRegisterSchema = mongoose.Schema({
    username : String,
    password : String,
    email : String,
    birthday : String,
    gender: {type: String, enum: ["Male", "Female", "Other", "Don't want answer"]},
    interests: [String],
    cart: [String]

}, {collection: "users"})

module.exports = userRegisterSchema