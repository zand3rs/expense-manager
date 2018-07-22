const express = require("express");
const router = express.Router();

const _ = require("lodash");
const Category = require("../models/category");

//-- index
router.get("/", function(req, res, next) {
  Category.find({}, (err, records) => {
    console.log(err, records);
  });
  res.send("categories");
});

//-- show
router.get("/:id", function(req, res, next) {
  res.send("show category: " + req.param("id"));
});

//-- edit
router.get("/:id/edit", function(req, res, next) {
  res.send("edit category: " + req.param("id"));
});

//-- create
router.post("/", function(req, res, next) {
  res.send("create categories");
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
