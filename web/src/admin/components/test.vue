<template>
  <div>
    <button @click="login">login</button>
    <button @click="logout">logout</button>
    <button @click="gA">getArticle</button>
    <button @click="aA">addArticle</button>
    <button @click="uA">updateArticle</button>
    <button @click="rA">removeArticle</button>
    <button @click="gP">getProject</button>
    <button @click="aP">addProject</button>
    <button @click="uP">updateProject</button>
    <button @click="rP">removeProject</button>
    <button @click="aU">addUser</button>
    <button @click="uU">updateUser</button>
    <button @click="rU">removeUser</button>
    <button @click="gT">getType</button>
  </div>
</template>
<script>
  export default{
  	data(){
  		return{

      }
    },
  	methods:{
      login(){
      	this.$http.post('admin/login',{user:'lxy1',passwd:'nihao123'})
          .then(e=>console.log(e),err=>console.log(err))
      },
      logout(){
      	this.$http.post('admin/logout')
          .then(e=>console.log(e),err=>console.log(err))
      },
      gA(){
      	this.$http.post('blog/getArticle',{})
          .then(e=>console.log(e),err=>console.log(err))
      },
      aA(){
	      this.$http.post('admin/addArticle',{chTitle:'test',tag:['123','222']})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      uA(){
	      this.$http.post('admin/updateArticle',{chTitle:'nu',tag:['123','222'],author:'lxy',
          profile:'as',createTime:Date.now(),introduce:'re',
		      url:'asd',imgUrl:'ds',markdown:'#fd',showKind:0,sort:1,isShow:true,isRecommend:true,id:1})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      rA(){
      	this.$http.post('admin/removeArticle',{id:1})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      gP(){
	      this.$http.post('blog/getProject',{})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      aP(){
	      this.$http.post('admin/addProject',{chTitle:'test',tag:['123','222']})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      uP(){
	      this.$http.post('admin/updateProject',{chTitle:'tesead',enTitle:'fasd',tag:['1','2'],author:'lxy',
          profile:'ttt',createTime:Date.now(),introduce:'terfdf',
		      url:'a',imgUrl:'imgurl',markdown:'#w',showKind:1,sort:1,isShow:true,isRecommend:false,id:1})
		      .then(e=>console.log(e),err=>console.log(err))
      },
		  rP(){
			  this.$http.post('admin/removeProject',{id:1})
				  .then(e=>console.log(e),err=>console.log(err))
		  },
      aU(){
	      this.$http.post('admin/addUser',{user:'test@test.com',passWd:'test',type:0})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      uU(){
	      this.$http.post('admin/updateUser',{user:'test@test.com',passWd:'test1',type:0})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      rU(){
	      this.$http.post('admin/removeUser',{user:'test@test.com'})
		      .then(e=>console.log(e),err=>console.log(err))
      },
      gT(){
	      this.$http.post('blog/getType',{})
		      .then(e=>console.log(e),err=>console.log(err))
      }
    }
  }
</script>