const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join("__dirname","public")))
app.set("view engine", "ejs")

app.get("/",function(req,res){
    fs.readdir(`./tasks`, function(err, tasks){
        res.render("index.ejs", {tasks: tasks})
    })
})
app.post("/create",function(req,res){
    fs.writeFile(`./tasks/${req.body.title.split(" ").join("")}.txt`,req.body.details, function(err){
        res.redirect("/")
    })
})
app.get("/tasks/:filename",function(req,res){
    fs.readFile(`./tasks/${req.params.filename}`,"utf-8",function(err, filedata){
        res.render('show.ejs', {filename: req.params.filename, filedata: filedata})
    })
})
app.get("/edit/:filename",function(req,res){
    res.render('edit',{filename: req.params.filename})
})
app.post("/edit",function(req,res){
    fs.rename(`./tasks/${req.body.previous}`, `./tasks/${req.body.new}.txt`, function(err){
        res.redirect("/")
    })
})

app.listen(3000, function(){
    console.log("server running");
    
})