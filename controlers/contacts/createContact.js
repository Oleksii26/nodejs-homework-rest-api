const { Contact } = require('../../models')

const createContact = async (req, res, next) => {
    try {
        const result = await Contact.create(req.body)
        res.status(201).json({
            status: 'succsess',
            code: 201,
            data: {
                result
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = createContact