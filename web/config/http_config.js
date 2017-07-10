/**
 * Created by suti on 2017/6/20.
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env_config'

axios.interceptors.request.use(config=>{
	let {url,data}=config
	if(env.env==='dev'){
		url='/localapi'+url+'.do'
	}else {
		url+='.do'
	}
	typeof data==='object'?data['data_type']='json':data={data_type:'json'}
	console.log(data)
	config.url=url
	config.params=data
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

