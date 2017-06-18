const fs = require('fs')
const glob = require('glob')
const path = require('path')
const postcss = require('postcss')
const sprites = require('postcss-sprites')
const bgMerge = require('./bgMerge')
const rimraf = require('rimraf')


// 取得生成的style路径
let patten = path.join(__dirname, '..') + '/dist/*.style.*.css'
let arr = glob.sync(patten)
let imgArr = []

arr.map(function(e, i) {
	let css = fs.readFileSync(e, 'utf8')

	let reg = new RegExp('/dist/(.*).style.*.css', 'g')
	reg.test(e)

	let opts = {
		stylesheetPath: './dist',
		spritePath: './dist/images/' + RegExp.$1 + '/',
		hooks: {
			onUpdateRule: function(rule, token, image) {
				let temp=false
				console.log(rule.toString())
				rule.walkDecls('background',e=>{
					temp=parseBg(e.value)
				})
				//记录合并的图片路径
				rule.walkComments(e=>{
					imgArr.push(e.toString().substring(12,e.toString().length-3))
				})
				if(token.prop==='background'){
					temp=parseBg(token.value)
				}
				let bgP=parsePosition(temp.backgroundPosition),
					x=isNaN(Number.parseInt(bgP[0]))?0:Number.parseInt(bgP[0]),
					y=isNaN(Number.parseInt(bgP[1]))?0:Number.parseInt(bgP[1])
				//
				let backgroundImage = postcss.decl({
					prop: 'background-image',
					value: 'url(' + image.spriteUrl + ')'
				})
				let backgroundPosition = postcss.decl({
					prop: 'background-position',
					value: (Number.parseInt(image.coords.x)-(-x)) + 'px ' + (Number.parseInt(image.coords.y)-(-y)) + 'px'
				})
				let backgroundRepeat = postcss.decl({
					prop: 'background-repeat',
					value: temp.backgroundRepeat
				})
				rule.append(backgroundImage)
				rule.append(backgroundRepeat)
				rule.append(backgroundPosition)
			}
		}
	}
	postcss(bgMerge())
		.process(css, {
			from: e,
			to: e
		})
		.then(function(result) {
			postcss([sprites(opts)])
				.process(result.css, {
					from: e,
					to: e
				})
				.then(function(result) {
					fs.writeFileSync(e, result.css)
					imgArr.forEach(e=>{
						delImg(e)
					})
				})
		})

})

function delImg(f) {
	let pattern=path.join(__dirname, '..') + '/dist/'+f
	let imgArr=glob.sync(pattern)
	imgArr.forEach(e=>{
		rimraf.sync(e)
		console.log('delete ',e)
	})
}

//解析background
function parseBg(str) {
	console.log('progress: '+str)
	if(typeof str !=='string') return
	let arr = str.split(' '),
		index=null,others=[],
		backgroundPosition=[0,0],
		backgroundRepeat='inherit'

	for(let i=0;i<arr.length;i++){
		if(/^(no-)?repeat(-x|-y)?$/.test(arr[i])){
			backgroundRepeat=arr.splice(i,1)[0]
			break
		}
	}

	let tempPosition=[]
	for(let i=0;i<arr.length;i++){
		if(/^(top|right|bottom|left|center)$/.test(arr[i])){
			tempPosition[0]=arr.splice(i,1)[0]
			if(/^(top|right|bottom|left|center)$/.test(arr[i])){
				tempPosition[1]=arr.splice(i,1)[0]
			}else {
				tempPosition[1]='center'
			}
			backgroundPosition=tempPosition
			break
		}
		if(/^(-)?[0-9]*(px|%)?$/.test(arr[i])){
			tempPosition[0]=arr.splice(i,1)[0]
			if(/^(-)?[0-9]*(px|%)?$/.test(arr[i])){
				tempPosition[1]=arr.splice(i,1)[0]
			}else {
				tempPosition[1]='50%'
			}
			backgroundPosition=tempPosition
			break
		}
	}

	others=arr.join(' ').replace(/url(?:\(['"]?)(.*?)(?:['"]?\))/gi,'')

	return{backgroundPosition,backgroundRepeat,others}
}

function parsePosition(v,token) {
	v.map((e,i)=>{
		if(/(top|right|bottom|left|center)/.test(e)){
			switch (e){
				case 'top':
					v[i]=0
					break
				case 'left':
					v[i]=0
					break
				default:
					console.error('background-position auto-merge failed (值不应为'+e+')')
			}
		}
	})
	return v
}