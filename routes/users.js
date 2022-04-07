var express = require('express');
const {getCollection} = require("../src/mongo");
const bcrypt = require("bcrypt");
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
