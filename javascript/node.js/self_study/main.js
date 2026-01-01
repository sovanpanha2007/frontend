import fs from 'fs'
fs.readFile('file.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})