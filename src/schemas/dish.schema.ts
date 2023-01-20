import Joi from 'joi';

export const dishSchema = Joi.object(
    {
        name: Joi.string().required(),
        type: Joi.string().required(),
        body: Joi.string().required()
    }
)