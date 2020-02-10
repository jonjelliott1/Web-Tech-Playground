var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

/* GET Second page. */
router.get('/Second', function(req, res, next) {
  res.render('index2', { title: 'Second' });
  
});

module.exports = router;
