var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 3000 HAS STARTED");
});
