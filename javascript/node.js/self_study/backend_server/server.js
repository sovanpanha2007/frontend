
/*SERVER*/
// the address of this server connected to the netwrork is:
// url-> http://localhost:3000
// IP -> 127.0.0.1
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    // This is endpoint number1
    console.log('Yay i hit the first endpoint', req.method);
    res.sendStatus(202);
})

app.listen(PORT, () => {
    console.log(`The server has started on: ${PORT}`);
});
