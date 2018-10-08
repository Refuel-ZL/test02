
import * as Koa from 'koa';
import * as router from './routers';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
const app = new Koa();


app.use(bodyParser());

app.use(logger());

app.use(router.routes());

app.use(ctx => {
  ctx.body = 'Hello world!';
});

const server = app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Press CTRL-C to stop \n');
});

module.exports = server;