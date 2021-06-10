const express = require("../node_modules/express");
const router = express.Router();
const faker = require("faker");
const Item = require("../models/item");
const Outfit = require("../models/outfit");
require('dotenv').config();
const cloudinary = require("cloudinary");
const formData = require('express-form-data');
const cors = require('cors');
const app = express();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

app.use(cors());

router.get("/items", (req, res, next) => {
  Item.find((error, items) => {
    res.send(items);
  });
});

router.get("/items/:item", (req, res, next) => {
  Item.findById(req.params.item)
    .then(itemFound => {
      if (!itemFound) { return req.status(403).end();}
      return res.status(200).json(itemFound);
    })
    .catch((err) => next(err))
});

router.post("/items", (req, res) => {
  Item.create(req.body, function(err, item) {
    if (err) {
      return res.status(401);
    } 
    res.status(200).json(item);
  })
});


// router.get("/generate-fake-data", (req, res, next) => {
//   for (let i = 0; i < 8; i++) {
//     let item = new Item();
//     item.category = faker.commerce.department();
//     item.imageUrl = "https://lp.stories.com/app005prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/64/da/64da0420cc6c86cd5de505e40441e97cbf69a882.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D";
//     item.save((err) => {
//       if (err) throw err;
//     });
//   }
//   res.end();
// });


module.exports = router;