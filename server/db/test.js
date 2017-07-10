/**
 * Created by suti on 2017/7/9.
 */
const CryptoJS = require('crypto-js')
const secret = CryptoJS.enc.Utf8.parse('1234880890001000')
const iv=CryptoJS.enc.Utf8.parse('1879267489021906')

let passwd='nihao123'

function encrypt(v) {
	let plaintText = CryptoJS.enc.Utf8.parse(v)
	let encryptedData = CryptoJS.AES.encrypt(plaintText, secret, {
		iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	})
	return encryptedData.ciphertext.toString()
}

function decrypt(v) {
	let hexStr = CryptoJS.enc.Hex.parse(v)
	let base64Str = CryptoJS.enc.Base64.stringify(hexStr)
	let decryptedData=CryptoJS.AES.decrypt(base64Str, secret, {
		iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	})
	let data=decryptedData.toString(CryptoJS.enc.Utf8)
	return data.toString()
}
let en = encrypt(passwd)
console.log(en)
console.log(decrypt(en))