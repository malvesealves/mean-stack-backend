const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  userId: { type: Schema.Type.ObjectId, ref: "users" },
  productsId: Array(string),
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
