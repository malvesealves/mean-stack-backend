const Product = require("./../db/product");

async function getProducts() {
  let products = await Product.find();
  return products.map((c) => c.toObject());
}

async function getProductById(id) {
  let product = await Product.findById(id);
  return product ? product.toObject() : {};
}

async function addProduct(model) {
  let product = new Product({
    name: model.name,
  });

  await product.save();
  return product ? product.toObject() : {};
}

async function updateProduct(id, model) {
  await Product.findOneAndUpdate({ _id: id }, model);
  return;
}

async function deleteProduct(id) {
  await Product.findByIdAndDelete(id);
  return;
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
};
