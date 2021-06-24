// Imports
var express = require('express');

// Instantiate server
var server = express();

// Configure Routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour bienvenue sur mon server</h1>');
});

// Launch server
server.listen(8080, function(){
    console.log('Server en ecoute')
});
