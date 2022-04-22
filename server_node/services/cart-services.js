const cartModel = require('../models/shopping_cart/shoppingCart-model')
const userModel = require('../models/shopping_cart/users-model')


const addBookToCart = async (username, book) => {
    try {
        return await cartModel.create(book)
    } catch (err) {
        console.log(err);
    }
}

const findAllBooksInCartForUser = async () =>
    await cartModel.find()

// const findRecipe = (name) =>
//     recipesModel.find({strMeal: name})
// // recipesModel.find({$text: {$search: name}})
//
// const findRecipeById = (id) => {
//     return recipesModel.find({_id: id})
// }


const deleteBook = (name, book) =>
    cartModel.deleteOne({strMeal: name})

module.exports = {
    addBookToCart,
    findAllBooksInCartForUser
}