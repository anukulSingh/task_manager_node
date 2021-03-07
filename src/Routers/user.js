const express = require('express')
const router = new express.Router()
const multer = require('multer')
const sharp = require('sharp')
const auth = require('../middleware/auth')
const User = require('../models/user')



// POST /users
// @desc register a new user
// @access public
router.post('/users', async (req, res) => {

    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token}) 
    } catch (error) {
        res.status(400).send(error)
    }
})

// @uri POST /users/login
// @desc login
// @access private
router.post('/users/login', async(req,res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user , token })
    } catch (error) {
        res.status(400).send() 
    }
   
})

// @uri POST /users/logout
// @desc logout from that particular session
// @access private
router.post('/users/logout', auth, async (req,res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

// @uri POST /users/logoutAll
// @desc logout from all sessions
// @access private
router.post('/users/logoutAll', auth, async (req,res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

// @uri GET /users/me
// @desc get my profile
// @access private
router.get('/users/me',auth, async (req, res) => {
    res.send(req.user)
})

// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)

//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

const upload = multer({
    // dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image'))
        }

        cb(undefined, true)
    }
})

// @uri POST /users/me/avatar
// @desc upload my avatar(in JPG/JPEG/PNG)
// @access private
router.post('/users/me/avatar',auth, upload.single('avatar'), async (req,res) => {
    const Buffer = await sharp(req.file.buffer).resize({ width:250, height:250 }).png().toBuffer()
    req.user.avatar = Buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


// @uri DELETE /users/me/avatar
// @desc delete my avatar
// @access private
router.delete('/users/me/avatar', auth, async (req,res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})


// @uri GET /users/:id/avatar
// @desc get anyone's avatar
// @access public
router.get('/users/:id/avatar', async (req,res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)

    } catch (error) {
        res.status(404).send(error.message || error)
    }
})


// @uri PATCH /users/me
// @desc update fields in my profile
// @access private
router.patch('/users/me', auth, async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password','age']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send('Invalid update !')
    }
    try {
        // const user = await User.findById(req.user._id)
        updates.forEach(update => req.user[update] = req.body[update])
        await req.user.save()

        //it bypasses mongoose schema middleware, no save() is here
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        // if (!user) {
        //    return res.status(404).send()
        // }

        res.send(req.user)
       
    } catch (error) {
        res.status(400).send(error)
    }
})


// @uri DELETE /users/me
// @desc delete that particular user's account
// @access private
router.delete('/users/me',auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (error) {
        return res.status(400).send()
    }
})

module.exports = router