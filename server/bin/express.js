/**
 * Created by suti on 2017/7/8.
 */
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const routers = require('../api')

let app = express()
app.use(cookieParser('bingo_blog_cookies'))
app.use(session({
	resave: true,
	saveUninitialized: false,
	secret: 'bingo_blog_sessions',
	cookie:{maxAge:60000,httpOnly:true}
}))

app.use('/',(req,res,next)=>{
	if(req.session&&req.session.user){
		console.log(req.session.user)
		next()
	}else{
		next()
	}
})

app.use('/',routers)

app.listen(2233)
