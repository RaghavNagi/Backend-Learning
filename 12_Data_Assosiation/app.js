const express = require('express')
const app = express()
const userModel = require("./models/userModel")
const postModel = require("./models/postModel") 

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res)=>{
    res.send("hey")
})

app.get("/create",async (req,res) => {
    let user = await userModel.create({
        username: "xyz",
        name: "abc",
        email: "pqr@gmail.com"
    })

    res.send(user)
})

app.get("/post/create",async (req,res) => {
    let post = await postModel.create({
        postData: "hello",
        user: "69dbe805af882a5897fe4194"
    })

    let user = await userModel.findOne({_id: "69dbe805af882a5897fe4194"})
    user.posts.push(post._id)
    await user.save()
    res.send({post, user})
})


app.listen(3000)