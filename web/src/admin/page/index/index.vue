<template>
  <div class="admin-index">
    <adminBlock title="介绍文字" :button="{des:null}">
      <div class="admin-index-intro">
        <adminText width="600" placeholder="介绍文字" class="admin-index-intro-text"></adminText>
        <div class="admin-index-intro-button">
          <span>确认</span>
          <span>取消</span>
        </div>
      </div>
    </adminBlock>
    <adminBlock title="Banner图" :button="{des:null}">
      <uploadImage
        class="inner-block-mb"
      ></uploadImage>
      <uploadImage
        class="inner-block-mb"
      ></uploadImage>
      <uploadImage
        class="inner-block-mb"
      ></uploadImage>
      <uploadImage
        class="inner-block-mb"
      ></uploadImage>
      <uploadImage
        class="inner-block-mb"
      ></uploadImage>
    </adminBlock>
    <adminBlock title="推荐链接" :button="{des:null}">
      <adminDropDown
        :data="{sel:'选择显示的数量',opt:[{des:'显示4个'},{des:'显示8个'},{des:'显示12个'}],id:null}"
        :reSet="true" class="admin-index-sel"
      ></adminDropDown>
      <adminLink
        title="自定义推荐链接"
        class="inner-block-mb"
      ></adminLink>
      <adminLink
        title="自定义推荐链接"
        class="inner-block-mb"
      ></adminLink>
      <adminLink
        title="自定义推荐链接"
        class="inner-block-mb"
      ></adminLink>
      <adminLink
        title="自定义推荐链接"
        class="inner-block-mb"
      ></adminLink>
      <adminLink
        title="自定义推荐链接"
        class="inner-block-mb"
      ></adminLink>
    </adminBlock>
  </div>
</template>
<script>
	import uploadImage from '../../components/uploadImage/uploadImage.vue'
	import adminText from '../../components/textarea/textarea.vue'
	import adminBlock from '../../components/block/block.vue'
  import adminDropDown from 'components/dropDown/dropDown.vue'
  import adminLink from './comp/link.vue'

	export default{
		name:'admin-index',
		data(){
			return{

			}
		},
		components:{
			adminBlock,
      uploadImage,
      adminText,
      adminDropDown,
      adminLink
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-index{
    padding: 35px 50px;
    box-sizing: border-box;

    .admin-index-sel{
      margin-bottom: 22px;
    }

    .inner-block-mb{
      margin-bottom: 4px;
    }

    .admin-index-intro{

      &:after{
        content: '';
        display: block;
        clear: both;
      }

      .admin-index-intro-text{
        float: left;
        margin-right: 10px;
      }
      
      .admin-index-intro-button{
        float: left;
        width: 24px;
        
        &>span{
          display: block;
          width: 57px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          color: #FFFFff;
          font-size: 12px;
          background: #BDBDBD;
          margin-bottom: 6px;
          border-radius: 2px;
          cursor: pointer;

          &:hover{

          }
        }
      }
    }
  }
</style>