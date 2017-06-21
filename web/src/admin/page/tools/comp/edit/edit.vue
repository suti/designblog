<template>
  <div class="admin-tools-edit">
    <div class="admin-tools-edit-cancel" @click="cancel">
      <span>返回</span>
    </div>
    <div class="admin-tools-edit-content">
      <div class="admin-tools-edit-content-intro">
        <editArea type="input" title="中文名称" placeholder="输入作品中文名称" :required="true"></editArea>
        <editArea type="input" title="英文名称" placeholder="输入作品英文名称" :required="true"></editArea>
        <editArea type="textarea" title="工具简介" placeholder="工具简介摘要（140字以内）" :required="true"></editArea>
        <editArea type="input" title="Slogan" placeholder="" :required="false"></editArea>
        <uploadImage :mini="true" class="admin-tools-edit-content-intro-img"></uploadImage>
        <div class="admin-tools-edit-content-intro-button">
          <span>保存并发布</span>
          <span>取消</span>
        </div>
      </div>
      <div class="admin-tools-edit-content-input">

      </div>
    </div>
  </div>
</template>
<script>
  import editArea from '../../../../components/editarea/editArea.vue'
  import uploadImage from '../../../../components/uploadImage/uploadImage.vue'

  export default{
  	name:'admin-tools-edit',
    data(){
  		return{}
    },
    components:{
	    editArea,
	    uploadImage
    },
    methods:{
	    cancel(){
	    	this.$emit('cancel')
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-tools-edit{
    width: 100%;

    &:after{
      content: '';
      display: block;
      clear: both;
    }

    .admin-tools-edit-cancel{
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

    .admin-tools-edit-content{
      width: 100%;
      min-width: 1234px;

      &:after{
        content: '';
        display: block;
        clear: both;
      }

      .admin-tools-edit-content-intro{
        float: left;
        width: 474px;
        margin-right: 70px;

        .admin-tools-edit-content-intro-img{
          margin-bottom: 24px;
        }

        .admin-tools-edit-content-intro-button{
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

      .admin-tools-edit-content-input{
        float: left;
        width: 600px;
        height: 800px;
        background: #E0E0E0;
      }
    }
  }
</style>