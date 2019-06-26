var express = require('express');
var app = express();

var employeeController = function(req,res){
	var emp = [
	                 {id:1, fname:"Anushka" ,lname:"Venugopal",email:"abc@gmail.com",accno:"123"},
	                 {id:2, fname:"Sivani" , lname:"Kulkarni",email:"pqr@gmail.com",accno:"421"},
	                 {id:3, name:"Komal" ,city:"Gupta",email:"xyz@gmail",phoneno:"456"}
	              ];
				   res.send(emp);
};

var server = app.get('/emp',employeeController);
    server.listen(7000);