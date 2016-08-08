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

router.get('/item', function(req, res, next) {

  res.render('item', { ctx: global.siteDB, active: 0 });
});

router.get('/item/:id', function(req, res, next) {
	if (req.params.id) {
		console.log('product =========>', req.params.id)
	}
  res.render('item', { ctx: global.siteDB, active: req.params.id || 0 });
});


router.get('/list', function(req, res, next) {
  res.render('list', { ctx: global.siteDB });
});

module.exports = router;
