const User = require("../models/usersModel")
const multer = require("multer")
const sharp = require("sharp")

// @description SINGUP ENDPOINT
// @route POST /api/users/
// @access PUBLIC
const signupController = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).json({ error: "user exist" })
    }
}

// @description LOGIN ENDPOINT
// @route POST /api/users/login
// @access PUBLIC
const loginController = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })

    } catch (error) {
        res.status(400).json({ error: "Unable to login" })
    }
}

// @description LOGOUT ENDPOINT
// @route POST /api/users/logout
// @access PRIVATE
const logoutController = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }

}

// @description GET PROFILE ENDPOINT
// @route GET /api/users/me
// @access PRIVATE
const readProfileController = async (req, res) => {
    res.status(200).json(req.user)
}


// @description UPDATE PROFILE ENDPOINT
// @route PATCH /api/users/me
// @access PRIVATE
const updateProfileController = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdate = ["name", "email", "password"]
    const isValidOperation = updates.every(update => allowedUpdate.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: "invalid updates" })
    }

    try {
        updates.forEach(update => req.user[update] = req.body[update])
        await req.user.save()
        res.status(200).send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }


}

// @description Delete user ENDPOINT
// @route POST /api/users/me
// @access PRIVATE
const deleteProfileController = async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)

    } catch (error) {
        res.status(500).send(req.user)
    }
}


// exploring multer
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

// @description Upload avatar ENDPOINT
// @route POST /api/users/me/avatar
// @access PRIVATE
const uploadAvatarController = async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}


// @description delete avatar ENDPOINT
// @route POST /api/users/me/avatar
// @access PRIVATE
const deleteAvatarController = async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
}

// @description delete avatar ENDPOINT
// @route GET /api/users/:id/avatar
// @access PRIVATE

const readAvatarController = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user || !user.avatar) {
            throw new Error("error")
        }

        res.set('Content-Type', "image/png")
        res.send(user.avatar)
    } catch (error) {
        res.status(404).send()
    }
}


module.exports = {
    signupController,
    loginController,
    logoutController,
    readProfileController,
    updateProfileController,
    deleteProfileController,
    upload,
    uploadAvatarController,
    deleteAvatarController,
    readAvatarController
}