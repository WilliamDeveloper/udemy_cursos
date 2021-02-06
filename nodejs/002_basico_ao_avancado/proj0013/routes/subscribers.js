const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

router.get('/',async (req,res)=>{
    try{
        const subscrinbers = await Subscriber.find()
        res.json(subscrinbers)
    }catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/:id',(req,res)=>{
    res.send('rest api ID')
})

router.post('/',async(req,res)=>{
    const subscriber = new Subscriber({
        userName : req.body.userName,
        userChannel: req.body.userChannel
    })
    
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
})

router.patch('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})

module.exports = router