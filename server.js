
//servers hosts html and js script - using express to do this

//require express to be an accessible module
var express = require('express');

var app = express();
port = 3000
var server = app.listen(3000); //port 3000

//allows express to access static files in public directory
app.use(express.static('public'));

console.log("Server Running On Port: " + port)
console.log("Access with http://localhost:3000")

//require socket.io to accessible module
var socket = require('socket.io');

var io = socket(server);

//io is input out put object
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('New Connection: ' + socket.id)

    socket.on('mouse', mouseMessage)

    function mouseMessage(data) {
        socket.broadcast.emit('mouse', data)
        //io.sockets.emit('mouse', data); //would also emit back to sender
        //console.log(data)
    }
}

