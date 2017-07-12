/**
 * Created by suti on 2017/7/12.
 */
const express = require('express')
const router = express.Router()
const db =new (require('../../db/dbfunc'))

router.post('/blog/getType.do',(req,res,next)=>{
	let query=req.query,
		{tag,isShow,isRecommend}=query
	db.getTypes().then(result=>{
		let data=[]
		if(result.length>0){
			res.send({code:1,data})
		}else {
			res.send({code:0})
		}
		res.end()
	},err=>{
		res.send({code:-1})
		res.end()
	})
})

module.exports=router