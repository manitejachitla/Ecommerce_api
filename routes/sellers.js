const express=require('express')
const Seller_model=require('../models/seller_model')
const router=express.Router()
router.get('/seller/:name',async (req,res)=>
{
    try
    {
        const wdb=await Seller_model.find({username:req.params.name})
        res.json(wdb)
    }
    catch (e) {
        res.json(e)
    }
})
router.get('/seller/:id',async (req,res)=>
{
    try
    {
        const wdb=await Seller_model.find({_id:req.params.id})
        res.json(wdb)
    }
    catch (e) {
        res.json(e)
    }
})
router.get('/seller',async (req,res)=>
{
    try
    {
        const wdb=await Seller_model.find()
        res.json(wdb)
    }
    catch (e) {
        res.json(e)
    }
})
router.post('/seller',async (req,res)=>
{
    const sell=new Seller_model(req.body)
    try
    {
        const wdb=await sell.save()
        res.json(wdb)
    }
    catch (e) {
        res.json(e)
    }
    // console.log(req.body)
})
router.patch('/seller/:name/:id',async (req,res)=>
{
    try
    {
        const wdb=await Seller_model.updateOne({name:req.params.name},{$push:{"orders":req.params.id}})
        res.json(wdb)
    }
    catch (e) {
        res.json(e)
    }
    // console.log(req.body)
})

module.exports=router;