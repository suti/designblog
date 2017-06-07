var express = require('express');
var router = express.Router();
var userInfo = require('../data/userInfo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {
  var response = {
    code: 1,
    userInfo: userInfo
  }
  res.send(JSON.stringify(response));
});

module.exports = router;
