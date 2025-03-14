const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router/router')
mongoose.connect("mongodb+srv://gokulnithya23:UOuO3xQPxsrCS2vA@cluster0.8sjjl.mongodb.net/dbcheckergokul").then(()=>console.log("db connected")).catch((error)=>console.log(error))

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/gokul',router)

app.listen(10000,()=>{
    console.log("The port is successfully running 10000")
})

