// http and https

// protocol - internet par kuch bhi karne ke liye rules bnaye gye hai unke dwara jinhone internet bnaya hai, ab un rules ko follow krna jaruri hai, aur vo rules follow ho isliye ye rules aapke operating system ke software mein pre-installed aate hai

// http is also a protocol
// yhi protocols hai ya rules hai jisko follow kare bina aap internet pe naa hi kuch bhej skte ho na he kuch mnga skte ho


const http = require("http")

const server = http.createServer(function(req, res){
    res.end("hello world!")
})
server.listen(3000);