var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
	if (req.headers['x-forward-proto'] === 'http'){
		next();
	}else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));



app.listen(PORT, function(){
	console.log('Server Up and Running on ' + PORT);
});