<template>
  <div class="admin-other-mail">
    <div class="admin-other-mail-line1">
      <span>{{title}}</span>
      <span>删除</span>
    </div>
    <div class="admin-other-mail-line2">
      <span class="title">E-mail</span>
      <span class="content">{{email}}</span>
    </div>
    <div class="admin-other-mail-line2">
      <span class="title">联系方式姓名</span>
      <span class="content">{{connect}}</span>
    </div>
  </div>
</template>
<script>
	export default{
		name:'admin-other-mail',
		data(){
			return{}
		},
    props:{
			title:{},
      email:{},
      connect:{}
    }

	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-other-mail{
    width: 880px;
    height:76px;
    padding: 8px 16px;
    box-sizing: border-box;
    background: #F8F8F8;

    .admin-other-mail-line1{
      width: 100%;
      height: 16px;
      margin-bottom: 4px;

      span{
        &:nth-child(1){
          color: #828282;
          font-size: 12px;
          font-weight: bold;
          float: left;
          line-height: 16px;
          display: inline-block;
        }
        &:nth-child(2){
          width: 38px;
          height: 14px;
          border: 1px solid #E0E0E0;
          background: #ffffff;
          border-radius: 2px;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          display: inline-block;
          float: right;
          cursor: pointer;
        }
      }
    }

    .admin-other-mail-line2{
      width: 100%;
      height: 16px;
      line-height: 16px;
      margin-bottom: 8px;
      
      .title{
        font-weight: bold;
        font-size: 12px;
        color: #333333;
        margin-right: 12px;
      }

      .content{
        font-weight: bold;
        font-size: 12px;
        color: #828282;
      }
    }
  }
</style>