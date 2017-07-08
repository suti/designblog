/**
 * Created by suti on 2017/7/8.
 */
const router = require('express').Router()

router.post('/admin/logout',(req,res,next)=>{
	if(req.session.user){
		console.log(req.session.user,' logout')
		req.session.destroy(err=>{
			if(err){
				res.send({code:0})
				res.end()
			}else{
				res.send({code:1})
				res.end()
			}
		})
	}else{
		res.send({code:1})
		res.end()
	}
})

module.exports=router