//needs to get the logic to work.
//need to pull the friends.js to get the json
//need to capture what the user inputs
//need to be able to compare what the user inputted to the friends.js
//need to assign who the user is most compatible with

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "/../public"))
})