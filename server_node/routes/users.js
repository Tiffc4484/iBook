var express = require('express');
const bcrypt = require("bcrypt");
var router = express.Router();

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error", err);
    }
    console.log("log out......");
  });
  res.sendStatus(200);
});

module.exports = router;
