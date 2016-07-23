var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/html/index.html');
});

http.listen(process.env.PORT || 5000,function(){
	console.log('Listening on *:5000');
});
