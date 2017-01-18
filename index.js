
var express = require('express');
const fs = require('fs');
var app = express();

app.get('/', function (req, res) {

// Get image name from the url
var str_img = req.query.img;

// Check if get surf image
if (str_image === 'surf') {
	const readStream = fs.createReadStream('images/surf.jpeg');
	readStream.pipe(res);	
}
 //res.send('Hello World! str_img = ' + str_img);
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
 console.log('Example app listening on port 3000!');
});
