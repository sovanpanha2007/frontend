import express from 'express'
import bcrypt from  'bcryptjs'
import jwt from 'jsonwebtoken'

const router = express.Router();

// register a new user endpoint  auth/register
router.post('/register', async (req,res)=> {
    const {username, password} = req.body;
    // save the username and irreversibly encrypted password
    // save (hfahfhfhafhahgmail.com) and | akkdhfddjhffd.fhdhd.weew.df

    //encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8);
    // save the new user and hashed password to the db
    // when interact with database we use 'try'
    try {
        // Insert a user to the database
        // First tell what entities to insert with blank value
        // "run" to insert value
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })


        // add default todo for user
        const defaultTodo = `Hello :) Add your first todo!`
        await prisma.todo.create({
            data: {
                task: defaultTodo,
                userId: user.id
            }
        })

        // create a token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503);
    }

    console.log(hashedPassword);
})

router.post('/login', async (req,res)=> {
    // we get the user email and we look up the password assoicated with that 
    // email in the database
    // but we get it back and see it's encrypted, which mean that we cannot
    // compare it to the one user just trying to login
    // so what we can do, is agian, to encrypt the password the user just entered

    const {username, password} = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        if(!user) {
            return res.status(404).send({message: "User not found"})
        }
        // Same as username
        const passwordIsValid = bcrypt.compareSync(password, user.password)
        if(!passwordIsValid) {return res.status(404).send({message: "Invalid password"})}
        console.log(user)
        //then we have a successful authentication
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({token});

    } catch (err) {
        console.log(err.message);
        res.sendStatus(503);
    }
})

export default router
