const {ProductModel} = require("./../models/product.model")
async function listProduct(call, callback) {
    try {
        console.log('is running: listProduct(call, callback)')
        const products = await ProductModel.find({})
        console.log(products)
        callback(null, {products})
    } catch (error) {
        callback(error, null)
    }
}
async function getProduct(call, callback) {
    try {
        console.log('is running: getProduct(call, callback)')
        const {id} = call.request;
        console.log('id:', id);
        const product = await ProductModel.findOne({id});
        console.log(product);
        callback(null, product)
    } catch (error) {
        callback(error, null)
    }
}
module.exports = {
  listProduct,
  getProduct
}