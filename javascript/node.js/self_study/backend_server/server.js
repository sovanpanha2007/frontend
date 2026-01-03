
/*SERVER*/
// the address of this server connected to the netwrork is:
// url-> http://localhost:3000
// IP -> 127.0.0.1
const express = require('express');
const app = express();
const PORT = 3000;
const data = ['james'];

//Middleware (tell server to expect json data req)
app.use(express.json());
//Type -1 : Website endpoint 
// (This endpoint are for sending back visual content and typically come with url in a browser)
app.get('/', (req,res) => {
    res.send(`
            <body style="background:pink">
            <h1>Homepage</h1>
            <a href="/dashboard">Dashboard</a>
            </body>
        `);
})
app.get('/dashboard', (req,res)=> {
    res.send(`
        <body style="background:cyan">
        <h1>DashBoard</h1>
        <a href="/">Homepage</a>
        </body>
        `);
})

//Type -2 : API endpoint 
// (This endpoint are responsed wiht non-visual content)
app.get('/api/data', (req,res)=>{
    console.log("This is for api endpoint");
    res.send(data);
})
//CRUD-method create-post read-get update-put and delete-delete
// Create-post (user to sign up into your website/ sending network request to repsonse)
app.post('/api/data', (req,res)=>{
    const newEntry = req.body;
    console.log(newEntry); 
    data.push(newEntry.name); 
    res.sendStatus(201);

})

// Delete-delete
app.delete('/api/data', (req,res)=>{
    data.pop();
    res.sendStatus(204);
})



app.listen(PORT, () => {
    console.log(`The server has started on: ${PORT}`);
});
