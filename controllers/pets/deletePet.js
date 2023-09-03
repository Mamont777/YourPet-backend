const { HttpError } = require('../../helpers');
const { Pet } = require('../../models/pet');

const deletePet = async (req, res) => {
  const { _id: userId } = req.user;
  const { petId } = req.params;
  // console.log('petID', petId);

  if (!petId) {
    throw HttpError(400, 'Bad request');
  }

  // Удаляем питомца по _owner и petId
  const deletedPet = await Pet.findOneAndDelete({
    _id: petId,
    _owner: userId,
  });

  if (!deletedPet) {
    throw HttpError(404, 'Pet not found');
  }

  res.status(200).json({
    code: 200,
    id: petId,
    message: 'Pet deleted successfully',
  });
};

module.exports = deletePet;
