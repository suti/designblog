<template>
  <div id="app">
    <adminHeader></adminHeader>
    <div id="admin-main">
      <adminNav></adminNav>
      <transition appear name="slide" mode="out-in">
        <router-view
          class="admin-main-view"
        ></router-view>
      </transition>
    </div>
    <adminFooter></adminFooter>
  </div>
</template>
<script>
  import adminFooter from '../../components/footer/footer.vue'
  import adminHeader from './adminHeader/adminHeader.vue'
  import adminNav from './adminNav/adminNav.vue'

  export default{
  	name:'',
  	data(){
  		return{
			  messages:'admin'
      }
    },
    components:{
	    adminFooter,adminHeader,adminNav
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
    background: #ffffff;
    padding: 80px 0 40px 0;
    box-sizing: border-box;

    #admin-main{
      width: 100%;
      height: 100%;
      padding-left: 200px;
      box-sizing: border-box;
      position: relative;
      background: #ffffff;

      .admin-main-view{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>