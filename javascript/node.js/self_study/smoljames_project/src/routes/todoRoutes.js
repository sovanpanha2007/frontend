import express from 'express'
import db from '../db.js'

const router = express.Router();

// Get all todos fro logged-in user
router.get('/', (req,res)=>{

})

// Create a new todo
router.post('/', (req,res)=>{

})

// Update a todos 
router.put('/:id', (req,res)=> {})

// Delete a todoes
router.delete('/:id', (req, res) => {})

export default router