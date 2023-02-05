const express = require('express')

const { validation, auth, ctrlWrapper } = require('../../middlware')
const { auth: ctrl } = require('../../controlers')
const {joiLoginSchema, joiRegisterSchema} = require('../../models/user')

const router = express.Router()

router.post('/signup', validation(joiRegisterSchema), ctrl.register)
router.post('/login', validation(joiLoginSchema), ctrl.login)
router.get('/logout', auth, ctrlWrapper(ctrl.logout))

module.exports = router 