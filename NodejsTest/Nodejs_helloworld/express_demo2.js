module.paths.push("C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules")

var express = require("express")
var app = express();


app.use(express.static("public"));

app.get('/', function (req, res) {
	console.log("mainpage req");
	res.send("Hello get");
})

app.post('/', function (req, res) {
	console.log("mainpage post req");
	res.send("Hello post");
});

app.get('/del_user', function (req, res) {
	console.log("/del_user  req");
	res.send("delete page");
});

app.get('/list_user', function (req, res) {
	console.log("/list_user  req");
	res.send("delete page");
});

app.get('/ab*cd', function (req, res) {
	console.log("/ab*cd  req");
	res.send("re match");
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("访问地址: http://%s：%s", host, port);
});
