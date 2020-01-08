const express = require('express');
//const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const userRouter = require('./routers/user-router/user-router');
const dogRouter = require('./routers/dog-router/dog-router');
const catRouter = require('./routers/cat-router/cat-router');

require('dotenv').config();

const server = express();

server.use(cors({origin: CLIENT_ORIGIN}));
server.use(helmet());

server.use(express.json());

server.use('/api/user', userRouter);
server.use('/api/cat', catRouter);
server.use('/api/dog', dogRouter);


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



const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }`);
});

module.exports = server;