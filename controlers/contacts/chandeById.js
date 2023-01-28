const { Contact } = require('../../models')


const changeById = async (req, res, next) => {
    try {
        
        const { contactId } = req.params
        const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true})
        if (!result) {
            throw createError(404, `Product with id ${contactId} not found`)
        }
        res.json({
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

module.exports = changeById
