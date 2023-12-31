const express = require('express');
const cors = require('cors');
const { db } = require('./db/DB.JS');
const {readdirSync}=require('fs')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT


//middleware
app.use(express.json())
app.use(cors())


// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

//routers
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))



//server
const server = ()=>{
    db()
app.listen(PORT,()=>{
    console.log(`listening to port`,PORT)
})
}
server()