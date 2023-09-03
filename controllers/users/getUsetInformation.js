const { HttpError } = require('../../helpers');
const { Pet } = require('../../models/pet');

const getUserInformation = async (req, res) => {
  const { user } = req;

  if (!user) {
    throw HttpError(401, 'Not authorized');
  }

  const { name, email, birthday, phone, city, avatarURL } = user;

  res.status(200).json({
    code: 200,
    data: {
      userInfo: {
        avatarURL,
        name,
        email,
        birthday,
        phone,
        city,
      },
    },
  });
};

module.exports = getUserInformation;
