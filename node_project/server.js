const express = require("express");
var cors = require('cors')

const app = express();
const port = 6060;
app.use(express.json());
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'user',
    password:"root"
  });

const db = connection.promise()
app.use(cors());
app.get("/users", async (req, res) =>{
    const [results] = await db.query("select * from user");
    console.log(results);
    res.send(results);
});

app.post("/users", async (req, res)=>{
    const { id, name, password, email, dob} = req.body;
    const [results] = await db.query('insert into user(id, name, password, email,dob) values(?,?,?,?,?)',[id, name, password, email,  dob]);
    console.log(results);

    res.send("account created successfully");
})

app.put("/users", async (req, res)=>{
    const { id, name, password, email, dob} = req.body;

    const [results] = await db.query(`update user set password='${password}' where id=${id}`);

    res.send("account updated successfully");
})

app.delete("/users", async (req, res)=>{
    const { id } = req.body;
    console.log("id-nodejs", id);

    const [results] = await db.query(`delete from user where id=${id}`);
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