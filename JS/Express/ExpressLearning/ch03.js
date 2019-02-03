var express = require("express");

var app = express();

app.use(function(request, response){
    response.send("Hello World");
})

app.listen(8080);