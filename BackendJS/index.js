// console.log("hello")
// const fs = require('fs') //[old method]
// console.log("1")
// import fs from 'fs'  //[new method]
// fs.writeFileSync("index.txt","hiiii")
// fs.writeFileSync("index.html","htmlll")
// let data = fs.readFileSync("index.txt")
// console.log(data.toString(),"hehehe")

// fs.mkdirSync("new_folder");
// fs.appendFileSync("new.txt","hiiii")
// fs.writeFileSync("new.txt","helloww")
// // fs.appendFileSync("new_folder/new.txt","\nhiiii\nbyeee")
// let data = fs.readFileSync("new.txt");
// console.log(data.toString());
// // fs.unlinkSync('new.txt')
// fs.rmdirSync()

// fs.writeFileSync("index.txt","hiiii") //[sync run line by line -- wait till completion]
// fs.writeFile("index.txt","hiiii", () => {
//     console.log("Run");
// });
// console.log("2");
// console.log("A");


// fs.appendFile
// setTimeout(()=>{
//     console.log("B");
// },2000)
// let p = new Promise(()=>{
//     console.log("C");
// })
// console.log("D");



//Class 2

// let os = require('os');
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.uptime()/3600);


let express = require('express');
let app = express();

// app.use((req,res,next)=>{
//     console.log("main nhii jaane dungaa");
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("bhagg jaa yha see");
// })

app.get('/',(req,res)=>{
    res.send("hello serverr....")
})

app.post('/',(req,res)=>{
    res.send("post serverr...")
})
app.listen(3000,()=>{
    console.log("server runninggg.....");
})