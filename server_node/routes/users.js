var express = require('express');
const {getCollection} = require("../src/mongo");
const isAuth = require("../src/isAuth");
const bcrypt = require("bcrypt");
var router = express.Router();

router.use("/", isAuth);

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error", err);
    }
    console.log(req.session);
  });
  res.sendStatus(200);
});

module.exports = router;
