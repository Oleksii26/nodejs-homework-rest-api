const { Contact } = require('../../models')

const deleteById = async (req, res, next) => {
    try {
      const { contactId } = req.params
      const result = await Contact.findByIdAndRemove(contactId)
      if (!result) {
        throw createError(404, `Product with id ${contactId} not found`)
      }
      res.json({
        status: 'Success',
        code: 200,
        message: 'Contact delete',
        data: {
          result
        }
      })
    } catch (error) {
      next(error)
    }
  }

  module.exports = deleteById