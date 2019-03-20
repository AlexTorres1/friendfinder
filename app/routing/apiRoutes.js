//needs to get the logic to work.

//need to capture what the user inputs
//need to be able to compare what the user inputted to the friends.js
//need to assign who the user is most compatible with
var newFriends = require("../data/friends");
module.exports = function(app){
    app.get("/api/friends", function (req, res){
        res.json(newFriends);
    })

    app.post("/api/friends", function(req, res) {
        res.json(newFriends[0]);       
        newFriends.push(req.body);
        
      });
}

