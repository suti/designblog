<template>
  <div id="design-blog-footer">
    <footer>
      <span>Copyright@2016-2017 古月创意(北京)文化科技有限公司   京ICP备16067929号</span>
    </footer>
  </div>
</template>
<script>
  export default{
  	name:'design-blog-footer',
  	data(){
  		return {}
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #design-blog-footer{
    width: 100%;
    height:40px;
    position: fixed;
    left:0;
    bottom:0;
    background: #F2F2F2;
    padding: 0 0 0 160px;

    &>footer>span{
      line-height: 40px;
      color: #4F4F4F;
      font-size: 14px;
    }
  }

</style>