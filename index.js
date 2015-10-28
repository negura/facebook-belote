var app = require('express')();
var http = require('http').Server(app);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/html/index.html');
});

http.listen(process.env.PORT || 5000,function(){
	console.log('Listening on *:5000');
});
