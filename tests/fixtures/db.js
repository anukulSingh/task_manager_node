const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')


const testUserId = new mongoose.Types.ObjectId()
const testUser = {
    _id: testUserId,
    name: 'Anukul',
    email: 'anukulkumar566@hotmail.com',
    password: "Redhat@34",
    tokens: [{
        token: jwt.sign({_id: testUserId}, process.env.JWT_SECRET)
    }]
}

const setupDatabase = async () => {
    await User.deleteMany() // delete all the users
    await new User(testUser).save() // create the new testUser
}

module.exports = {
    testUser,
    testUserId,
    setupDatabase
}