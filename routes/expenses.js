var express = require('express');
var router = express.Router();

/* GET expenses listing. */
router.get('/', function(req, res, next) {
  res.send('expenses');
});

module.exports = router;
