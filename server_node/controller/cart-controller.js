const cartServices = require("../services/cart-services")
const express = require("express");
const router = express.Router();
const cartModel = require('../models/shopping_cart/shoppingCart-model');
const userModel = require('../models/users/users-schema');
const bookModel = require('../models/shopping_cart/book-model');

router.post('/:username/shopping_cart', async (req, res) => {
    const {bookTitle, author, price, bookQuantity, imageURL} = req.body;
    const username = req.params.username;
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

router.put('/:username/shopping_cart', async (req, res) => {
    try {
        const username = req.params.username;
        const {bookTitle, bookQuantity} = req.body;
        await cartModel.findOneAndUpdate({username: username, "cart.bookTitle": bookTitle}, {$set: {"cart.$.bookQuantity": bookQuantity}});
        res.status(200).json({
            status: true,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err,
            status: false,
        });
    }

})

module.exports = router;