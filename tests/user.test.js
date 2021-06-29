const request = require('supertest')
const app = require('../src/app')


const User = require('../src/models/user')
const { response } = require('express')
const { testUser, testUserId, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    const response = await request(app)
    .post('/users')
    .send({
        name: 'ANdrew',
        email: "andrew23@gmail.com",
        password: "mypass24!"
    })
    .expect(201)

    // Assert that database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about te response
    expect(response.body).toMatchObject({
        user: {
            name: 'ANdrew',
            email: "andrew23@gmail.com"
        },
        token: user.tokens[0].token
    })

    // check if password is hashed in the database
    expect(user.password).not.toBe("mypass24!")
}) 

// test('Should login existing user', async () => {
//     await request(app)
//         .post('/users/login')
//         .send({
//             email: testUser.email,
//             password: testUser.password 
//         })
//         .expect(200)

//     const user = await User.findById(testUserId)
//     expect(response.body.token).toBe(user.tokens[1].token)


// })

// test('Should not login nonexistent user', async () => {
//     await request(app)
//         .post('/users/login')
//         .send({
//             email: testUser.email,
//             password: 'thisisnotmypassy'
//          })
//         .expect(400)
// })

test('Should get profile of user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send()
        .expect(200)

})

test('Should not delete profile for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(testUserId);
    expect(user.avatar).toEqual(expect.any(Buffer)) // toBe uses === for comparing, not good for objs
})

test('Should update user credentials', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            age: 23
        })
        .expect(200)

    const user = await User.findById(testUserId);
    expect(user.age).toEqual(23);
})

test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${testUser.tokens[0].token}`)
        .send({
            location: 'Hululu'
        })
        .expect(400)
})
