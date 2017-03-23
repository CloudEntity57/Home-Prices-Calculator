var express = require('express');
var router = express.Router();
var jquery = require('jquery');
let input = jquery.get('../../input.txt');
/* GET home page. */

router.get('/', function(req, res, next) {
  console.log('the input is: ',input);
  res.render('index', { title: 'Express' });
});

module.exports = router;
