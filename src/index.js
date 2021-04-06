const app = require('./app')
const port = process.env.PORT

app.listen(port, () => console.log(`Server running on PORT: ${PORT}`))

// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })
// app.post('/upload', upload.single('upload'), (req,res) =>{
//     res.send()
// })
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     const user = await User.findById('5faf6fd3f0385c4ec403eef6')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks);
// }
// main()