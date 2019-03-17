//Dependencies
var express = require("express");
var path = require("path");


//Sets up Express App
var app = express();
var port = process.env.PORT || 3000;

//Sets up Express Data parsing:  part of the express package
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Routes: not sure how this works, forgot if it's one . or ../?
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes");(app);

//Starts up server to listen to which port it should ve working on
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});