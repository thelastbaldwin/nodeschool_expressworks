var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
// path.join(__dirname, 'public') is a cross platform way to specify the directory
// in the exercise, this directory is the third argument
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);
