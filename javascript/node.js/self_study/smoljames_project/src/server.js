import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'



const app = express()
const PORT = process.env.PORT || 5000

//Get file path from the url of current module (src)
const __filename = fileURLToPath(import.meta.url)

// Get the directory name from the file path
const __dirname = dirname(__filename);

// Middleware
// allow you to requested json 
app.use(express.json());
// Tell express to serve all file from /public automatically and  as static asssets/file 
// Any requests for the css files will be resolved to the public directory
// For example, if browser request /styles.css, Express will look it in /public
app.use(express.static(path.join(__dirname, '../public')))


// Serving up the HTML file from the /public directory using directory name 
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})


//Routes
app.use('/auth', authRoutes)
app.use('/todos',authMiddleware, todoRoutes)

app.listen(PORT, ()=> {
    console.log(`Server has started on port: ${PORT}`)
}) 