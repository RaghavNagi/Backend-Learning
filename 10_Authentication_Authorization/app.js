const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


// to store data from server to browser is cookie
// app.get('/', (req,res)=> {
//     res.cookie("name", "harsh")
//     res.send("done")
// })

// app.get('/read', (req,res)=> {
//     console.log(req.cookies);
//     res.send("done")
// })

app.get('/', (req,res)=>{
    let token = jwt.sign({email: "xyz@example.com"}, "secret")
    res.cookie("token", token)
    res.send("done")
})

app.get('/read', function(req,res){
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data);
    
})

app.listen(3000)