const express=require("express")
const cors=require("cors")
const mongodb=require("mongodb")
const bodyparser=require("body-parser")
const bodyParser = require("body-parser")

const app=express()
app.use(cors())
app.use(bodyparser.json)
app.use(bodyParser.urlencoded({extended:false}))

let balu =mongodb.MongoClient
app.get("/mern1",(req,res)=>{
    balu.connect("mongodb+srv://Balu-jami:Br@14389@cluster0.6a3ls.mongodb.net/database1?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db=connection.db("database1")
            db.collection("db1").find().toArray((err,Array)=>{
                if(err) throw err
                else{
                    res.send(Array)
                }
            })
        }
    })
})

let port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log("server need")
})