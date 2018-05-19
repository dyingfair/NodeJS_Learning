module.paths.push("C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules")

var express = require("express")
var app = express();
var bodyPaser = require("body-parser");

var urlencoderParser = bodyPaser.urlencoded({ extended: false });

app.use(express.static("public"));

app.get('/index.htm', function (req, res) {
	res.sendFile(__dirname + "/" + "index.htm");
});

app.post('/process_post', urlencoderParser, function (req, res) {
	var response = {
		"first_name": req.body.first_name,
		"last_name": req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("访问地址: http://%s：%s", host, port);
});