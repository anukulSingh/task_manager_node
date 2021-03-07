const express = require('express')
require('./db/mongoose')

const userRouter = require('./Routers/user')
const taskRouter = require('./Routers/task')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))

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