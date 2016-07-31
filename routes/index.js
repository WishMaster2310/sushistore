var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { ctx: global.siteDB });
});
router.get('/actions', function(req, res, next) {
  res.render('actions', { ctx: global.siteDB });
});
router.get('/article', function(req, res, next) {
  res.render('article', { ctx: global.siteDB });
});

router.get('/list', function(req, res, next) {
  res.render('list', { ctx: global.siteDB });
});

module.exports = router;
