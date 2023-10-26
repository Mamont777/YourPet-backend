const { ctrlWrapper } = require('../../helpers');
const getAllNews = require('./getAllNews');
const getNewsByQuery = require('./getAllNews');

module.exports = {
  getAllNews: ctrlWrapper(getAllNews),
  getNewsByQuery: ctrlWrapper(getNewsByQuery),
};
