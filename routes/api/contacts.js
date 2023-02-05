const express = require('express')

const { validation } = require('../../middlware')
const { joiShema, favoriteShema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controlers')


const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:contactId', ctrl.getById)

router.post('/', validation(joiShema), ctrl.createContact)

router.put('/:contactId', validation(joiShema), ctrl.changeById)

router.patch('/:contactId/favorite', validation(favoriteShema), ctrl.updateFavotite)

router.delete('/:contactId', ctrl.deleteById)


module.exports = router
