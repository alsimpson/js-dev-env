var express = require('express');
var path = require('path');
var open = require('open');

//integrate webpack
var webpack = require('webpack');
var config = require('../webpack.config.dev.js');

var url ={
    host: 'http://localhost:',
    port: '3000',
}
var app = express();
var compiler = webpack(config);  //define webpack compiler

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

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