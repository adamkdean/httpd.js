var koa = require('koa'),
    serve = require('koa-serve'),
    logger = require('koa-logger'),
    path = require('path'),
    port = process.env.HTTP_PORT || 8000,
    app = koa();

app.use(logger());
app.use(serve('assets', path.join(__dirname, '..', 'public')));

app.listen(port);
console.log('httpd.js listening on port %s', port);
