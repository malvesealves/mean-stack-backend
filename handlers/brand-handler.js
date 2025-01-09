const Brand = require("./../db/brand");

async function getBrands() {
  let brands = await Brand.find();
  return brands.map((c) => c.toObject());
}

async function getBrandById(id) {
  let brand = await Brand.findById(id);
  return brand ? brand.toObject() : {};
}

async function addBrand(model) {
  let brand = new Brand({
    name: model.name,
  });

  await brand.save();
  return brand ? brand.toObject() : {};
}

async function updateBrand(id, model) {
  await Brand.findOneAndUpdate({ _id: id }, model);
  return;
}

async function deleteBrand(id) {
  await Brand.findByIdAndDelete(id);
  return;
}

module.exports = {
  getBrands,
  getBrandById,
  addBrand,
  updateBrand,
  deleteBrand,
};
