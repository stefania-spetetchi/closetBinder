require('dotenv').config();
const express = require("../node_modules/express");
const router = express.Router();
const Item = require("../models/item");
const Outfit = require("../models/outfit");
const cloudinary = require('../utils/cloudinary');
const upload = require("../utils/multer");
const cors = require('cors');
const url = require("url");
var querystring = require('querystring');
var bodyParser = require('body-parser');
const app = express();

app.use(cors());
router.use(bodyParser.json());

router.get("/items", (req, res, next) => {
  let query = {};
  if (req.query.category) query['category'] = req.query.category;
  Item.find(query)
    .exec((err, items) => {
      if (err) return next(err);
        res.send(items);
    })
});

router.get("/items/:item", (req, res, next) => {
  Item.findById(req.params.item)
    .then(itemFound => {
      if (!itemFound) { return req.status(403).end();}
      return res.status(200).json(itemFound);
    })
    .catch((err) => next(err))
});
router.get("/items/:category", (req, res, next) => {
  Item.findById(req.params.item)
    .then(itemFound => {
      if (!itemFound) { return req.status(403).end();}
      return res.status(200).json(itemFound);
    })
    .catch((err) => next(err))
});

router.post("/items", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary?.uploader.upload(req.file.path);
    let item = new Item({
      outfits: [],
      category: req.body.category,
      cloudinary_id: result.public_id,
      imageUrl: result.url,
    });
    await item.save();
    res.json(item);
  } catch (err) {
    console.log(err);
  }}); 
router.delete("/items/:item", (req, res) => {
  Item.findByIdAndRemove(req.params.item)
    .then(itemFound => {
      if (!itemFound) { return res.status(404).end(); }
      else if (itemFound) {
      return res.status(200).json(itemFound);
    }
    })
    .catch(err => next(err))
});
router.post("/outfits", async (req, res) => {
  try {
  const newOutfit = new Outfit({
    outfitCategory: req.body.outfitCategory.outfitCategory,
    items: req.body.items
  });
  await newOutfit.save(newOutfit)
    res.json(newOutfit);
  } catch (err) {
    console.log(err);
  }
});

router.get("/outfits", (req, res, next) => {
  Outfit
    .find((err, outfits) => {
    res.send(outfits); 
  })
    .populate("items")
    .then(outfitsFound => {
    if (!outfitsFound) { return res.status(404).end(); }
    else if (outfitsFound) {
    return res.status(200).json(outfitsFound);
    }})
    .catch(err => next(err))
});

router.put("/outfits/:outfit", (req, res) => {
  Outfit.findById(req.params.outfit) 
    .then(outfitFound => {
      if (!outfitFound) { return res.status(404).end(); }
      else if (outfitFound) {
        outfitFound.name = req.body.name ? req.body.name : outfitFound.name;
        outfitFound.description = req.body.description;
        outfitFound.price = req.body.price;
        outfitFound.dateToWear = outfitFound.dateToWear ? [...outfitFound.dateToWear, req.body.dateToWear] : [req.body.dateToWear];
        outfitFound.outfitCategory = req.body.category ? req.body.category : outfitFound.outfitCategory;
        outfitFound.items = outfitFound.items;
      }
      outfitFound.save();
        res.status(200);  
    });
}); 

router.delete("/outfits/:outfit", (req, res) => {
  Outfit.findByIdAndRemove(req.params.outfit)
    .then(outfitFound => {
      if (!outfitFound) { return res.status(404).end(); }
      else if (outfitFound) {
      return res.status(200).json(outfitFound);
    }})
    .catch(err => next(err))
});

module.exports = router;