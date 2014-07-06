var express = require('express');
var router = express.Router();

var currentUser = '';

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/set/:userid', function(req, res) {
  	var userid = req.params.userid;
	currentUser = userid;
	res.send('respond with a resource: ' + userid);
});

router.get('/current', function(req, res) {
	res.send('current user is ' + currentUser);
});

module.exports = router;
