var express = require('express');
var router = express.Router();
var _info = require('./_info.js');

/* GET sam. */
router.get('/', function(req, res, next) {
  res.render('pack', _info);
});

module.exports = router;
