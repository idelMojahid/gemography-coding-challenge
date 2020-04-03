var express = require('express');
const moment = require('moment');
var router = express.Router();
const gitHubService = require('../services/github');

router.get('/trending-languages', async function(req, res, next) {
  const fromDate = moment()
    .subtract(30, 'd')
    .format('YYYY-MM-DD');
  const trendingLanguagesCount = await gitHubService.getTrendingLanguagesCount(
    moment()
      .subtract(30, 'd')
      .format('YYYY-MM-DD')
  );
  return res.json(trendingLanguagesCount);
});

router.get('/trending-repositories/:language', async function(req, res, next) {
  const language = req.params.language;
  const fromDate = moment()
    .subtract(30, 'd')
    .format('YYYY-MM-DD');
  const languageRepository = await gitHubService.getTrendingRepositoriesByLanguage(
    language,
    moment()
      .subtract(30, 'd')
      .format('YYYY-MM-DD')
  );
  return res.json(languageRepository);
});

module.exports = router;
