var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res)
	{
		res.render("smack_my_bitch_up.ejs");
	}
);

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});
