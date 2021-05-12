const express = require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const mongodb=require('mongodb')

const app=express()
app.use(bodyparser.json)
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())

const balu=mongodb.MongoClient
app.get("/products",(req,res)=>{
    balu.connect("mongodb+srv://Balu-jami:Br@14389@cluster0.6a3ls.mongodb.net/database1?retryWrites=true&w=majority",(err,res)=>{
        if(err) throw err
        else{
            const db=connection.db("database1")
            db.collection("db 1").find().toArray((err,array)=>{
                if(err) throw err
                else{
                    res.send(array)
                }
            })
        }
    })
})
let port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log("success")
})