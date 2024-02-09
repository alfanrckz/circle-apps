import joi = require("joi");

export const createThreadSchema = joi.object({
  content: joi.string().required(),
  image: joi.string().optional(),
  user: joi.number().required(),
});
export const updateThreadSchema = joi.object({
  content: joi.string().required(),
  image: joi.string().optional(),
});
