var proxy = require('express-http-proxy');
var app = require('express')();

var root = process.env.PROXY_ROOT || process.exit(1);

app.use('/', proxy(root));
app.listen(8080);
