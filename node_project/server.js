const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());



app.get("/", (req, res) =>{
    res.send(" Hello world");
});

app.post("/", (req, res)=>{
    res.send("account created successfully");
})

app.put("/", (req, res)=>{
    res.send("account updated successfully");
})

app.delete("/", (req, res)=>{
    res.send("account delete successfully");
})

// ----------------

app.post("/login",(req, res)=>{
    console.log(req.body);
    res.send(req.body);
})


app.listen((port), ()=>{
    console.log("server started");
})

// function sayHelloWorld(message, name){
//     return message + " " + name;
//     // hello world venkat
// }
// var res = sayHelloWorld("Hello World", ()=>{
//     console.log("venkat")
// });
// console.log(res);

// function without name is .. 