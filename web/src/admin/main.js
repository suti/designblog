/**
 * Created by suti on 2017/6/18.
 */
import Vue from 'vue'
import App from './components/app.vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import store from './store/index'
import http from 'config/http_config'

Vue.use(VueRouter)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes
})

new Vue({
	el: '#app',
	router: router,
	store,
	render: h => h(App)
})
