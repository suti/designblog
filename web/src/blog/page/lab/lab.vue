<template>
  <div id="blog-lab">
    <div class="blog-lab-nav">
      <span
        v-for="(e,i) in navList"
        @click="navClick({e,i})"
        :class="{active:navActive[i]}"
      >
        {{e}}
      </span>
    </div>
    <div>
      <transition>
        <router-view name=""></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        navList:['Articles','Holyhi Tools','Our Friends','About us'],
        navActive:[]
      }
    },
    methods:{
      navClick({e,i}){
//        console.log(e,i);
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "./lab.less";
</style>