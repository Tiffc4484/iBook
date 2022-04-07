const express = require("express");
const router = express.Router();

const { getCollection } = require("../src/mongo");
const routeUtils = require("../src/routeUtils");

const { ObjectId } = require("mongodb");

const bcrypt = require("bcrypt");
router.use("/", routeUtils.checkLogStatus);

router.post("/login", async (req, res) => {
    if (req.body.username === undefined || req.body.password === undefined) {
        return res.sendStatus(400);
    }
    try {
        let query;
        query = {username: req.body.username };
        const collection = await getCollection("users");
        const resFind = await collection.find(query).toArray();
        console.log(resFind);
        if (resFind.length === 0) {
            return res.sendStatus(404);
        }
        for (let user of resFind) {
            const hash = user.password;
            const match = await bcrypt.compare(req.body.password, hash);
            if (match) {
                req.session._id = user._id;
                req.session.username = user.username;
                if (req.body.checked) {
                    res.cookie("_id", user._id, {
                        maxAge: 1000 * 60 * 60 * 24 * 7,
                    }); // 1 day
                } else {
                    res.cookie("_id", user._id);
                }
                return res.sendStatus(200);
            }
        }
        res.status(400).send("Username and password do not match, please try again");
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.post("/signup", async (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body);
    if (req.body.username === undefined || req.body.password === undefined) {
        return res.sendStatus(400);
    }
    try {
        const collection = await getCollection("users");
        // console.log(collection);
        const resFind = await collection
            .find({
                username: req.body.username,
            })
            .toArray();
        if (resFind.length !== 0) {
            return res.status(409).send("This email address has been registered");
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        const data = {
            username: req.body.username,
            password: hash,
            cart:[],
        };
        console.log(data);
        await getCollection("users").insertOne(data);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get("/user", async (req, res) => {
    if (req.session.user === undefined) {
        // once the browser has the cookie, the log status stays valid
        if (req.cookies._id === undefined) {
            return res.sendStatus(204);
        }
        try {
            const collection = await getCollection("users");
            const user = await collection.findOne(
                { _id: new ObjectId(req.cookies._id) },
                { projection: { _id: 0, password: 0 } }
            );
            if (user === null) {
                res.sendStatus(204);
            } else {
                req.session._id = req.cookies._id;
                req.session.user = user;
                res.send(user);
            }
        } catch (err) {
            console.log("Error", err);
            res.sendStatus(400);
        }
    } else {
        res.send(req.session.user);
    }
});

module.exports = router;


