
var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.send('Hello World!');
});

app.get('/', function (req, res) {
 var img = req.query.q;
 res.send('Hello World!' + img);
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
 console.log('Example app listening on port 3000!');
});