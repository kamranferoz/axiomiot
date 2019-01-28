var express = require("express");
var app = express();

app.get("/", function(request, response, next){
    response.send("Hello world!");
})

app.get("/about", function(request, response, next){
    response.send("this is about");
})

app.get("/profile", function(request, response, next){
    response.send("this is profile!");
})

app.listen(3000, function(){
    console.log("App is running on 3000");
})