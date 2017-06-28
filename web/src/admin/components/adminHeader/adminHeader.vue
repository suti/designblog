<template>
  <div id="admin-header">
    <div class="admin-header-logo"></div>
    <div class="admin-header-user">
      <div class="admin-header-user-type">
        <span>{{'管理员账号'}}</span>
      </div>
      <div class="admin-header-user-name">
        <span>{{'lxy96@outlook.com'}}</span>
        <div class="admin-header-user-pop">
          <router-link to="/admin/account" tag="span">账号管理</router-link>
          <span>退出登录</span>
        </div>
      </div>
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
    z-index: 99;

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
      padding-top: 18px;
      box-sizing: border-box;

      &>div>span{
        color: #4F4F4F;
        font-size: 18px;
        font-weight: bold;
      }

      .admin-header-user-type{
        height: 20px;
        line-height: 20px;
      }

      .admin-header-user-name{
        height: 40px;
        line-height: 30px;
        position: relative;
        cursor: pointer;

        &:after{
          content: '';
          position: absolute;
          top:2px;
          right:-2px;
          width: 12px;
          height: 8px;
          background: url("./Triangle.svg") no-repeat 0 0;
        }

        &:hover{
          .admin-header-user-pop{
            display: block;
          }
        }

        .admin-header-user-pop{
          width: 200px;
          height: 80px;
          outline: 1px solid #E0E0E0;
          background: #F8F8F8;
          position: absolute;
          top:40px;
          left:0;
          display: none;

          &>span{
            display: block;
            line-height: 40px;
            height: 40px;
            width: 100%;
            padding-left: 16px;
            box-sizing: border-box;
            color: #4F4F4F;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>