var express = require('express');
var path = require('path');
var open = require('open');
var url ={
    host: 'http://localhost:',
    port: '3000',
}

var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(url.port, function(err){
    if (err){
        console.log(err);
    } else {
        open(url.host + url.port);
    }
});