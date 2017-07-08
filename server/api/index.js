/**
 * Created by suti on 2017/7/8.
 */
const login = require('./admin/login')
const logout = require('./admin/logout')
const getProjects = require('./blog/getProjects')

module.exports=[
	login,logout,getProjects
]