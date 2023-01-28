const { Contact } = require('../../models')

const getAll = async (req, res, next) => {

    try {
        const contacts = await Contact.find({})
        res.json({
            status: 'succsess',
            code: 200,
            result: contacts
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Server error'
        })
    }
}

module.exports = getAll
