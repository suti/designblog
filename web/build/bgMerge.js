/**
 * Created by suti on 2017/6/14.
 */
let postcss = require('postcss')

module.exports= postcss.plugin('bgMerge',function bgMerge(){
	return css => {
		css.walkRules(rule=>{
			let background='',
				backgroundPosition='',
				backgroundRepeat='',
				backgroundImage='',
				backgroundNewValue=''
			// console.log(rule.toString())
			rule.walkDecls((decl,i)=>{
				if(decl.prop==='background'){
					if(hasImageUrl(decl.value)){
						let bg=separateImgUrl(decl.value)
						background=bg[1]
						backgroundImage=bg[0]
					}else {
						background=decl.value
					}
					decl.remove()
				}
				if(decl.prop==='background-image'){
					backgroundImage=decl.value
					decl.remove()
				}
				if(decl.prop==='background-position'){
					backgroundPosition=decl.value
					decl.remove()
				}
				if(decl.prop==='background-repeat'){
					backgroundRepeat=decl.value
					decl.remove()
				}
			})
			backgroundNewValue=background+' '+backgroundImage+' '+backgroundRepeat+' '+backgroundPosition
			backgroundNewValue=test(backgroundNewValue)
			// backgroundImage=test(backgroundImage)

			if(backgroundNewValue!=='') {
				rule.append(
					postcss.decl({
						prop: 'background',
						value: backgroundNewValue
					})
				)
				// console.log('background:',backgroundNewValue)
			}
			// if(backgroundImage!==''){
			// 	rule.append(
			// 		postcss.decl({
			// 			prop: 'background-image',
			// 			value: backgroundImage
			// 		})
			// 	)
			// 	// console.log('background:-image',backgroundImage)
			// }
		});
	}
});

function test(v) {
	let a= v.replace(/\s+/g," ")
	return a.replace(/(^\s+)|(\s+$)/g,"")
}

function hasImageUrl(rule) {
	return /url(?:\(['"]?)(.*?)(?:['"]?\))/gi.test(rule);
}

function hasImageInRule(rule) {
	return /background[^:]*.*url[^;]+/gi.test(rule);
}
//分离background imgUrl
function separateImgUrl(v){
	let arr = v.split(' '),a,b=[]
	for(let i=0;i<arr.length;i++){
		if(hasImageUrl(arr[i])){
			a=arr[i]
		}else {
			b.push(arr[i])
		}
		// console.log(b)
	}
	return [a,b.join(' ')]
}