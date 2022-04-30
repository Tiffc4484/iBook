const cartServices = require("../services/cart-services")
const express = require("express");
const router = express.Router();
const cartModel = require('../models/shopping_cart/shoppingCart-model');
const userModel = require('../models/users/users-schema');
const bookModel = require('../models/shopping_cart/book-model');

router.post('/:username/shopping_cart', async (req, res) => {
    const {bookTitle, author, price, bookQuantity, imageURL} = req.body;
    const username = req.params.username;
    console.log("username in post /:username/shopping_cart, " + username);
    try {
        let book = {
            bookTitle,
            author,
            imageURL,
            bookQuantity,
            price,
        };
        let addBook = new bookModel({...book});
        await cartModel.findOneAndUpdate({username: username}, {$addToSet: {cart: addBook}}).exec();
        return res.status(200).send("update cart successfully");
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false,
        });
    }
});

router.get('/:username/shopping_cart', async (req, res) => {
    try{
        const username = req.params.username;
        let allBooks = await cartModel.find({"username": username},{"cart": 1, "_id": 0});
        return res.status(200).json({
            status: true,
            data: allBooks,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false,
        });
    }
});

// app.put('/:username/cart', async (req, res) => {
//     try {
//         cartServices.updateBookQuantity(req.params.username, req.body)
//             .then(book=>res.send(book))
//     } catch (error) {
//         console.error(error)
//     }
//
// })

module.exports = router;