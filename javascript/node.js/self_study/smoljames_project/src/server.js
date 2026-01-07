import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

//Get file path from the url of current module (src)
const __filename = fileURLToPath(import.meta.url)

// Get the directory name from the file path
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
// Tell express to serve all file from /public automatically and  as static asssets/file 
// Any requests for the css files will be resolved to the public directory
// For example, if browser request /styles.css, Express will look it in /public
app.use(express.static(path.join(__dirname, '../public')))


// Serving up the HTML file from the /public directory using directory name 
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


//Routes
app.use('/auth', authRoutes, )

app.listen(PORT, ()=> {
    console.log(`Server has started on port: ${PORT}`)
}) 