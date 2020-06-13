const express=require('express')
const router=express.Router()
const Order=require('../models/order_model')
router.get('/orders',async (req,res)=>
{
    // res.send("get orders")
    try
    {
        const data=await Order.find()
        res.json(data)
    }
    catch (e) {
        res.json(e)

    }
})
router.get('/orders/:pid/:uid',async (req,res)=>
{
    try
    {
        const dar=await Order.find({product_id:req.params.pid,user_id:req.params.uid})
        res.json(dar)
    }
    catch (e)
    {
        res.json(e)

    }
})
router.post('/orders',async (req,res)=>
{
    order=new Order(req.body)
    try
    {
        const data= await order.save()
        res.json(data)
    }
    catch (e) {
        res.json(e)

    }
})
router.get('/orders/:id',async (req,res)=>
{
    // res.send("get orders id:"+req.params.id)
    try
    {
        const data=await Order.find({_id:req.params.id})
        res.json(data)
    }
    catch (e) {
        res.json(e)

    }
})
router.patch('/orders/:id/:val',async (req,res)=>
{
    try {
        const data=await Order.updateOne({_id:req.params.id},{$set:{"status":req.params.val}})
        res.json(data)
    }
    catch (e) {
        res.json(e)
    }
})
module.exports=router