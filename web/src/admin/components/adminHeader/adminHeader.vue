<template>
  <div id="admin-header">
    <div class="admin-header-logo">

    </div>
    <div class="admin-header-user">

    </div>
  </div>
</template>
<script>
  export default{
  	name:'admin-header',
    data(){
  		return{}
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #admin-header{
    width: 100%;
    height: 80px;
    position: fixed;
    top:0;
    left:0;
    padding: 0 0 0 16px;
    background: #F8F8F8;

    .admin-header-logo{
      width: 97px;
      height: 40px;
      float: left;
      margin: 20px 0;
      background: url("../../../common/images/LOGO40px.svg") no-repeat 0 0;
    }
    
    .admin-header-user{
      float: right;
      margin-right: 40px;
      height: 100%;
      min-width: 200px;
    }
  }
</style>