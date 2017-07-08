/**
 * Created by suti on 2017/7/8.
 */
const router = require('express').Router()
const db = (new (require('../../db/dbconfig'))).user

router.post('/admin/login.do',(req,res,next)=>{
	let {user,passwd}=req.query

	if(user!==undefined&&passwd!==undefined){
		checkUser(user,passwd).then(result=>{
			if(result.c){
				req.session.user=req.query.user
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

function checkUser(user,passwd) {
	return db.findOne().user(user).exec().then(result=>{
		if(result[0]&&(passwd===result[0].passwd)){
			return Promise.resolve({c:true,data:result[0]})
		}
		return Promise.resolve({c:false})
	},err=>{
		return Promise.reject(err)
	})
}

module.exports=router