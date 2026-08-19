// // console.log("hello")
// // const fs = require('fs') //[old method]
// // console.log("1")
// // import fs from 'fs'  //[new method]
// // fs.writeFileSync("index.txt","hiiii")
// // fs.writeFileSync("index.html","htmlll")
// // let data = fs.readFileSync("index.txt")
// // console.log(data.toString(),"hehehe")

// // fs.mkdirSync("new_folder");
// // fs.appendFileSync("new.txt","hiiii")
// // fs.writeFileSync("new.txt","helloww")
// // // fs.appendFileSync("new_folder/new.txt","\nhiiii\nbyeee")
// // let data = fs.readFileSync("new.txt");
// // console.log(data.toString());
// // // fs.unlinkSync('new.txt')
// // fs.rmdirSync()

// // fs.writeFileSync("index.txt","hiiii") //[sync run line by line -- wait till completion]
// // fs.writeFile("index.txt","hiiii", () => {
// //     console.log("Run");
// // });
// // console.log("2");
// // console.log("A");


// // fs.appendFile
// // setTimeout(()=>{
// //     console.log("B");
// // },2000)
// // let p = new Promise(()=>{
// //     console.log("C");
// // })
// // console.log("D");



// //Class 2

// // let os = require('os');
// // console.log(os.totalmem()/1024/1024/1024);
// // console.log(os.freemem()/1024/1024/1024);
// // console.log(os.cpus());
// // console.log(os.arch());
// // console.log(os.uptime()/3600);


// // let express = require('express');
// // let app = express();

// // app.use((req,res,next)=>{
// //     console.log("main nhii jaane dungaa");
// //     next()
// // })

// // app.use((req,res,next)=>{
// //     console.log("bhagg jaa yha see");
// // })

// // app.get('/',(req,res)=>{
// //     res.send("hello serverr....")
// // })

// // app.post('/',(req,res)=>{
// //     res.send("post serverr...")
// // })
// // app.listen(3000,()=>{
// //     console.log("server runninggg.....");
// // })



// //Class 3

// let express = require('express');
// let app = express();

// app.get('/', (req, res) => {
//   res.send('Hello');
// });

// app.get('/new/:id', (req, res) => {
//     // let id = req.params.id;
//     let {id} = req.params;
//     // console.log (req.params,"hehehe");
//     res.send(id)
// });

// app.listen(3000, () => {
//   console.log('Running');
// });

// // http://localhost:3000/search?firstName=om&lastName=jain
// app.get("/search",(req,res)=>{
//     console.log(req.query,"Hiiii");
//     res.send('Hiiii')
// })
// app.get("/search",(req,res)=>{
//     let {firstName,lastName} = req.query;
//     res.send(`Searching for ${firstName} ${lastName}`);
// })



// let express = require("express");
// let app = express();
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/home/:id", (req, res) => {
//   console.log(req.params);
//   console.log("hii");
// });

// app.post("/about", (req, res) => {
//   console.log(req.body);
//   res.send("Postt");

//   res.status(200).json({ msg: "hello" });
// });

// app.listen(8001, () => {
//   console.log("Server is running");
// });


//neww
let express = require("express");
let app = express(); 
let products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "mobile",
    price: 69999,
    stock: 20
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "mobile",
    price: 74999,
    stock: 15
  },
  {
    id: 3,
    name: "MacBook Air M2",
    category: "laptop",
    price: 89999,
    stock: 10
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "laptop",
    price: 129999,
    stock: 8
  },
  {
    id: 5,
    name: "AirPods Pro",
    category: "earphones",
    price: 24999,
    stock: 25
  },
  {
    id: 6,
    name: "Sony XM5",
    category: "headphones",
    price: 29999,
    stock: 12
  }
];
//GET PRODUCTS
app.get("/", (req, res) => {
  res.send(products);
});
app.get("/product/:id", (req, res) => {
  let { id } = req.params;

  console.log(id, "id");

  let data = products.find((a) => {
    return a.id === Number(id);
  });

});

app.get('/search',(req,res)=>{
   let {category}=req.query
    
      let data=   products.filter((a)=>{
            return a.category==category
         })
         if(!data){
            return res.status(404).json({msg:"not founddddddddd"})

         }
         res.status(200).json({msg:data})
})

app.listen(4000, () => {
  console.log("Server...");
});