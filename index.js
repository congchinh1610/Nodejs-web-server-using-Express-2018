var express =  require('express');
var app = express();

var port = 3000;

app.get('/', function(request, response) {
	response.send('<h1>Xin chào các tình yu</h1>');
});

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});