<template>
  <div class="admin-articles-edit">
    <div class="admin-articles-edit-cancel" @click="cancel">
      <span>返回</span>
    </div>
    <div class="admin-articles-edit-content">
      <div class="admin-articles-edit-content-intro">
        <editArea type="input" title="文章标题" placeholder="输入作品中文名称" :required="true"></editArea>
        <editArea type="input" title="作者姓名" placeholder="输入作者姓名名称" :required="true"></editArea>
        <editArea type="input" title="创作年月日" placeholder="年月日（如：2017-5-18）" :required="true"></editArea>
        <editArea type="textarea" title="文章摘要" placeholder="文章简介摘要（140字以内）" :required="true"></editArea>
        <editArea type="input" title="文章标签" placeholder="作品标签，请用用“/”分隔" :required="true"></editArea>
        <editArea type="input" title="相关链接" placeholder="输入相关链接" :required="false"></editArea>
        <uploadImage :mini="true" class="admin-articles-edit-content-intro-img"></uploadImage>
        <div class="admin-articles-edit-content-intro-button">
          <span>保存并发布</span>
          <span>取消</span>
        </div>
      </div>
      <div class="admin-articles-edit-content-input">

      </div>
    </div>
  </div>
</template>
<script>
  import editArea from '../../../../components/editarea/editArea.vue'
  import uploadImage from '../../../../components/uploadImage/uploadImage.vue'

  export default{
  	name:'admin-articles-edit',
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
  .admin-articles-edit{
    width: 100%;

    &:after{
      content: '';
      display: block;
      clear: both;
    }

    .admin-articles-edit-cancel{
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

    .admin-articles-edit-content{
      width: 100%;
      min-width: 1234px;

      &:after{
        content: '';
        display: block;
        clear: both;
      }

      .admin-articles-edit-content-intro{
        float: left;
        width: 474px;
        margin-right: 70px;

        .admin-articles-edit-content-intro-img{
          margin-bottom: 24px;
        }

        .admin-articles-edit-content-intro-button{
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

      .admin-articles-edit-content-input{
        float: left;
        width: 600px;
        height: 800px;
        background: #E0E0E0;
      }
    }
  }
</style>