const fs = require("fs")

// writefile
// appendfile
// copyfile
// rename
// unlink

// fs.writeFile("hey.txt", "created this file using writeFile method", function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })


// fs.appendFile("hey.txt", "using append function", function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })


// fs.rename("hey.txt","hello.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })


// fs.copyFile("hello.txt","./copy/copy.txt",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })


// fs.unlink("hello.txt", function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");      
//     }
// })


// fs.rmdir("./copy", {recursive: true},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done");
//     }
// })