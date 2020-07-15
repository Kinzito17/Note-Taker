const http = require("http");
const fs = require('fs');
var express = require("express");

const app = express();
const PORT = 8080;

const server = http.createServer();

server.listen(PORT, function() {
    console.log ("Server listening on: http://localhost:" + PORT)
})

let notes = []

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/pubic/index.html');
})

// function handleRequest(req, res) {
//     res.end("Not today Satan!")
// }

  
  
  