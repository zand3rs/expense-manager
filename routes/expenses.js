var express = require('express');
var router = express.Router();

//-- index
router.get('/', function(req, res, next) {
  res.send('expenses');
});

//-- show
router.get('/:id', function(req, res, next) {
  res.send('show expense: ' + req.param('id'));
});

//-- edit
router.get('/:id/edit', function(req, res, next) {
  res.send('edit expense: ' + req.param('id'));
});

//-- create
router.post('/', function(req, res, next) {
  res.send('create expenses');
});

//-- update
router.put('/:id', function(req, res, next) {
  res.send('update expense: ' + req.param('id'));
});

//-- destroy
router.delete('/:id', function(req, res, next) {
  res.send('destroy expense: ' + req.param('id'));
});

module.exports = router;
