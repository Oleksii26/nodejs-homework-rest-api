const { Schema, model, SchemaType } = require('mongoose')
const Joi = require('joi')

const contactShema = Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact']
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    }
})


const joiShema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
})

const favoriteShema = Joi.object({
    favorite: Joi.bool().required()
})

const Contact = model('contact', contactShema)

module.exports = {
    Contact,
    joiShema,
    favoriteShema
}