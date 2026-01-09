import express from 'express'
import db from '../db.js'

const router = express.Router()

// Get all todos for the authenticated user
router.get('/', (req, res) => {
    try {
        const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?')
        const todos = getTodos.all(req.userId)
        res.json(todos)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

// Create a new todo
router.post('/', (req, res) => {
    const { task } = req.body

    if (!task) {
        return res.status(400).json({ message: "Task is required" })
    }

    try {
        const insertTodo = db.prepare('INSERT INTO todos (user_id, task) VALUES (?, ?)')
        const result = insertTodo.run(req.userId, task)
        res.json({ id: result.lastInsertRowid, task, completed: 0, user_id: req.userId })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

// Update a todo
router.put('/:id', (req, res) => {
    const { task, completed } = req.body
    const { id } = req.params

    try {
        const updateTodo = db.prepare('UPDATE todos SET task = ?, completed = ? WHERE id = ? AND user_id = ?')
        updateTodo.run(task, completed, id, req.userId)
        res.json({ id, task, completed, user_id: req.userId })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

// Delete a todo
router.delete('/:id', (req, res) => {
    const { id } = req.params

    try {
        const deleteTodo = db.prepare('DELETE FROM todos WHERE id = ? AND user_id = ?')
        deleteTodo.run(id, req.userId)
        res.sendStatus(204)
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

export default router