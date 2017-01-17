
var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('Hello connect to the server :)' );

 // Get image name from the url
 var str_img = req.query.img;

 // Check if get surf image
 if (str_image === 'surf') {
      res.send('Get dwonlad surf image');
     var img1 = fs.readFileSync('./logo.gif');
     res.writeHead(200, {'Content-Type': 'images/surf' });
     res.end(img1, 'binary');
	// Open stream from surf file
	//const readStream = fs.createReadStream('surf.jpeg');

	
 }
 res.send('Hello World! str_img = ' + str_img);
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
 console.log('Example app listening on port 3000!');
});
