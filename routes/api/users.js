const express = require('express')

const { auth, upload, ctrlWrapper } = require('../../middlware')
const { users: ctrl } = require('../../controlers')

const router = express.Router()

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))
router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar))
module.exports = router