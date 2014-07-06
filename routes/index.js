var express = require('express');
var router = express.Router();

var counter = 0;

/* GET home page. */
router.get('/backupindex', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getcounter', function(req, res) {
	counter++;
	res.send('Hello Counter' + counter);
});

router.post('/push', function (req, res) {
    var myBody = req.body;
    console.log(myBody.title);
    res.send('Handle post with values ' + myBody.title);
});

module.exports = router;
