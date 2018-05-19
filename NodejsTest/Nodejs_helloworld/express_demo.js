module.paths.push("C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules")

console.log(module.paths)

var express1 = require("express");
var app = express1();

app.get('/', function (req, res) {
	res.send('Hello World');
})

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

