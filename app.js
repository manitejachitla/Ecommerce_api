const express=require('express')
const mongoose =require('mongoose')
const bodyparser=require('body-parser')
const productRoute=require('./routes/product')
const userRoute=require('./routes/users')
const sellerRoute=require('./routes/sellers')
const orderRoute=require('./routes/order')
const cors=require('cors')
const app=express()
app.use(bodyparser.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser:true,useUnifiedTopology: true},()=>
{
    console.log("connected")
})
app.use(productRoute)
app.use(orderRoute)
app.use(userRoute)
app.use(sellerRoute)
app.listen(3500,()=>
{
    console.log(console.log('server started'))
})
