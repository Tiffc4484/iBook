const cartServices = require("../services/cart-services")
const {findAllBooksInCartForUser} = require("../services/cart-services");
const express = require("express");
const copy = require("../models/shopping_cart/shoppingCart-schema")
const router = express.Router();



module.exports = (app) => {
    const addBookToCart = (req, res) => {
        let username = req.params.username
        console.log(username)
        let book = req.body.book
        cartServices.addBookToCart(book, username)
            .then(book => {
                console.log(book)
                res.send(book)
            })
    }

    // const findAllBooksInCartForUser = (req, res) => {
    //     let bookId = req.params.bookId
    //     favoriteService.findAllUsersForAFavorite(recipeId)
    //         .then()
    // }

    router.post('/:username/cart', (req, res) =>
        // let username = req.params.username

        // let book = req.body.book
        // cartServices.addBookToCart(book, username)
            cartServices.addBookToCart(req.params.username, req.body).then(book => {
                console.log(book)
                res.send(book)
            })
    )
    router.get('/:username/cart', (req, res) =>
        cartServices.findAllBooksInCartForUser()
            .then(allBooks => res.json(allBooks)))
    //router.get('/:username/cart', findAllBooksInCartForUser)

    module.exports = router;
}