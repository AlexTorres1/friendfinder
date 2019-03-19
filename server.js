//Dependencies
var express = require("express");



//Sets up Express App
var app = express();
var PORT = process.env.PORT || 3606;

//Sets up Express Data parsing:  part of the express package
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //Routes: not sure how this works, forgot if it's one . or ../?
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Starts up server to listen to which port it should ve working on
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});

