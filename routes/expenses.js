const express = require("express");
const router = express.Router({ mergeParams: true });

const _ = require("lodash");
const Expense = require("../models/expense");

//-- index
router.get("/", function(req, res, next) {
  const options = {
    limit: 10
  };

  const category_id = _.get(req.params, "category_id");
  if (category_id) {
    _.set(options, "where", "category_id=?");
    _.set(options, "vars", [category_id]);
  }

  Expense.find(options, (err, records) => {
    res.json(records);
  });
});

//-- show
router.get("/:id", function(req, res, next) {
  const options = {
    where: "id=?",
    vars: [_.get(req.params, "id")]
  };

  Expense.findOne(options, (err, record) => {
    res.json(record);
  });
});

//-- edit
router.get("/:id/edit", function(req, res, next) {
  const options = {
    where: "id=?",
    vars: [_.get(req.params, "id")]
  };

  Expense.findOne(options, (err, record) => {
    res.json(record);
  });
});

//-- create
router.post("/", function(req, res, next) {
  const attrs = _.omitBy({
    title: _.get(req.body, "title"),
    amount: _.get(req.body, "amount"),
    transaction_date: _.get(req.body, "transaction_date")
  }, _.isNil);

  Expense.create(attrs, (err, record) => {
    res.json(err || record);
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
    amount: _.get(req.body, "amount"),
    transaction_date: _.get(req.body, "transaction_date")
  }, _.isNil);

  Expense.update(attrs, options, (err, records) => {
    res.json(_.first(records));
  });
});

//-- destroy
router.delete("/:id", function(req, res, next) {
  const options = {
    where: "id=?",
    vars: [_.get(req.params, "id")]
  };

  Expense.destroy(options, (err, records) => {
    res.json(_.first(records));
  });
});

module.exports = router;
