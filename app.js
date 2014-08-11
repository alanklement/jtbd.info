var express = require('express'); 
// var routes = require('./routes'); 
var http = require('http');
var path = require('path');
var config = require('./config');
var compression = require('compression');
var morgan = require('morgan');
var errorhandler = require('errorhandler');
var bodyParser = require('body-parser');

var app = express();
// app.disable('x-powered-by');
app.set('port', process.env.PORT || 8080);
// app.set('title', 'alanklement.com');
app.set('views', __dirname + config.VIEW_DIR);
app.set('view engine', 'html');
app.set('isProduction', process.env.NODE_ENV == 'production');

app.engine('html', require('ejs').renderFile);
// app.use(compression());
// app.use(morgan());
// app.use(errorhandler());
// app.use(bodyParser());
app.use(express.static(path.join(__dirname, config.VIEW_DIR)));


app.use(function(req, res){
    res.redirect('/');
  });


function beginServer () {
	http.createServer(app).listen(app.get('port'), function(){

		if( app.get('isProduction')){
			console.log("INIT ::: Production Express server listening on port " + app.get('port'));
		}else{
			console.log("INIT ::: _DEVELOPMENT_ Express server listening on port " + app.get('port'));
		}
	});
}

beginServer();