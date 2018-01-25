var serve = require('koa-static-server')
var Koa = require('koa');

const app = new Koa();

app.use(serve({
    rootDir: 'web',
    index: 'index.html'
}))

app.listen(3001)

console.log('listening on port 3001')