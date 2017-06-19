<template>
  <div class="admin-block">
    <div class="admin-block-title">
      {{title}}
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default{
  	name:'admin-block',
    data(){
  		return{}
    },
    props:{
    	title:{
    		default:'默认标题'
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-block{
    width: 100%;
    margin-bottom: 32px;

    .admin-block-title{
      width: 100%;
      height: 23px;
      padding-left: 16px;
      position: relative;
      margin-bottom: 20px;

      font-size: 18px;
      color: #333333;
      font-weight: bold;
      line-height: 25px;

      &:after{
        content: '';
        position: absolute;
        top: 0;
        left:0;
        height: 100%;
        width: 5px;
        background: #EB1E27;
      }
    }
  }

</style>