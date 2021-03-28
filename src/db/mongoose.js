const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
 

// const me = new User({
//     name: 'anku    ',
//     email: 'ANKU123@GMAIL.COM',
//     password: 'Password123'
// })

// me.save()
// .then(() => console.log(me))
// .catch(error => console.log('Error!', error))



// const task = new Task({
//     description: '    Eat lunch   ',
// })

// task.save()
//     .then(() => console.log(task))
//     .catch(err => console.log(err))