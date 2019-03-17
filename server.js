//Dependencies
var express = require("express");
var path = require("path");


//Sets up Express App
var app = express();
var port = process.env.PORT || 3000;

//Sets up Express Data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Routes
require("./app/routing/apiRoutes")(app);
require("./");

//Starts up server to listen
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});