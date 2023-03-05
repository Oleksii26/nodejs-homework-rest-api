const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: null
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    },
    avatarURL: {
        type: String,
        required: true
    }
}, { versionKey: false })

const joiRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(4).required(),
})

const joiLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(4).required(),
})

const User = model('user', userSchema)

module.exports = {
    User,
    joiRegisterSchema,
    joiLoginSchema
}