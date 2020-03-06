const mongoose = require('mongoose');
const util = require('util');
require('dotenv').config();
const app = require('./config/express');
const router = require('./controllers/index.js');
const port = process.env.PORT



mongoose.Promise = Promise;

const mongo_uri = process.env.MONGODB_URI
mongoose.connect(mongo_uri)


// # TODO: Any additional config changes belong here.

// Routes
app.use(router);

if (!module.parent) {
  app.listen(process.env.PORT, () => {
    console.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
  });
}

module.exports = app;
