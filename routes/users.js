const express=require('express')
const router=express.Router()
const User=require('../models/user_model')
router.get('/buyer/:name',async (req,res)=>
{
    try
    {
        const dy=await User.find({username:req.params.name})
        console.log(req.params)
        res.json(dy)
    }
    catch (e)
    {
        res.json(e)
    }
})
router.get('/buyer/fid/:id',async (req,res)=>
{
    try
    {
        const dy=await User.find({_id:req.params.id})
        console.log(req.params)
        res.json(dy)
    }
    catch (e)
    {
        res.json(e)
    }
})
router.get('/buyer',async (req,res)=>
{
    try
    {
        const dy=await User.find()
        console.log(req.params)
        res.json(dy)
    }
    catch (e)
    {
        res.json(e)
    }
})
router.post('/buyer',async (req,res)=>
{
    const user=new User(req.body)
    try
    {
        const dt=await user.save()
        res.json(dt)
    }
    catch (e) {
        res.json(e)

    }
})
router.patch('/buyer/:id/wishlist/:value',async (req,res)=>
{
    try
    {
        const dt=await User.updateOne({_id:req.params.id},{$push:{"wishlist":req.params.value}})
        res.json(dt)
    }
    catch (e)
    {
        res.json(e)

    }
})
router.delete('/buyer/:id/wishlist/:value',async (req,res)=>
{
    try
    {
        const dt=await User.updateOne({_id:req.params.id},{$pull:{"wishlist":req.params.value}})
        res.json(dt)
    }
    catch (e)
    {
        res.json(e)

    }
})
router.delete('/buyer/:id/or',async (req,res)=>
{
    try
    {
        const dt=await User.updateOne({_id:req.params.id},{$pull:{"ordered_items":req.body}})
        res.json(dt)
    }
    catch (e)
    {
        res.json(e)

    }
})
router.delete('/buyer/:id/cart/:value',async (req,res)=>
{
    try
    {
        const dt=await User.updateOne({_id:req.params.id},{$pull:{"cart":req.params.value}})
        res.json(dt)
    }
    catch (e)
    {
        res.json(e)

    }
})
router.patch('/buyer/:id/or',async (req,res)=>
{
    try
    {
        const dt=await User.updateOne({_id:req.params.id},{$push:{"ordered_items":req.body}})
        res.json(dt)
    }
    catch (e)
    {
        res.json(e)

    }
})

router.patch('/buyer/:id/cart/:value',async (req,res)=>
{
    try
    {
        const dt=await User.updateOne({_id:req.params.id},{$push:{"cart":req.params.value}})
        res.json(dt)
    }
    catch (e)
    {
        res.json(e)

    }
})
module.exports=router;