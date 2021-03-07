const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Task = require('./task')

const userSchema = new mongoose.Schema({


name: {
    type: String,
    required: true,
    trim: true
},
email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
        if(!validator.isEmail(value)) {
            throw new Error('Invalid email')
        }
    }
},
password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
        if(value.toLowerCase().includes('password')) {
            throw new Error('Password can not contain "password"')
        }
    }
},

age: {
    type: Number,
    default: 0,
    validate(value) {
        if(value < 0) {
            throw new Error('Age invalid!')
        }
    }
},


tokens: [{
    token: {
        type: String,
        required: true
        }
    }], 
avatar: {
    type: Buffer
    },
} , {
    timestamps: true
}
)

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: "_id",
    foreignField: "owner"
})

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

// generate token for that user after registering or logging in
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'spiderman') 

    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

// find user in db, provided the email and password
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Invalid credentials !')
    }

    const isMatch = bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Invalid credentials !')
    }
    return user
}

// check if user's password is modified, if so then hash it before saving to db
userSchema.pre('save', async function(next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// if user is removed, all their tasks are removed
userSchema.pre('remove', async function(next) {
    const user = this
    await Task.deleteMany({ owner: user._id })
    next()
})
const User = mongoose.model('User', userSchema)

module.exports = User
