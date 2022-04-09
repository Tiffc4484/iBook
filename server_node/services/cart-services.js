const cartModel = require('../models/shopping_cart/shoppingCart-model-model')
const userModel = require('../models/shopping_cart/users-model')

const createRecipe = (name, recipe) => {
    return cartModel
        .create(recipe)
}

const addFavoriteToMeal = (recipeId, username) => {
    return cartModel.updateOne(
        console.log(username),
        {recipeId: recipeId},
        {$push: {users: username}},
        done
    )
}
const findAllBooksInCart = () =>
    cartModel.find()

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
    createRecipe,
    findAllRecipe,
    findRecipe,
    findRecipeById,
    deleteRecipe
}