let mongoose = require('mongoose'),
	DB_URL = 'mongodb://localhost:27017/designblog';

/**
 * 连接
 */
let db = mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
	console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose connection disconnected');
});

let TestSchema = new mongoose.Schema({
	name: {type: String},
	age: {type: Number, default: 0},
	time: {type: Date, default: Date.now},
	email: {type: String, default: ''}
});

// 添加 mongoose 实例方法
TestSchema.methods.findbyUsername = function(username, callback) {
	return this.model('test').find({username: username}, callback);
}
// 添加 mongoose 静态方法，静态方法在Model层就能使用
TestSchema.statics.findbyAge = function(age, callback) {
	return this.model('test').find({age: age}, callback);
}

let TestModel = db.model('test', TestSchema);

let atcive = new TestModel({name:'lxy',age:20,email:'lxy96@outlook.com'})
// atcive.save(err=>{
// 	if(err){
// 		console.log(err)
// 	}else {
// 		console.log('save成功')
// 	}
// })
TestModel.findbyAge(20,(err,suc)=>{
	if(err){
		console.log(err)
	}else {
		console.log(suc)
	}
})
/*
 let TestAddEntity = new TestModel({
 name: 'bianhao',
 age: '25',
 email: 'binnull@foxmail.com'
 });

 // 添加
 TestAddEntity.save(function(err, doc){
 if(err) {
 console.log('error : ' + err);
 } else {
 console.log(doc);
 }
 });*/

// let TestFindEntity = new TestModel({});
/*
 // 查询
 TestFindEntity.findbyUsername('bianhao', function(error, result){
 if(error) {
 console.log(error);
 } else {
 console.log(result);
 }
 });
 */
// TestModel.findbyAge('25', function(error, result) {
// 	if(error) {
// 		console.log(error);
// 	} else {
// 		console.log(result);
// 	}
// });
