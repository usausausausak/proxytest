var proxy = require('express-http-proxy');
var app = require('express')();

var root = process.env.PROXY_ROOT || process.exit(1);
var path = process.env.PROXY_PATH || 'proxy';

app.use('/' + path, proxy(root));
app.use('/', function (req, res) {
    res.send("It works.");
});
app.listen(8080);
