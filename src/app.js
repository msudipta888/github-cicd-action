const express = require('express')
const app = express()

app.get('/testnode',(req,res)=>{
    res.status(200).send('Test node working be so good')
});

module.exports=app