var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log("req.session.isAuth? " + req.session.isAuth);
  console.log("req.session.username? " + req.session.username);
  res.render('index', { title: 'Express' });
});

module.exports = router;
