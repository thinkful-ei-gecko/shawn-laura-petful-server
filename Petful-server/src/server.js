const userRouter = require('./routers/user-router/user-router')
const allUsersRouter = require('./routers/user-router/all-users-router')
const dogRouter = require('./routers/dog-router/dog-router')
const catRouter = require('./routers/cat-router/cat-router')


require('dotenv').config()
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
server.use(cors());

server.use(express.json())
server.use(helmet())


server.use('/user', userRouter)
server.use('/allusers', allUsersRouter) //CURRENTLY NOT FUNCTIONING
server.use('/cat', catRouter)
server.use('/dog', dogRouter)


// Catch-all 404
server.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
server.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: server.get('env') === 'development' ? err : {}
  });
});

server.listen(8080,()=>{
  console.log('Serving on 8080');
});

module.exports = server