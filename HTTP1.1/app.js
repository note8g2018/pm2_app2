const express = require('express');
const userNameRouter = require('./route/userName_R');
const emailRouter = require('./route/email_R');
const regRouter = require('./route/reg_R');
const loginRouter = require('./route/login_R');
const logoutRouter = require('./route/logout_R');
const articleRouter = require('./route/article_R');
const db = require('./db/db_DB');

const app = express();

const HTTP_PORT = 3000;
//const HTTP_IP = '192.168.1.100';
const HTTP_IP = 'coolme.me';

async function start()
{
  await db.run();
  app.listen(HTTP_PORT, HTTP_IP);
  console.log(`The HTTP1.1 WebServer is listening on: 
  ${HTTP_IP}:${HTTP_PORT}`);
}
start();

// app.use((req, res, next) =>
// {
//   console.log('request was made:');
//   console.log('baseUrl: ', req.baseUrl);
//   console.log('remoteAddress: ', req.connection.remoteAddress);
//   console.log('hostname: ', req.hostname);
//   console.log('ip: ', req.ip);
//   console.log('originalUrl: ', req.originalUrl);
//   console.log('params: ', req.params);
//   console.log('path: ', req.path);
//   console.log('protocol: ', req.protocol);
//   console.log('secure: ', req.secure);
//   next();
// });

app.use(express.json());

app.use('/checkusername', userNameRouter);
app.use('/checkemail', emailRouter);
app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/article', articleRouter);
