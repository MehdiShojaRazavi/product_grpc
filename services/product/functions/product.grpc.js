const {ProductModel} = require("./../models/product.model")
async function listProduct(call, callback) {
    try {
        const products = await ProductModel.find({})
        callback(null, {products})
    } catch (error) {
        callback(error, null)
    }
}
module.exports = {
  listProduct
}