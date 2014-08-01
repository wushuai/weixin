var net = require('net');

var server = net.createServer(function(socket){
	socket.on('data', function(data){
		console.log(data.toString());
		socket.write('this is server');
	});

});

server.listen(8088, '10.66.110.103');