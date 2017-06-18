<template>
  <div id="app">
    {{messages}}
    <div id="hz-admin-main-content">
      <transition appear name="slide" mode="out-in">
        <router-view
          class="view"
        ></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  export default{
  	name:'',
  	data(){
  		return{
			  messages:"blog"
      }
    },
    mounted(){
  		console.log('ok')
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: 100%;
    padding-left: 118px;
    box-sizing: border-box;
    background: #FAFAFA;

    #hz-admin-main-content{
      padding: 0 48px;
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      overflow-y:auto;
    }
  }
</style>