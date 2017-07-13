<template>
  <div id="blog-nav">
    <div
      class="blog-nav-list"
      v-for="item in list"
    >
      <span>{{item}}</span>
    </div>
    <div class="blog-nav-selected">
      <span>精选</span>
    </div>
    <div class="blog-nav-all">
      <span>全部</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        list:['网站','移动设备','平面','动态图形','插画','其他']
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less">
  @import "./blogNav.less";
</style>
