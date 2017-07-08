/**
 * Created by suti on 2017/7/8.
 */
const express = require('express')
const router = express.Router()

router.post('/blog/getProject.do',(req,res,next)=>{
	console.log(req)
})

module.exports=router