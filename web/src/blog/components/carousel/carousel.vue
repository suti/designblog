<template>
  <div id="blog-carousel">
    <div class="blog-carousel-pic">
      <img src="../../page/index/demo.png">
    </div>
    <div class="blog-carousel-spot-list">
      <div class="blog-carousel-spot-list-item"></div>
    </div>
    <div class="blog-carousel-title">
      {{title}}→
    </div>
  </div>

</template>
<script>
  export default{
    data(){
      return{
        title:'显示项目名称',
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "./carousel.less";
</style>