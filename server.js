// set up ========================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port = 9090											//port that will be listen

app.configure(function() {
		app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
	});

app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file 
	});
	
app.listen(port);
console.log("App listening on port " + port);	