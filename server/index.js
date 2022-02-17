const express = require('express')
const app = express()
const port=3000

app
    .get('/',(req, res) =>{
  res.send('You are on my homepage');
    })
    .get('/about',(req, res) =>{
      res.send('You are on my homepage');
        })

        app.listen(port,()=>{
console.log(`Example app listening at http://${app}:${port}`)
        })