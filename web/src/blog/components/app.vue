<template>
  <div id="app">
    <div id="hz-admin-main">
      <blogHeader></blogHeader>
      <transition appear name="slide" mode="out-in">
        <router-view
          class="view"
        ></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import blogHeader from './blogHeader/blogHeader.vue'
  export default{
  	name:'',
  	data(){
  		return{
			  messages:"blog"
      }
    },
    mounted(){

    },
    components:{
    	blogHeader
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "layout";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100%;
    padding:0 40px;
    box-sizing: content-box;
    margin: 0 auto;

    #hz-admin-main{
      padding-top: 80px;
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      position: relative;
    }
  }
</style>