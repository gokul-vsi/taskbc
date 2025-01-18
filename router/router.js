const express = require('express');
const router = express.Router();
const mongodbfile = require('../model/model')


router.post('/',async(req,res)=>{
    const storing = new mongodbfile(req.body)
    await storing.save()
    res.status(201).json(storing)
})

router.get('/get',async(req,res)=>{
    const getting = await mongodbfile.find()
    res.json(getting)
})

router.delete('/get/:id',async(req,res)=>{
    await mongodbfile.findByIdAndDelete(req.params.id)
    res.json({message:'deleted'})
})

router.put('/get/:id',async(req,res)=>{
    const updating = await mongodbfile.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(updating)
})

module.exports = router