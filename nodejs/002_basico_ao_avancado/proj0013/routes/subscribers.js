const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('rest api ok')
})

router.get('/:id',(req,res)=>{
    res.send('rest api ID')
})

router.post('/',(req,res)=>{

})

router.patch('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})

module.exports = router