const { Contact } = require('../../models')


const updateFavorite = async (req, res, next) => {
    try {

        const { contactId } = req.params
        const { favorite } = req.body
        const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
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

module.exports = updateFavorite