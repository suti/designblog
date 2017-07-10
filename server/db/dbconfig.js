/**
 * Created by suti on 2017/7/7.
 */
const mongoose = require('mongoose')
const projectSchema = require('./data/projectSchema')
const articleSchema = require('./data/articleSchema')
const toolsSchema = require('./data/toolsSchema')
const userSchema = require('./user/userSchema')
const pageSchema = require('./pageData/pageSchema')
const mailSchema = require('./pageData/mailSchema')
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
dbSchemas.push({name:'tool',model:db.model('tool',toolsSchema)})
dbSchemas.push({name:'user',model:db.model('user',userSchema)})
dbSchemas.push({name:'page',model:db.model('page',pageSchema)})
dbSchemas.push({name:'mail',model:db.model('mail',mailSchema)})


function DesignBlogDB() {
	// console.log(Date.now(),'数据库操作')
}

dbSchemas.map(e=>{
	DesignBlogDB.prototype[e.name]=e.model
})

// let a=new DesignBlogDB();
//
// // a.project._create({author:1,enTitle:'nihao'})
// // 	.then(e=>{
// // 		a.project._create({author:2,enTitle:'nihao'}).then(
// // 			e=>{
// // 				a.project._create({author:3,enTitle:'hi'}).then(e=>{
// // 					a.project._create({author:4,enTitle:'dfas'}).then(e=>{
// // 						console.log('ok')
// // 					})
// // 				})
// // 			}
// // 		)
// // 	})
//
//
// a.project._remove({id:2}).then(result=>{
// 	console.log('ok2')
// })

module.exports=DesignBlogDB