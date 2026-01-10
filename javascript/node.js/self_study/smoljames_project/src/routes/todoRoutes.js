import express from 'express'
import db from '../db.js'

const router = express.Router()

// Get all todos for the authenticated user
router.get('/', async (req, res) => {
    try {
    const todos = await prisma.todo.findMany({
        where: {
            userId: req.userId
        }
    })
        res.json(todos)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

// Create a new todo
router.post('/', async (req, res) => {
    const { task } = req.body

    if (!task) {
        return res.status(400).json({ message: "Task is required" })
    }

    try {
    const todo = await prisma.todo.create({
        data: {
            task,
            userId: req.userId
        }
    })
        res.json({ id: result.lastInsertRowid, task, completed: 0, user_id: req.userId })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

// Update a todo
router.put('/:id', async (req, res) => {
    const { task, completed } = req.body
    const { id } = req.params

    try {
    const updatedTodo = await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: {
            completed: !!completed
        }
    })
        res.json({ id, task, completed, user_id: req.userId })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

// Delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })
})

export default router