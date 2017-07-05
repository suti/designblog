<template>
  <div class="admin-evaluation-list">
    <div class="admin-evaluation-list-line1">
      <div class="admin-evaluation-list-name">
        <span>客户名称：</span>
        <span>{{data.name}}</span>
      </div>
      <div class="admin-evaluation-list-button">
        <span>删除</span>
        <span>编辑</span>
      </div>
    </div>
    <div class="admin-evaluation-list-line2">
      <span>评价内容：</span>
      <span>{{data.content}}</span>
    </div>
  </div>

</template>
<script>
  export default{
  	name:'admin-evaluation-list',
    data(){
  		return{}
    },
    props:{
    	data:{
    		default:{
    			name:"客户名称",
          content:"评价内容"
        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-evaluation-list{
    width: 880px;
    min-height:95px;
    background: #F8F8F8;
    padding: 16px 12px 0 16px;
    box-sizing: border-box;

    .admin-evaluation-list-line1{
      width: 100%;
      height: 16px;
      margin-bottom: 6px;

      .admin-evaluation-list-name{
        float: left;
        width: 700px;
        height: 100%;

        span{
          font-size:12px;
          line-height: 16px;
          display: block;
          float: left;
          
          &:nth-child(1){
            margin-right: 4px;
            font-weight: bold;
            color: #333333;
            width: 60px;
          }
          
          &:nth-child(2){
            color: #828282;
          }
        }
      }
      
      .admin-evaluation-list-button{
        float: right;
        height: 100%;
        width: 88px;

        span{
          display: block;
          float: left;
          width: 38px;
          height: 14px;
          line-height: 14px;
          border: 1px solid #E0E0E0;
          font-weight: bold;
          font-size: 12px;
          color: #828282;
          text-align: center;
          background: transparent;
          border-radius: 2px;
          cursor: pointer;

          &:nth-child(2){
            color: #ffffff;
            background: #EB1E27;
            border: 1px solid #EB1E27;
            margin-left: 8px;
          }
        }
      }
    }

    .admin-evaluation-list-line2{
      width: 100%;
      min-height: 60px;

      span{
        font-size:12px;
        display: block;
        line-height: 18px;

        &:nth-child(1){
          float: left;
          width: 60px;
          margin-right: 4px;
          height: 100%;
          color: #333333;
          font-weight: bold;
        }
        
        &:nth-child(2){
          color: #828282;
          width: 600px;
        }
      }
    }
  }

</style>