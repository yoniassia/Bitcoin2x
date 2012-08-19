var express = require('express');

var app = express.createServer(express.logger());

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/1', function(request, response) {
  response.send('Hello you!');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});