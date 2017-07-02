var mongoose = require('mongoose'),
  DB_URL = 'mongodb://localhost:27017/designblog';

/**
 * 连接
 */
var db = mongoose.connect(DB_URL);

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

var TestSchema = new mongoose.Schema({
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

var TestModel = db.model('test', TestSchema);

/*
var TestAddEntity = new TestModel({
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

var TestFindEntity = new TestModel({});
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
TestModel.findbyAge('25', function(error, result) {
  if(error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
