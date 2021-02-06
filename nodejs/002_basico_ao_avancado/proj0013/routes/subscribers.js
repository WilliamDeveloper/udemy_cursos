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

router.get('/:id', getSubscriber,(req,res)=>{
    res.json(res.subscriber)
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

router.patch('/:id',getSubscriber,(req,res)=>{

})

router.delete('/:id',getSubscriber,(req,res)=>{

})


async function getSubscriber(req,res, next){
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null){
            return res.status(404).json({message:'subscribner not found'})
        }
    }catch (e) {
        return res.status(500).json({message:e.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports = router