const cartModel = require('../models/shopping_cart/shoppingCart-model')
const userModel = require('../models/users/users-schema')


const addBookToCart = async (username, book) => {
    try {
        console.log("from service" + JSON.stringify(book))
        const updateBooks = await cartModel.update({username: username}, {$push: {cart: book}}, done);

        return updateBooks;
    } catch (err) {
        console.log(err);
    }
}

const updateBookQuantity = (username, book) => {
    return cartModel.updateOne({username: username}, {$set: book})
}

const findAllBooksInCartForUser = async (name) => {
    const allBooks = await cartModel.find({username: name});
    return allBooks;
}

const deleteBook = (name, book) =>
    cartModel.deleteOne({bookTitle: name})

module.exports = {
    addBookToCart,
    updateBookQuantity,
    findAllBooksInCartForUser
}