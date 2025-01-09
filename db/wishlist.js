const mongoose = require("mongoose");
const wishListSchema = new mongoose.Schema({
  userId: { type: Schema.Type.ObjectId, ref: "users" },
  productsId: Array(string),
});

const WishList = mongoose.model("wishlists", wishListSchema);
module.exports = WishList;
