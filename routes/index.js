var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

	if(req.query.v === "2"){
  		res.render('index2', { title: 'Express' });
	}else{
  		res.render('index', { title: 'Express' });
	}
  
});

module.exports = router;
