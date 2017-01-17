
var express = require('express');
var app = express();

app.get('/', function (req, res) {
 var str_img = req.query.img;
 res.send('Hello World! str_img = ' + str_img);
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
 console.log('Example app listening on port 3000!');
});
