const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = []

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

  app.get("/api/notes", function (req, res) {
    return res.json(notes)
  });



  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    
    notes.push(newNote)
    console.log(notes)

    res.end();
});


  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
})





// app.get('/', function(req, res) {
//     res.send(__dirname + '/pubic/index.html');
// })

// app.get('/notes', function(req, res) {
//     res.sendFile(__dirname + '/public/notes.html')
// })

// app.post("/api/notes", function(req, res) {
//     var newNote = req.body;
  
//     console.log(newNote);
  
//     notes.push(newNote);
  
//     res.json(newNote);
//   });
  







