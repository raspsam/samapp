var express = require('express');
var router = express.Router();
var _info = require('./_info.js');

/* GET dragon. */
router.get('/', function(req, res, next) {
  res.render('dragon', _info.person);
});

module.exports = router;
