var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/styleguide');
});

router.get('/styleguide', function(req, res, next) {
  res.render('styleguide');
});


module.exports = router;
