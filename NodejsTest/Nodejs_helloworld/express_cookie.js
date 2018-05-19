module.paths.push("C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules")

var express = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');

var app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
	console.log("Cookies: " + util.inspect(req.cookies));
})

app.listen(8081)