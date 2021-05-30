const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  category: String,
  imageUrl: String,
  outfits: [{type: Schema.Types.ObjectId, ref: "Outfit"}]
});

module.exports = mongoose.model("Item", ItemSchema);