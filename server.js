const express = require('express');
const my_express = express();

var port = process.env.PORT || 8000;

my_express.use(express.static(__dirname));

my_express.get("/", function(req,res) {
	res.render("index");
});

my_express.listen(port, function() {
	console.log("app running");
});