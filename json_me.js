var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data){
    res.send(JSON.parse(data));
    res.end();
  });
});

app.listen(process.argv[2]);
