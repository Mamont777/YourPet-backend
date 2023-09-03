const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { hendleMongooseError } = require('../helpers');
const regexp = require('../utils/regexp');

const categoriesListCode = ['sell', 'in-good-hands', 'lost-found'];

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      required: [true, 'Sex is required'],
    },
    category: {
      title: {
        type: String,
        required: [true, "Category's title is required"],
      },
      code: {
        type: String,
        enum: categoriesListCode,
        required: [true, "Category's code is required"],
      },
    },
    petURL: {
      type: String,
    },
    location: {
      type: String,
      required: [true, 'location is required'],
    },
    price: {
      type: Number,
      required: function () {
        return this.category.code === 'sell';
      },
    },
    birthday: {
      type: String,
      match: regexp.birthday,
      required: [true, 'birthday is required'],
    },
    type: {
      type: String,
      required: [true, 'type is required'],
    },
    describe: {
      type: String,
      maxlength: 120,
    },
    _owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

noticeSchema.post('save', hendleMongooseError);

const addNoticeSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  sex: Joi.string().allow('male', 'female').required(),
  category: Joi.string()
    .allow('sell', 'in-good-hands', 'lost-found')
    .required(),
  petURL: Joi.string(),
  favorite: Joi.boolean(),
  location: Joi.string().required(),
  price: Joi.number().when('category', {
    is: Joi.string().valid('sell'),
    then: Joi.number().required().messages({
      "ani.required": "Price is required for the 'sell' category",
      "boolean.base": "Price must be a number",
    }),
    otherwise: Joi.number().forbidden(),
  }),
  birthday: Joi.string().pattern(regexp.birthday).required(),
  type: Joi.string().required(),
  describe: Joi.string(),
});

const schemas = {
  addNoticeSchema,
};

const Notice = model('notice', noticeSchema);

module.exports = {
  schemas,
  Notice,
};
