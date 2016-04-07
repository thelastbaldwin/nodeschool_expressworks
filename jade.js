var express = require('express');
var app = express();

// how to set the view folder to a local 'templates' folder
//app.set('views', path.join(__dirname, 'templates'));

app.set('views', process.argv[3]); 
app.set('view engine', 'jade');

app.get('/home', function(req, res){
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
