const express = require('express')
const router = new express.Router()

const auth = require('../middleware/auth')
const Task = require('../models/task')


// @uri POST /tasks
// @desc create a new task
// @access private
router.post('/tasks', auth, async (req, res) => {
    try {
        // const task = new Task(req.body)
        const task = new Task({
            ...req.body,
            owner: req.user._id
        })
        await task.save()
        res.status(201).send(task)

    } catch (error) {
        res.status(400).send(error)
    }
})

//GET /tasks?completed=true
//GET /tasks?limit=10&skip=0
//GET /tasks?sortBy=createdAt:desc

// @desc get a user's task
// @access private
router.get('/tasks',auth, async (req,res) => {
    try {
        // const tasks = await Task.find({ owner: req.user._id })
        const match = {}
        const sort = {}

        if (req.query.completed) {
            match.completed = req.query.completed === 'true'
        }

        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(':')
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
        }
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (error) {
        res.status(500).send(error)
    }
 })


 // @uri GET /tasks/:id
 // @desc Get a task by id
 // @access private
router.get('/tasks/:id',auth, async (req, res) => {
    const _id = req.params.id
    try {
        // const task = await Task.findById(_id)
        const task = await Task.findOne({ _id, owner: req.user._id })
        if (!task) {
            res.status(404).send()
        }
        res.send(task)

    } catch (error) {
        res.status(500).send(error)
    }
 })


 // @uri PATCH /tasks/:id
 // @desc update a particular task
 // @access private
 router.patch('/tasks/:id',auth, async (req, res) => {
     const updates = Object.keys(req.body)
     const allowedUpdates = ['description', 'completed']
     const isValidoperation = updates.every(update => allowedUpdates.includes(update))

     if (!isValidoperation) {
         return res.status(400).send('Invalid update !')
     }

     try {
         const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        //  const task = Task.findById(req.params.id)
         
        //  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
         if (!task) {
             return res.status(404).send()
         }
         updates.forEach(update => task[update] = req.body[update])
         await task.save()
         res.send(task)
     } catch (error) {
         res.status(400).send(error)
     }
 })


 // @uri DELETE /tasks/:id
 // @desc Delete a particular task
 // @access private
 router.delete('/tasks/:id',auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id })
        // const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        return res.status(400).send()
    }
})

module.exports = router