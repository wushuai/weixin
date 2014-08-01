var wechat = require('wechat');

app.use(connect.query());
app.use('/wechat', wechat('some token', function(req, res, next){
	var message = req.weixin;
	res.reply('hehe');
}));
