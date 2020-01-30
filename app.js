var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.urlencoded({extended : true}));

var vinnovateit_all_members_list = {
	"Kshitij" : "9650797489",
	"Aarushi" : "9674940210",
	"Aaryaman" : "7418249443",
	"Aashish" : "9003761424",
	"Aayush" : "9589987638" ,
	"Aayushi" : "9479704298",
	"Aditya" : "8003396950",
	"Arpit" : "7073261168" ,
	"Divya" : "9560814334" ,
	"Ipshita" : "9354217705",
	"Janesh" : "9820587794",
	"Karan" : "9515674521",
	"Meet" : "7397049411",
	"Kushal" : "7397049411",
	"Mounish" : "9014612004",
	"Muskaan" : "9805467098",
	"Naman" : "7068124081",
	"Nisarga" : "9359078742" ,
	"Nitin" : "7045835383",
	"Raghav" : "8791161621",
	"Rishika" : "6264411505",
	"Ritik" : "7568343305",
	"Roshan" : "7974905659",
	"Sahil" : "9979302676",
	"Sameer" : "9050537614",
	"Utkarsh" : "9820342776",
	"Shreya" : "6379117285",
	"Sparsh" : "6397696910",
	"Akshit" : "7230053300",
	"Senthil" : "",
	"Satakshi" : "8617356506",
	"Subho" : "9733918107",
	"Amit" : "8921816808",
	"Ananya" : "7353054694",
	"Aritri" : "9748871137",
	"Aryan" : "9716270202",
	"Ayush" : "8826295146",
	"Muskaan" : "7081827226",
	"Nimrit" : "8360407845",
	"Praduym" : "9366502687",
	"Samarthya" : "8789771097",
	"Sankar" : "9347994869",
	"Saumya" : "9510937376",
	"Sejal" : "7542031503",
	"Siesh" : "9903415808",
	"Shivam" : "7003707633",
	"Shivam" : "8290754760",
	"Soham" : "8910737240",
	"Tanisq" : "9131798517",
	"Yash" : "9654563731",
	"Muskaan" : "9831460332",
	"Saransh" : "",
	"Kumar" : "",
};

console.log(vinnovateit_all_members_list);

app.use(express.static(__dirname + '/public'));


app.get("/",function(req,res)
	{
		res.render("smack_my_bitch_up.ejs",
			{
				
			});
	}
);

app.get("/who_to_smack",function(req,res)
	{
		res.render("att_page.ejs",
		{
				"vinnovateit_members" : vinnovateit_all_members_list,
		});
	}
);

app.listen( process.env.PORT || 8000 , function(){
	console.log("SERVER 8000 HAS STARTED");
});
