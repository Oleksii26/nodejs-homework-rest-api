const { Conflict } = require('http-errors')
const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const gravatar = require('gravatar')
const { v4: uuidv4 } = require('uuid');

const { sendEmail } = require('../../helpers')

const register = async (req, res) => {
    const { name, email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
        throw new Conflict(`User with ${email} already exist`)
    }
    const verificationToken = uuidv4()
    const avatarURL = gravatar.url(email)
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const result = await User.create({ name, email, password: hashPassword, avatarURL, verificationToken })

    const mail = {
        to: email,
        subject: 'Підтвердження електронної адреси',
        html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Натисніть для підтвердження електронної адреси</a>`
    }
    await sendEmail(mail)

    res.status(201).json({
        status: 'success',
        code: 201,
        data: {
            user: {
                name,
                email,
                avatarURL,
                verificationToken
            }
        }
    })
}

module.exports = register
