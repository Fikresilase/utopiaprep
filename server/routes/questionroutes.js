 const express=require('express');
 const router=express.Router()

 router.get('/api/goals',(req,res)=>{
    res.status(200).json({message:'get questions'})
 })

 module.exports=router