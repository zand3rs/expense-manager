const express = require("express");
const router = express.Router();

const _ = require("lodash");
const Category = require("../models/category");

//-- index
router.get("/", function(req, res, next) {
  Category.find({limit: "10"}, (err, records) => {
    res.json(records);
  });
});

//-- show
router.get("/:id", function(req, res, next) {
  Category.findOne({where: "id=?", vars: [req.param("id")]}, (err, record) => {
    res.json(record);
  });
});

//-- edit
router.get("/:id/edit", function(req, res, next) {
  res.send("edit category: " + req.param("id"));
});

//-- create
router.post("/", function(req, res, next) {
  const attrs = {
    title: req.param("title"),
    description: req.param("description")
  };

  Category.create(attrs, (err, record) => {
    res.json(record);
  });
});

//-- update
router.put("/:id", function(req, res, next) {
  res.send("update category: " + req.param("id"));
});

//-- destroy
router.delete("/:id", function(req, res, next) {
  res.send("destroy category: " + req.param("id"));
});

module.exports = router;
