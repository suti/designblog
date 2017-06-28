<template>
  <div class="admin-account-list">
    <div class="admin-account-list-name">
      {{name}}
      <span v-show="isMyself">（我）</span>
    </div>
    <dropDown class="admin-account-list-select"></dropDown>
    <div class="admin-account-list-button">
      <span>删除</span>
      <span>修改密码</span>
    </div>
  </div>
</template>
<script>
  import dropDown from 'components/dropDown/dropDown.vue'

  export default{
  	name:'admin-account-list',
    data(){
  		return{}
    },
    props:{
	    name:{},
      isMyself:{}
    },
    components:{
	    dropDown
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-account-list{
    width: 880px;
    height: 70px;
    padding: 23px 16px;
    box-sizing: border-box;
    background: #F8F8F8;
    
    .admin-account-list-name{
      float: left;
      width: 200px;
      height: 24px;
      line-height: 24px;
      color: #333333;
      font-size: 12px;
      font-weight: bold;
      margin-right: 16px;

      &>span{
        color: #EB1E27;
      }
    }
    
    .admin-account-list-select{
      float: left;
    }

    .admin-account-list-button{
      float: right;
      width: 120px;
      height: 24px;

      &>span{
        display: inline-block;
        height: 22px;
        padding: 0 6px;
        border: 1px solid #E0E0E0;
        background: #ffffff;
        line-height: 22px;
        font-weight: bold;
        color: #828282;
        font-size: 12px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;

        &:nth-child(2){
          margin-left: 8px;
          color: #ffffff;
          background: #EB1E27;
          border: 1px solid #EB1E27;
        }
      }
    }
  }
</style>