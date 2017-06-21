<template>
  <div class="admin-friends-createEvaluation">
    <editArea type="input" title="客户名称" placeholder="输入客户名称" :required="true"></editArea>
    <editArea type="textarea" title="评价内容" placeholder="输入评价内容" :required="true"></editArea>
    <div class="admin-friends-edit-content-intro-button">
      <span>保存并发布</span>
      <span>取消</span>
    </div>
  </div>
</template>
<script>
	import editArea from '../../../components/editarea/editArea.vue'

	export default{
    name:'admin-friends-createEvaluation',
    data(){
    	return{}
    },
    components:{
	    editArea
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-friends-createEvaluation{
    width: 880px;
    padding: 16px 30px;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 4px;
    background: #F8F8F8;

    .admin-friends-edit-content-intro-button{
      height: 30px;

      &>span{
        display: inline-block;
        margin-right: 16px;
        padding:0 16px;
        height: 28px;
        line-height: 30px;
        cursor: pointer;
        border-radius: 2px;
        box-sizing: content-box;
        font-size: 18px;
        font-weight: bold;

        &:nth-child(1){
          color: #ffffff;
          background: #EB1E27;
          border: 1px solid #EB1E27;
        }
        &:nth-child(2){
          color: #828282;
          background: transparent;
          border: 1px solid #E0E0E0;
        }
      }
    }
  }
</style>