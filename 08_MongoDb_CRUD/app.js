const express = require('express')
const app = express()

const userModel = require("./usermodel.js")

app.get("/", (req,res) => {
    res.send("hey")
})

app.get("/create",async (req,res) => {

    const user = await userModel.create({
        name,
        username,
        email
    })
})

app.listen(3000)