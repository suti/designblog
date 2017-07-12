/**
 * Created by suti on 2017/7/9.
 */
const CryptoJS = require('crypto-js')

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

console.log(aes.encrypt('nihao'))