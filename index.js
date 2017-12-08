var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/proxy', proxy('www.google.com'));
app.use('/', function (req, res) {
    res.send("It works");
})
app.listen(8080);
