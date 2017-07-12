/**
 * Created by suti on 2017/7/8.
 */
const express = require('express')
const router = express.Router()
const db =new (require('../db/dbfunc'))

const login = require('./admin/login')
const logout = require('./admin/logout')
const addArticles = require('./admin/addArticles')
const addProjects = require('./admin/addProjects')
const addUsers = require('./admin/addUsers')
const removeArticles = require('./admin/removeArticles')
const removeProjects = require('./admin/removeProjects')
const removeUsers = require('./admin/removeUsers')
const updateArticles = require('./admin/updateArticles')
const updateProjects = require('./admin/updateProjects')
const updateUsers = require('./admin/updateUsers')
const getProjects = require('./blog/getProjects')
const getArticles = require('./blog/getArticles')
const getTypes = require('./blog/getTypes')

router.use('/',(req,res,next)=> {
	if (req.session && req.session.user) {
		db.checkUserExist(req.session.user).then(resolve => {
			console.log('has this ' + req.session.user)
			req.session.userType=resolve.type
			next()
		}, reject => {
			req.session.destroy()
			next()
		})
	} else {
		next()
	}
})

module.exports=[
	router,
	login,
	logout,
	addArticles,
	addProjects,
	addUsers,
	removeArticles,
	removeProjects,
	removeUsers,
	updateUsers,
	updateProjects,
	updateArticles,
	getArticles,
	getTypes,
	getProjects
]