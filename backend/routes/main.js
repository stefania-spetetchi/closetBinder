const express = require("../node_modules/express");
const router = express.Router();
const faker = require("faker");
const Item = require("../models/item");
const Outfit = require("../models/outfit");

router.get("/items", (req, res, next) => {
  Item.find((error, items) => {
    res.send(items);
  });
});

// router.get("/items", (req, res, next) => {
//   const perPage = 9;
//   const page = req.query.page || 1;
//   Item
//     .find()
//     .skip(perPage * page - perPage)
//     .limit(perPage)
//     .exec((err, items) => {
//       Item.count().exec((err, count) => {
//         if (err) return next(err);
//         res.send(items);
//       });
//     });
// });

router.get("/generate-fake-data", (req, res, next) => {
  for (let i = 0; i < 8; i++) {
    let item = new Item();
    item.category = faker.commerce.department();
    item.imageUrl = "https://lp.stories.com/app005prod?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B350%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&set=key%5Bresolve.quality%5D,value%5B90%5D&set=ImageVersion%5B1%5D,origin%5Bdam%5D,source%5B/64/da/64da0420cc6c86cd5de505e40441e97cbf69a882.jpg%5D,type%5BDESCRIPTIVESTILLLIFE%5D&call=url%5Bfile:/product/dynamic.chain%5D";
    item.save((err) => {
      if (err) throw err;
    });
  }
  res.end();
});


module.exports = router;