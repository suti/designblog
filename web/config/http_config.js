/**
 * Created by suti on 2017/6/20.
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.interceptors.request.use(config=>{
	let {url,params}=config
	url+='.do'
	typeof params==='object'?params.data_type='json':params={data_type:'json'}
	config.url=url
	config.params=params
	return config
},error=>{

	return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
	// Do something with response data
	return response
}, function (error) {
	// Do something with response error
	return Promise.reject(error)
});

Vue.use(VueAxios, axios)

