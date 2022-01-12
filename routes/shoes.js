const express = require("express");
const router = express.Router();

const Shoes = require("../models/shoes");

router.post("/", (req, res, next) => {
  const shoes = new Shoes({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId,
  });
  shoes
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  Shoes.findOne({
    _id: req.params.id,
  })
    .then((shoes) => {
      res.status(200).json(shoes);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

router.put("/:id", (req, res, next) => {
  const shoes = new Shoes({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId,
  });
  Shoes.updateOne({ _id: req.params.id }, shoes)
    .then(() => {
      res.status(201).json({
        message: "Shoes updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Shoes.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.get("/" + "", (req, res, next) => {
  Shoes.find()
    .then((shoes) => {
      res.status(200).json(shoes);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = router;
