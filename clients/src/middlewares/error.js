const winston = require('winston');
const createErrors = require('http-errors');

module.exports =  function(app){
  app.use((req, res, next)=>{
    next(createErrors.NotFound());
  });
  app.use((err, req, res, next)=>{
    winston.error(err.message, err);
    const serverError = createErrors.InternalServerError;
    const status = err?.status || serverError.status || 500;
    const message = err?.message || serverError.message || 'InternalServerError';
    res.status(status).json({
      status,
      data: {
        message
      }
    });
  });
};




