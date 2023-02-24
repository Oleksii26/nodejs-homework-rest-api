const { Contact } = require('../../models')

const getAll = async (req, res, next) => {

    try {
        const { _id } = req.user
        const { page = 1, limit = 10 } = req.query
        const skip = (page - 1) * limit
        const contacts = await Contact.find({ owner: _id }, "", { skip, limit: Number(limit) }).populate('owner', '_id name email')
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
