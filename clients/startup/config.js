const config = require('config');
const morgan = require('morgan');
const cors = require('cors');
module.exports = class Config{
  constructor(app, express){
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    if (app.get('env') === 'development') app.use(morgan('dev'));
    const swaggerUI = require("swagger-ui-express");
    const swaggerJsDoc = require("swagger-jsdoc");

    const options = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "simple store",
          version: "1.0.0",
          description: "A simple store is very useful for pragrammer",
          termsOfService: "http://example.com/terms/",
          contact: {
            name: "Mehdi Shoja Razavi",
            email: "mehdishojarazavi@gmail.com",
          },
        },
          servers: [
          {
            url: "http://localhost:4000",
          },
        ],
      },
          apis: ["./src/routes/**/*.js"],
    };

    const specs = swaggerJsDoc(options);
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, {explorer: true}));
  }
}

