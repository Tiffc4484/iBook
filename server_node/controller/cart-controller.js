const cartServices = require("../services/cart-services")

module.exports = (app) => {
    const addBookToCart = (req, res) => {
        let bookId = req.params.bookId
        console.log(bookId)
        let username = req.body.username
        cartServices.addBookToCart(bookId, username)
            .then(book => {
                console.log(book)
                res.send(book)
            })
    }

    const findAllBooksInCartForUser = (req, res) => {
        let bookId = req.params.bookId
        favoriteService.findAllUsersForAFavorite(recipeId)
            .then()
    }

    app.post('/auth/user/:username/cart', addBookToCart)
//app.post('/api/favorites/:username', addFavoriteToUser)
//app.get('/api/favorites/:mealId', findAllUsersForAFavorite)
    app.get('/auth/user/:username/cart', findAllBooksInCartForUser)

}