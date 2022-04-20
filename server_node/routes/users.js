var express = require('express');
const {getCollection} = require("../src/mongo");
const routeUtils = require("../src/routeUtils");
const bcrypt = require("bcrypt");
var router = express.Router();

router.use("/", routeUtils.checkLogStatus);

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error", err);
    }
  });
  res.sendStatus(200);
});

module.exports = router;
