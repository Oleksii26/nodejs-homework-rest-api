const express = require('express')

const { auth, validation } = require('../../middlware')
const { joiShema, favoriteShema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controlers')


const router = express.Router()

router.get('/', auth,  ctrl.getAll)

router.get('/:contactId', ctrl.getById)

router.post('/', auth, validation(joiShema), ctrl.createContact)

router.put('/:contactId', validation(joiShema), ctrl.changeById)

router.patch('/:contactId/favorite', validation(favoriteShema), ctrl.updateFavotite)

router.delete('/:contactId', ctrl.deleteById)


module.exports = router
