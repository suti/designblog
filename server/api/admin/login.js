/**
 * Created by suti on 2017/7/8.
 */
const router = require('express').Router()
const db =new (require('../../db/dbfunc'))

router.post('/admin/login.do',(req,res,next)=>{
	let {user,passwd}=req.query

	if(user!==undefined&&passwd!==undefined){
		db.checkUserPassWD(user,passwd).then(result=>{
			if(result.c){
				req.session.user=result.data.user
				req.session.userType=result.data.type
				res.send({code:1,data:result.data})
			}else{
				res.send({code:0})
				res.end()
			}
		},err=>{
			console.log(err)
			res.send({code:-1})
			res.end()
		})
	}else {
		res.send({code:-2})
		res.end()
	}

})


module.exports=router