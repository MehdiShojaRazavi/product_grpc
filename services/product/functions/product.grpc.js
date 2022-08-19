const {ProductModel} = require("./../models/product.model")
async function listProduct(call, callback) {
    try {
        const products = await ProductModel.find({})
        callback(null, {products})
    } catch (error) {
        callback(error, null)
    }
}
async function getProduct(call, callback) {
    try {
        const {id} = call.request;
        const product = await ProductModel.findOne({id});
        callback(null, product)
    } catch (error) {
        callback(error, null)
    }
}
module.exports = {
  listProduct,
  getProduct
}