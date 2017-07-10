/**
 * Created by suti on 2017/7/9.
 */
const mongoose = require('mongoose')
const schemaModel = {
	introduce:String,
	Banner:[String],
	recommendUrl:{
		showNumber:Number,
		urls:[Array]
	},
	weibo:String,
	beance:String,
	zanKu:String,
	weChat:String,
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

// Array.prototype.forEach.call(['chTitle','author','createTime','showKind','isRecommend'],e=>{
// 	schema.query[e]=function(el){
// 		return this.find({[e]:new RegExp(el,'i')})
// 	}
// })

schema.statics._update=function(con,doc,opt){
	doc.updateTime=Date.now()
	return this.update(con,doc,opt)
}

module.exports=schema