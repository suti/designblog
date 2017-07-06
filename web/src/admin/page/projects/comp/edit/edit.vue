<template>
  <div class="admin-project-edit">
    <div class="admin-project-edit-cancel" @click="cancel">
      <span>返回</span>
    </div>
    <div class="admin-project-edit-content">
      <div class="admin-project-edit-content-intro">
        <editArea type="input" title="作品中文名" placeholder="输入作品中文名称" :required="true"></editArea>
        <editArea type="input" title="作品英文名" placeholder="输入作品英文名称" :required="true"></editArea>
        <editArea type="input" title="创作年份" placeholder="输入创作年份" :required="true"></editArea>
        <editArea type="input" title="客户名称" placeholder="输入客户名称" :required="true"></editArea>
        <editArea type="textarea" title="作品摘要" placeholder="作品摘要（140字以内）" :required="true"></editArea>
        <editArea type="input" title="作品标签" placeholder="作品标签，请用用“/”分隔" :required="true"></editArea>
        <editArea type="input" title="参与者" placeholder="参与者，请用用“ ”分隔" :required="true"></editArea>
        <editArea type="textarea" title="作品详细介绍" placeholder="作品详细介绍" :required="true"></editArea>
        <editArea type="input" title="相关链接" placeholder="输入相关链接" :required="false"></editArea>
        <uploadImage :mini="true" class="admin-project-edit-content-intro-img"></uploadImage>
        <div class="admin-project-edit-content-intro-button">
          <span>保存并发布</span>
          <span>取消</span>
        </div>
      </div>
      <div class="admin-project-edit-content-input">
        <Redit></Redit>
      </div>
    </div>
  </div>
</template>
<script>
  import editArea from '../../../../components/editarea/editArea.vue'
  import uploadImage from '../../../../components/uploadImage/uploadImage.vue'
  import Redit from '../../../../components/editarea/richTextEditor.vue'

  export default{
  	name:'admin-project-edit',
    data(){
  		return{}
    },
    components:{
	    editArea,
	    uploadImage,
	    Redit
    },
    methods:{
	    cancel(){
	    	this.$emit('cancel')
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-project-edit{
    width: 100%;

    &:after{
      content: '';
      display: block;
      clear: both;
    }

    .admin-project-edit-cancel{
      width: 88px;
      height: 40px;
      padding-left: 32px;
      box-sizing: border-box;
      position: relative;
      color: #000000;
      font-size: 18px;
      line-height: 42px;
      font-weight:bold;
      margin-bottom: 24px;
      cursor: pointer;
      display: table;

      &>span{
        display: table-cell;
        vertical-align: middle;
      }

      &:after{
        content: '';
        position: absolute;
        top:12px;
        left:0;
        width: 28px;
        height: 16px;
        background: url("../../../common/admin-cancel.svg") no-repeat 0 0;
      }

      &:hover{
        color: #EB1E27;

        &:after{
          background: url("../../../common/admin-cancel-hover.svg") no-repeat 0 0;
        }
      }
    }

    .admin-project-edit-content{
      width: 100%;
      min-width: 1234px;

      &:after{
        content: '';
        display: block;
        clear: both;
      }

      .admin-project-edit-content-intro{
        float: left;
        width: 474px;
        margin-right: 60px;

        .admin-project-edit-content-intro-img{
          margin-bottom: 24px;
        }

        .admin-project-edit-content-intro-button{
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

      .admin-project-edit-content-input{
        float: left;
        width: 700px;
        background: #E0E0E0;
      }
    }
  }
</style>