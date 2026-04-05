const express = require('express')
const app = express()

// app.get(Router, requestHandler). - > requestHandler is also a middleware
app.get("/",function(req,res){
    res.send("Hello World")
})

app.listen(3000)