// Fundamentals of JS
// arrays and objects
// functions return
// async js coding

let arr = [1, 2, 3, 4];
// foreach map filter find indexOf

// arr.forEach(function(val){
//     console.log(val + " hello")
// })


// let arrNew = arr.map(function(val){
//     return val + 12
// })
// // Map is used to create new array

// console.log(arrNew)



// let newArr = arr.filter(function(val){
//     if (val > 3){ return true }
// })
// console.log(newArr)



// let ans = arr.find(function(val){
//     if (val === 2){
//         return val
//     }
// })
// // return first value it finds even if there are multiple values
// console.log(ans)



// let ans = arr.indexOf(12)
// console.log(ans)
// // -1
// let ans = arr.indexOf(2)
// console.log(ans)
// // 1



// // Objects
{}

// Object is a key value pair pattern between curly brackets and : (colon) between them
// and value should always be in string if it's not in string format it is considered as variable

// var obj = {
//     name: "Xyz"
// }
// console.log(obj.name)
// console.log(obj['name'])

// // We can also change the values in the object
// obj.name = "abc"
// console.log(obj.name);
// // abc

// // if we don't want to change the values we can use 'freeze' function
// Object.freeze(obj)






// function abcde(){

// }
// // 0
// function abcde(a,b,c){

// }
// // 3
// console.log(abcde.length)

// function are basically objects in js so we can also get the length of the function
// number of parameters passed is the length of the function





// line by line code chaley ise khte hai synchronous
// jo bhi code async nature ka ho, use side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi sara sync code chl jaye, tab check karo sara sync code chl gya ki nhi and agr vo complete hua ho to usse main stack mein lao aur chala do
async function abcde(){
    var blob = await fetch('https://randomuser.me/api/')
    var ans = await blob.json
}

