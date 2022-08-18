const createError = require('http-errors');
const {StatusCodes: HttpStatus} = require('http-status-codes');
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const productProtoPath = path.join(__dirname, "..", "..", "..", "..", "protos", "product.proto");
const productProto = protoLoader.loadSync(productProtoPath);
const {productPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";
const productClient = new productPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

function listProduct(req, res, next) {
  try{
    console.log('is running: listProduct(req, res, next)');
    productClient.listProduct(null, (err, data) => {
      if (err) throw createError.InternalServerError();
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          data
        }
      })
    })
  } catch(error) {
    next(error);
  };
};
function getProduct(req, res, next) {
  try{
    console.log('is running: getProduct(req, res, next)');
    const {id} = req.params;
    console.log(id);
    productClient.getProduct({id}, (err, data) => {
      if (err) throw createError.InternalServerError();
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data : {
          data
        }
      })
    })
  } catch(error){
    next(error);
  }

}

module.exports = {
  listProduct,
  getProduct
}
