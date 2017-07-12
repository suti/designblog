/**
 * Created by suti on 2017/7/8.
 */
const express = require('express')
const Promise = require('bluebird')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const routers = require('../api')
const db = new (require('../db/dbfunc'))

let app = express()
app.use(cookieParser('bingo_blog_cookies'+Date.now()))
app.use(session({
	resave: true,
	saveUninitialized: false,
	secret: 'bingo_blog_sessions'+Date.now(),
	cookie:{maxAge:60000,httpOnly:true}
}))

app.use('/',routers)

app.listen(2233)

