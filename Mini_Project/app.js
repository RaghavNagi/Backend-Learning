const express = require('express')
const app = express()

const Path = require('path')
const userModel = require('./model/user')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(Path.join(__dirname,'public')))
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.render('index');
})

app.post("/register", (req,res)=>{
    
})


app.listen(3000)