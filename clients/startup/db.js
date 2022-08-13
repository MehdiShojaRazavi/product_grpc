const mongoose = require('mongoose');
const debug = require('debug')("app:main");
const config = require('config');

module.exports = class Db{
  constructor(){
    mongoose
    .connect(config.get('db.address'))
    .then(() => debug('connected to mongodb >>', config.get('db.address')))
    .catch(() => debug('could not connect'))

    mongoose.connection.on('connected', () => {
      console.log('MongoDB connection is OK');
    });
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB connection is disconnected');
    });
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("disconnected");
      process.exit(0);
    });
  }
}

