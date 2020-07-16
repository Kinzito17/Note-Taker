const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = [];

// notes = notes.map((i, idx) => ({...i, id: idx}))

app.use(express.static(__dirname + '/public'));

//html routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//api calls
app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "db/db.json"), (err, notes) => {
        if (err) throw err;
    })
    console.log(notes);
    return res.json(notes)
});

app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    notes.push(newNote)
    notes.forEach((id, index) => {
        id.id = index + 1;
    });    
    fs.writeFile(path.join(__dirname, 'db/db.json'), JSON.stringify(notes), (err) => {
        if (err) throw err;
      });
    res.end();
});

app.delete("/api/notes/:id", (req, res) => {
    chosen = req.params.id
    return res.send("/api/notes")
})


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
})













