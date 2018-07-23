const express = require("express");
const router = express.Router();

const _ = require("lodash");
const Category = require("../models/category");

//-- index
router.get("/", function(req, res, next) {
  const options = {
    limit: 10
  };

  Category.find(options, (err, records) => {
    res.json(records);
  });
});

//-- show
router.get("/:id", function(req, res, next) {
  const options = {
    where: "id=?",
    vars: [_.get(req.params, "id")]
  };

  Category.findOne(options, (err, record) => {
    res.json(record);
  });
});

//-- edit
router.get("/:id/edit", function(req, res, next) {
  const options = {
    where: "id=?",
    vars: [_.get(req.params, "id")]
  };

  Category.findOne(options, (err, record) => {
    res.json(record);
  });
});

//-- create
router.post("/", function(req, res, next) {
  const attrs = _.omitBy({
    title: _.get(req.body, "title"),
    description: _.get(req.body, "description")
  }, _.isNil);

  Category.create(attrs, (err, record) => {
    res.json(record);
  });
});

//-- update
router.put("/:id", function(req, res, next) {
  const options = {
    where: "id=?",
    vars: [_.get(req.params, "id")]
  };

  const attrs = _.omitBy({
    title: _.get(req.body, "title"),
    description: _.get(req.body, "description")
  }, _.isNil);

  Category.update(attrs, options, (err, records) => {
    res.json(_.first(records));
  });
});

//-- destroy
router.delete("/:id", function(req, res, next) {
  const options = {
    where: "id=?",
    vars: [_.get(req.params, "id")]
  };

  Category.destroy(options, (err, records) => {
    res.json(_.first(records));
  });
});

module.exports = router;
