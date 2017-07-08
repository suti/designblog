/**
 * Created by suti on 2017/7/7.
 */
const mongoose = require('mongoose')
const projectSchema = require('./data/projectSchema')
const articleSchema = require('./data/articleSchema')
const toolsSchema = require('./data/toolsSchema')
const userSchema = require('./user/userSchema')
const dbPath = 'mongodb://localhost:27017/designblog'

let db = mongoose.connect(dbPath), dbSchemas=[]

mongoose.connection.on('connected',()=>{
	console.log('Mongoose connection open to ' + dbPath)
})
mongoose.connection.on('error',err=>{
	console.log('Mongoose connection error: ' + err)
})
mongoose.connection.on('disconnected',()=>{
	console.log('Mongoose connection disconnected')
})

dbSchemas.push({name:'project',model:db.model('project',projectSchema)})
dbSchemas.push({name:'article',model:db.model('article',articleSchema)})
dbSchemas.push({name:'tools',model:db.model('tools',toolsSchema)})
dbSchemas.push({name:'user',model:db.model('user',userSchema)})


function DesignBlogDB() {
	console.log(Date.now(),'数据库操作')
}

dbSchemas.map(e=>{
	DesignBlogDB.prototype[e.name]=e.model
})

// let project=(new DesignBlogDB).project

// project._update({author:'lixiangyu'},{author:'123'},{},function (err,suc) {
// 	if(err){
// 		console.log(err)
// 	}else {
// 		console.log(suc)
// 	}
// });

// (new DesignBlogDB).user.create({user:'lxy',passwd:'123',type:'1'})

module.exports=DesignBlogDB