const mongoose = require('mongoose');
const util = require('util');
require('dotenv').config();
const app = require('./config/express');
const router = require('./controllers/index.js');




mongoose.Promise = Promise;

const mongoUri = process.env.MONGO_HOST;
mongoose.connect(
  mongoUri,
  { server: { socketOptions: { keepAlive: 1 } } }
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// # TODO: Any additional config changes belong here.

// Routes
app.use(router);

if (!module.parent) {
  app.listen(process.env.PORT, () => {
    console.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
  });
}

module.exports = app;
