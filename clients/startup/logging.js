require('express-async-errors');
const winston = require('winston');
const debug = require('debug')("app:main");

module.exports = class Logging{
  constructor(){
    process.on('uncaughtException', (ex)=>{
      debug(ex);
      winston.error(ex.message, ex);
      process.exit(0);
    });

    process.on('unhandledRejection', (ex)=>{
      debug(ex);
      winston.error(e.message, ex);
      process.exit(0);
    });

    winston.add(new winston.transports.File({filename: 'logfile.log'}));
  }
}

