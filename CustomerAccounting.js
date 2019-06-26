var express = require('express');
var app = express();

var accountingController = function(req,res){
	var details = [
	                 {id:1, fname:"Anushka" ,lname:"Venugopal",email:"abc@gmail.com",accno:"123"},
	                 {id:2, fname:"Sivani" , lname:"Kulkarni",email:"pqr@gmail.com",accno:"456"}
	              
	          
	              ];
				   res.send(details);
};

var server = app.get('/details',accountingController);
    server.listen(8080);