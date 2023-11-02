const { HttpError } = require('../../helpers');
const { New } = require('../../models/new');

const getAllNews = async (req, res) => {
  const { page = 1, limit = 9 } = req.query;
  const skip = (page - 1) * limit;
  const result = await New.find({}, '', { skip, limit: Number(limit) }).sort({
    date: -1,
  });

  if (!result) {
    throw HttpError(400, 'Not found news');
  }

  const totalCount = await New.count();

  res.status(200).json({
    result,
    page: Number(page),
    hits: Number(limit),
    totalCount,
  });
};

const getNewsByQuery = async (req, res) => {
  const { page = 1, limit = 9, query } = req.query;
  const skip = (page - 1) * limit;
  const searchWords = query.trim().split(' ');
  const regExpressions = searchWords.map(word => new RegExp(word, 'i'));
  const result = await New.find(
    {
      $and: [
        {
          $or: regExpressions.map(expression => ({
            title: { $regex: expression },
          })),
        },
      ],
    },
    'imgUrl title date url text',
    { skip, limit: Number(limit) }
  ).sort({
    date: -1,
  });

  if (!result || result.length === 0) {
    throw HttpError(400, 'No match for your search');
  }

  const totalCount = await New.countDocuments({
    $and: [
      {
        $or: regExpressions.map(expression => ({
          title: { $regex: expression },
        })),
      },
    ],
  });

  res.status(200).json({
    result,
    page: Number(page),
    hits: Number(limit),
    totalCount,
  });
};

module.exports = getAllNews;
module.exports = getNewsByQuery;
