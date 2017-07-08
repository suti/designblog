const mongoose = require('mongoose')
const schemaModel = {
	chTitle: String,                // 中文
	enTitle: String,                // 英文
	profile: String,                // 简介
	imgUrl:  String,                // 作品缩略图
	updateTime: {
		type: Date,
		default: Date.now
	},                              // 最后更新时间
	insertTime: {
		type: Date,
		default: Date.now
	},                              // 插入时间
}

let schema = new mongoose.Schema(schemaModel)

Array.prototype.forEach.call(['chTitle','enTitle','createTime'],e=>{
	schema.query[e]=function(el){
		return this.find({[e]:new RegExp(el,'i')})
	}
})

schema.statics._update=function(con,doc,opt,cb){
	doc.updateTime=Date.now()
	this.update(con,doc,opt,cb)
}

module.exports=schema