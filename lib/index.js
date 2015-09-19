var koa = require('koa'),
    scss = require('koa-scss'),
    serve = require('koa-serve'),
    logger = require('koa-logger'),
    path = require('path');

var root = path.join(__dirname, '..', 'public'),
    port = process.env.HTTP_PORT || 8000,
    app = koa();

app.use(logger());
app.use(scss({
    src: root + '/assets/scss/',
    dest: root + '/assets/css/',
    prefix: '/assets/css/'
}));
app.use(serve('assets', root));

app.listen(port);
console.log('httpd.js listening on port %s', port);
