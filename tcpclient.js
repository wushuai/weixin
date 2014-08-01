var net = require('net');

var client = net.connect({host: '121.199.62.4', port:8088}, function(){
	
	console.log('client connected!\r\n');
	client.write('client \r\n');
});

client.on('data', function(data){
	console.log(data.toString());
	client.end();				
});

client.on('end', function(){
	console.log('client disconnected');
});
