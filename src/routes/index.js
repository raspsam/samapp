var express = require('express');
var router = express.Router();
var _info = require('./_info.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', _info);
});

module.exports = router;
