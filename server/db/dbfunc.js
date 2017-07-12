/**
 * Created by suti on 2017/7/9.
 */
const db =new (require('./dbconfig'))
const CryptoJS = require('crypto-js')
const Promise = require('bluebird')

const user = db.user
const article = db.article
const project = db.project
const tools =  db.tools
const type = db.type

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

	/**
	 * 检查用户名是否存在（返回全部doc）
	 * @param u
	 */
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

	/**
	 *检查用户名密码，正确返回用户信息（返回全部doc）
	 * @param u
	 * @param p
	 */
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

	/**
	 *添加新用户 用户名|密码|类型
	 * @param u
	 * @param p
	 * @param t
	 */
	addUser(u,p,t){
		let passwd=aes.encrypt(p)
		return user.create({user:u,passwd,type:t})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				console.log(e)
				return Promise.reject(err)
			})
	}

	/**
	 *编辑用户 用户名|密码|类型
	 * @param u
	 * @param p
	 * @param t
	 */
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

	/**
	 *删除用户
	 * @param u
	 */
	removeUser(u){
		return user.remove({user:u})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}


	/**
	 *获取项目
	 * @param tag
	 * @param isShow
	 * @param isRecommend
	 */
	getProject(tag,isShow,isRecommend){
		let query={}
		tag&&(query.tag={$in:[tag]})
		isShow&&(query.isShow=isShow)
		isRecommend&&(query.isRecommend=isRecommend)
		console.log(query)
		return project.find(query).exec()
			.then(result=>{
				return Promise.resolve(result)
			},err=>{
				return Promise.reject(err)
			})
	}

	/**
	 *添加项目
	 * @param data
	 */
	addProject(data){
		let {chTitle,enTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend}=data
		return project._create({chTitle,enTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	/**
	 *修改项目
	 * @param id
	 * @param data
	 */
	updateProject(id,data){
		let {chTitle,enTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend}=data
		return project._update({id},{chTitle,enTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	/**
	 *删除项目
	 * @param id
	 */
	removeProject(id){
		return project._remove({id})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	/**
	 *获取文章
	 * @param tag
	 * @param isShow
	 * @param isRecommend
	 */
	getArticle(tag,isShow,isRecommend){
		let query={}
		tag&&(query.tag={$in:[tag]})
		isShow&&(query.isShow=isShow)
		isRecommend&&(query.isRecommend=isRecommend)
		return article.find(query).exec()
			.then(result=>{
				return Promise.resolve(result)
			},err=>{
				return Promise.reject(err)
			})
	}

	/**
	 *添加文章
	 * @param data
	 */
	addArticle(data){
		let {chTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend}=data
		return article._create({chTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	/**
	 *修改文章
	 * @param id
	 * @param data
	 */
	updateArticle(id,data){
		let {chTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend}=data
		return article._update({id},{chTitle,tag,author,profile,createTime,introduce,
			url,imgUrl,markdown,showKind,sort,isShow,isRecommend})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				return Promise.reject(err)
			})
	}

	/**
	 *删除文章
	 * @param id
	 */
	removeArticle(id){
		return article._remove({id})
			.then(e=>{
				return Promise.resolve()
			},err=>{
				console.log(err)
				return Promise.reject(err)
			})
	}

	/**
	 * 更新分类标签，只能更新不能删除
	 * @param arr
	 * @return {*}
	 */
	updateTypes(arr){
		function iterate({name,t}) {
			return type.findOne({name,type:t}).exec()
				.then(result=>{
					if(result&&result[0]){
						return Promise.resolve()
					}else {
						return type.create({name,type:t})
							.then(e=>{
								return Promise.resolve()
							},err=>{
								return Promise.reject(err)
							})
					}
				},err=>{
					return Promise.reject(err)
				})
		}

		let p=iterate(arr[0])
		for(let i=1;i<arr.length;i++){
			p=p.then(()=>{iterate(arr[i])})
		}

		return p
	}

	/**
	 * 获取分类标签
	 * @return {Promise.<TResult>}
	 */
	getTypes(){
		return type.find({}).exec()
			.then(e=>{
				return Promise.resolve(e)
			},err=>{
				return Promise.reject(err)
			})
	}

}

module.exports=dbfunc