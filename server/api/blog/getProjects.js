/**
 * Created by suti on 2017/7/8.
 * @query
 */
const express = require('express')
const router = express.Router()
const db =new (require('../../db/dbfunc'))

router.post('/blog/getProject.do',(req,res,next)=>{
	let query=req.query,
		{tag,isShow,isRecommend}=query

	db.getProject(tag,isShow,isRecommend).then(result=>{
		let data=[]
		if(result.length>0){
			result.forEach(e=>{
				let {chTitle,enTitle,tag,author,profile,createTime,introduce,
					url,imgUrl,markdown,showKind,sort,isShow,isRecommend,id}=e
				data.push({chTitle,enTitle,tag,author,profile,createTime,introduce,
					url,imgUrl,markdown,showKind,sort,isShow,isRecommend,id})
			})
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