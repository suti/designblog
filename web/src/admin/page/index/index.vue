<template>
  <div class="test">
    <div class="t1"></div>
    <div class="t2"></div>
    <div class="t3"></div>
  </div>
</template>
<script>
  export default{
  	data(){
  		return{

      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .t1{
    width: 22px;
    height: 22px;
    background-image: url('22pxBianji.svg');
    background-repeat: no-repeat;
    background-position: 0 -30px;

    &:hover{
      background: url("22pxBianji.svg") no-repeat 0 -60px;
    }
  }
  .t2{
    width: 22px;
    height: 22px;
    border:1px solid #FFFFff;
    background-position: 0 0;
    background-image: url('22pxBianjiguigou.svg');

    &:hover{
      background: url("22pxBianjiguigou.svg") no-repeat 0 -30px;
    }
  }
  .t3{
    width: 22px;
    height: 22px;
    background: url('22pxBofang.svg') no-repeat 0 0px;

    &:hover{
      background: url('22pxBofang.svg') no-repeat 0 -30px;
    }
  }
</style>