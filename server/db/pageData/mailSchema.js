/**
 * Created by suti on 2017/7/9.
 */
const mongoose = require('mongoose')
const schemaModel = {
	mail: String,
	name: String,
	no:Number,
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

Array.prototype.forEach.call(['mail','name','no','updateTime'],e=>{
	schema.query[e]=function(el){
		return this.find({[e]:new RegExp(el,'i')})
	}
})

schema.statics._update=function(con,doc,opt){
	doc.updateTime=Date.now()
	return this.update(con,doc,opt)
}

module.exports=schema