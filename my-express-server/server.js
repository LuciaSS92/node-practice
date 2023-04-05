const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello!</h1>");
  
});

app.get("/contact", function(req, res){
    res.send("Contact me at: mail@mail.com")
})

app.get("/about", function(req, res){
    res.send("About: blah blah blah")
})

app.get("/hobbies", function(req, res){
    res.send("Hobbies: books and dogs")
})


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
