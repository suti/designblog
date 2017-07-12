const mongoose = require('mongoose')
const schemaModel = {
	chTitle: String,                // 中文名
	id:Number,
	tag: Array,                     //（项目标签id）
	author: String,                 // 参与者
	profile: String,                // 项目简介
	createTime: Date,               // 创作时间
	introduce: String,              // 作品介绍
	url: String,                    // 相关地址
	imgUrl:  String,                // 作品缩略图
	markdown: String,               // 作品markdown
	showKind: Number,               // 显示类型（大小显示）
	sort: {
		type: Number,
		min: 0
	},                              // 排序显示（越小优先显示）
	updateTime: {
		type: Date,
		default: Date.now
	},                              // 最后更新时间
	insertTime: {
		type: Date,
		default: Date.now
	},                              // 插入时间
	isShow: {
		type: Boolean,
		default: true
	},                              // 是否显示（默认显示）
	isRecommend: {
		type: Boolean,
		default: false
	}                               // 是否精选
}

let schema = new mongoose.Schema(schemaModel)

Array.prototype.forEach.call(['chTitle','author','createTime','showKind','isRecommend','id'],e=>{
	schema.query[e]=function(el){
		return this.find({[e]:new RegExp(el,'i')})
	}
})

schema.statics._create=function(con){
	return this.count({}).then(result=>{
		con.id=result+1
		console.log(con)
		return this.create(con).then(e=>{
			return Promise.resolve()
		},err=>{
			return Promise.reject(err)
		})
	},err=>{
		return Promise.reject(err)
	})
}

schema.statics._update=function(con,doc,opt){
	doc.updateTime=Date.now()
	return this.update(con,doc,opt)
}

schema.statics._remove=function(con){
	let _this=this
	return this.findOne(con)
		.then(result=>{
			if(result){
				console.log(result)
				let id=result.id
				return result.remove().then(e=>{
					return _this.find({id:{$gt:id}}).exec()
						.then(result=>{
							if(result.length>0){
								let array=[]
								for(let i=0;i<result.length;i++){
									result[i].id-=1
									array.push(result[i].save())
								}
								return Promise.all(array)
							}
						})
				},err=>{
					return Promise.reject(err)
				})
			}else{
				return Promise.resolve()
			}
		})
}

module.exports=schema