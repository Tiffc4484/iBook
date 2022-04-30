const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const userModel = require("../models/users/users-schema");
const cartModel = require('../models/shopping_cart/shoppingCart-model')
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    if (username === undefined || password === undefined) {
        return res.sendStatus(400);
    }
    try {
        const user = await userModel.findOne({username});
        console.log("login find user: " + user);
        if (!user) {
            req.session.error = "Invalid Credentials";

            return res.status(400).send("This account does not exist");;
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).send("Username and password do not match, please try again");;
        }
        req.session.isAuth = true;
        req.session.username = user.username;
        //console.log("req.session.isAuth? " + req.session.isAuth);
        //console.log("req.session.username? " + req.session.username);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get("/login", async (req, res) => {
    const error = req.session.error;
    delete req.session.error;
    res.render("login", {err: error});
});

router.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    if (username === undefined || password === undefined) {
        return res.sendStatus(400);
    }
    try {
        let user = await userModel.findOne({username});
        console.log("sign up find user: " + user);
        if (user) {
            return res.status(400).send("This username has been registered");
        }
        const hash = await bcrypt.hash(password, 10);
        user = new userModel({
            username,
            password: hash,
        });
        let cartUser = username.slice(0, username.lastIndexOf("@"));
        console.log("cartUser: " + cartUser);
        cart = new cartModel({
            username: cartUser,
            cart:[],
        });
        await user.save();
        await cart.save();
        return res.status(200).send("Sign up succeed!");
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get("/user", async (req, res) => {
    if (req.session.isAuth) {
        //console.log("get /auth/user: " + req.session.username);
        res.send(req.session);
    } else {
        res.status(400);
    }
});

module.exports = router;


