<template>
  <div class="admin-articles-list">
    <div class="admin-articles-list-top">
      <div class="admin-articles-list-top-number">
        文字序号：{{23}}
      </div>
      <div class="admin-articles-list-top-time">
        {{'2016-3-23'}}
      </div>
      <div class="admin-articles-list-top-button">
        <span :class="{active}" @click="">隐藏</span>
        <span :class="{active}" @click="">删除</span>
        <span :class="{active}" @click="">编辑</span>
      </div>
    </div>
    <div class="admin-articles-list-content">
      <div class="admin-articles-list-content-img">
        <img src="" alt="">
      </div>
      <div class="admin-articles-list-content-text">
        <div class="admin-articles-list-content-text-title">
          <span class="admin-articles-list-content-text-title-main">{{'项目中文名称'}}</span>
          <span class="admin-articles-list-content-text-title-en">{{'Project name in English'}}</span>
        </div>
        <div class="admin-articles-list-content-text-more">
          <span class="admin-articles-list-content-text-tags">
            项目标签：{{'UE/UI/HTML Building'}}
          </span>
          <span class="admin-articles-list-content-text-authors">
            项目参与者：{{'胡兵兵 胡海南'}}
          </span>
          <span class="admin-articles-list-content-text-intro">
            项目简介：{{'项目描述摘要，项目描述摘要项目描述摘要项目描述摘要项目描述摘要项目描述摘要项目描述摘要项目描述摘要'}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import dropDown from 'components/dropDown/dropDown.vue'

  export default{
  	name:'admin-articles-list',
    data(){
  		return{
			  active:true
      }
    },
    components:{
	    dropDown
    }

  }
</script>
<style lang="less" scoped>
  @import "list";
</style>