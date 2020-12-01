var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT;
var listener = server.listen(port);

var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
    socket.on('.pointer', function (data) {
        socket.broadcast.emit('.pointer', data);
    });
});

// Routing
app.use(express.static('lib'));

//viewport event listener
var numUsers = 0;

io.on('connection', (socket) => {
  var addedUser = false;
  

});

