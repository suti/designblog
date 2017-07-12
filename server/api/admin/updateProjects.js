/**
 * Created by suti on 2017/7/12.
 */
const router = require('express').Router()
const db =new (require('../../db/dbfunc'))

router.post('/admin/updateProject.do',(req,res,next)=>{
	let {chTitle,enTitle,tag,author,profile,createTime,introduce,
		url,imgUrl,markdown,showKind,sort,isShow,isRecommend,id}=req.query

	if(req.session.user!==null&&req.session.userType===0){
		db.updateProject(id,{chTitle,enTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend})
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