/**
 * Created by suti on 2017/7/9.
 */
const db =new (require('./dbconfig'))
const CryptoJS = require('crypto-js')

const user = db.user
const article = db.article
const project = db.project
const tools =  db.tools

/**
 * AES加解密
 * @param key 密钥
 * @param iv 偏移量
 */
class CryptoAES{
	constructor(key,iv){
		this.key=CryptoJS.enc.Utf8.parse(key)
		this.iv=CryptoJS.enc.Utf8.parse(iv)
	}
	encrypt(v) {
		let plaintText = CryptoJS.enc.Utf8.parse(v),{iv,key} = this,
			encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
				iv,
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
			})
		return encryptedData.ciphertext.toString()
	}
	decrypt(v) {
		let hexStr = CryptoJS.enc.Hex.parse(v),{iv,key} = this,
			base64Str = CryptoJS.enc.Base64.stringify(hexStr),
			decryptedData=CryptoJS.AES.decrypt(base64Str, key, {
				iv,
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
			})
		let data=decryptedData.toString(CryptoJS.enc.Utf8)
		return data.toString()
	}
}
// 这里自定义的一些密钥和偏移量
let aes=new CryptoAES('1234880890001000','1879267489021906')

/**
 * 数据库操作方法
 */
class dbfunc{
	constructor(){

	}

	//检查用户名是否存在（返回全部doc）
	checkUserExist(u) {
		return user.findOne().user(u).exec()
			.then(result=>{
				if(result[0]!==undefined){
					return Promise.resolve(result[0])
				}
				return Promise.reject()
			},err=>{
				return Promise.reject(err)
			})
	}

	//检查用户名密码，正确返回用户信息（返回全部doc）
	checkUserPassWD(u,p) {
		return user.findOne().user(u).exec()
			.then(result=>{
				let depasswd = aes.decrypt(result[0].passwd)
				if(result[0]&&(p===depasswd)){
					return Promise.resolve({c:true,data:result[0]})
				}
				return Promise.resolve({c:false})
			},err=>{
				return Promise.reject(err)
			})
	}

	//添加新用户 用户名|密码|类型
	addUser(u,p,t){
		let passwd=aes.encrypt(p)
		return user.create({user:u,passwd,type:t})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	//编辑用户 用户名|密码|类型
	updateUser(u,p,t){
		let doc={}
		if(p)
			doc.passwd=aes.encrypt(p)
		if(t)
			doc.type=t|0
		return user._update({user:u},doc)
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	//删除用户
	removeUser(u){
		return user.remove({user:u})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	addProject(data){
		let {chTitle,enTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend}=data
		project._create({chTitle,enTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	updateProject(el,data){

	}

}


module.exports=dbfunc