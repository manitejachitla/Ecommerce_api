const express=require('express')
const Product_model=require('../models/product_model')
const router=express.Router()
router.get('/product',async (req,res)=>
{
    try
    {
        const wdb=await Product_model.find()
        res.json(wdb)
    }
    catch (e) {
        res.json(e)
    }

})
router.get('/product/:id',async (req,res)=>
{
    try
    {
        const wdb=await Product_model.find({_id: req.params.id})
        res.json(wdb)
    }
    catch (e)
    {
        res.json(e)
    }

})
router.post('/product/review/:id',async (req,res)=>
{
    try
    {
        const datas=await Product_model.updateOne({_id:req.params.id},{$push:{"reviews":req.body}})
        res.json(datas)
    }
    catch (e)
    {
        res.json(e)
    }
})
router.post('/product',async (req,res)=>
{
    const product=new Product_model(req.body)
    try
    {
        const wdb=await product.save()
        res.json(wdb)
    }
    catch (e) {
        res.json(e)
    }
    // console.log(req.body)
})

module.exports=router;