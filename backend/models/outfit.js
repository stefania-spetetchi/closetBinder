const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
  items: [{type: Schema.Types.ObjectId, ref: "Item"}]
});

module.exports = mongoose.model("Outfit", OutfitSchema);
