var express = require('express');
var app = express()

app.get('/', function(request, response){
  response.sendFile('index.html', {"root": "build"});
});

var port = process.argv[2] || 3000;
app.listen(port);
console.log('app listening on port ' + port);
