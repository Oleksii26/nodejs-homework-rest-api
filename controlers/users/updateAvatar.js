const { User } = require('../../models')
const path = require('path')
const fs = require('fs/promises')
const jimp = require('jimp')

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file
    const {id: id} = req.user
    const imageName = `${id}_${originalname}`
    try {
        const image = await jimp.read(req.file.path)
        await image.resize(256, 256)
       await image.writeAsync(req.file.path)
        const resultUpload = path.join(avatarDir, imageName)
        await fs.rename(tempUpload, resultUpload)
        const avatarURL = path.join('public', 'avatars', imageName )
        await User.findByIdAndUpdate(req.user._id, {avatarURL})
        res.json({avatarURL})
    } catch (error) {
        await fs.unlink(tempUpload)
        throw error
    }
}

module.exports = updateAvatar