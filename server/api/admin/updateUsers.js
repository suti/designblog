/**
 * Created by suti on 2017/7/12.
 */
const router = require('express').Router()
const db =new (require('../../db/dbfunc'))

router.post('/admin/updateUser.do',(req,res,next)=>{
	let {user,passwd,type}=req.query

	if(req.session.user!==null&&req.session.userType===0){
		db.updateUser(user,passwd,type)
			.then(result=>{
				res.send({code:1})
				res.end()
			},err=>{
				res.send({code:0})
				res.end()
			})
	}else {
		res.send({code:-3})
		res.end()
	}
})

module.exports=router