var http = require('http');
var querystring = require('querystring');
var url = require('url');
var crypto = require('crypto');
http.createServer(function(request, response){
	console.log('connected!');

	var postData = '';
	var responseData = '';
	if(request.method == 'GET'){
		var objUrl = url.parse(request.url);
		var objGetParmas = querystring.parse(objUrl.query);
		
		var signature = objGetParmas.signature;
		var timestamp = objGetParmas.timestamp;
		var nonce = objGetParmas.nonce;
		var echostr = objGetParmas.echostr;

		console.log(signature);
		console.log(timestamp);
		console.log(nonce);
		console.log(echostr);

		var token = 'wushuaitoken';
		var array = [token, timestamp, nonce];
		array.sort();
		
		var sha1 = crypto.createHash('sha1');
		console.log(array.join(''));
		var tempstr = sha1.update(array.join('')).digest().toString('base64')

		console.log(tempstr);

	}else if(request.method == 'POST'){
		request.setEncoding('utf8');
		request.addListener('data', function(postDataChunk){
			postData += postDataChunk;
		});
		request.addListener('end', function(){
			var objPostData = querystring.parse(postData);
			console.log(objPostData.name);
		});
	}
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hello node');	
}).listen(8088, '10.66.110.96');
console.log('Server running...');


