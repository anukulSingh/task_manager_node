require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5fa26036e73b0706a0226fbb', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })

}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})