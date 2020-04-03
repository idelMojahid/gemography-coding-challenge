const axios = require('axios').default;
const moment = require('moment');
const _ = require('lodash');

const getTrendingRepositories = async (date, count) => {
  return (
    await axios.get(
      `https://api.github.com/search/repositories?q=created:>${date}&per_page=${count}&sort=stars&order=desc`
    )
  ).data.items;
};

const getTrendingLanguagesCount = async (
  date = moment()
    .subtract(30, 'd')
    .format('YYYY-MM-DD'),
  count = 100
) => {
  const trendingRepositories = await getTrendingRepositories(date, count);
  return _.countBy(trendingRepositories, 'language');
};

const getTrendingRepositoriesByLanguage = async (
  language,
  date = moment()
    .subtract(30, 'd')
    .format('YYYY-MM-DD'),
  count = 100
) => {
  const trendingRepositories = await getTrendingRepositories(date, count);
  const trendingRepositoriesByLanguague = _.groupBy(
    trendingRepositories,
    'language'
  );
  const repositories = _.get(trendingRepositoriesByLanguague, language);
  const repositoriesCount = _.isEmpty(repositories) ? 0 : repositories.length;
  return {
    repositoriesCount,
    repositories
  };
};

module.exports = {
  getTrendingLanguagesCount,
  getTrendingRepositoriesByLanguage
};
