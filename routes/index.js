var express = require('express');
var router = express.Router();
var githubRouter = require('./github');

router.get('/', function(req, res, next) {
  return res.json({
    project: 'gemography-coding-challenge'
  });
});

router.use('/github', githubRouter);

/** custom 404 error */
router.use(function(req, res, next) {
  res.status(404);
  return res.send({
    error: 'Not found'
  });
});

module.exports = router;
