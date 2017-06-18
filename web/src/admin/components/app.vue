<template>
  <div id="app">
    {{messages}}
    <div id="admin-main-content">
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
			  messages:'admin'
      }
    },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: 100%;
    background: #FAFAFA;
  }
</style>