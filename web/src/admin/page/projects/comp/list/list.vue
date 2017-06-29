<template>
  <div class="admin-project-list">
    <div class="admin-project-list-top">
      <div class="admin-project-list-top-number">
        作品序号：{{23}}
      </div>
      <div class="admin-project-list-top-time">
        {{'2016-3-23'}}
      </div>
      <div class="admin-project-list-top-sort">
        <span>序号</span>
        <dropDown width="42" :data="{sel:'1',opt:[]}" :reSet="true" class="admin-project-list-top-list"></dropDown>
      </div>
      <div class="admin-project-list-top-size">
        <span>展示方式</span>
        <dropDown width="90" :data="{sel:'大尺寸',opt:[{des:'大尺寸',sel:true},{des:'小尺寸'}]}" :reSet="true" class="admin-project-list-top-list"></dropDown>
      </div>
      <div class="admin-project-list-top-button">
        <span :class="{active}" @click="">设为精选</span>
        <span :class="{active}" @click="">隐藏</span>
        <span :class="{active}" @click="">删除</span>
        <span :class="{active}" @click="">编辑</span>
      </div>
    </div>
    <div class="admin-project-list-content">
      <div class="admin-project-list-content-img">
        <img src="" alt="">
      </div>
      <div class="admin-project-list-content-text">
        <div class="admin-project-list-content-text-title">
          <span class="admin-project-list-content-text-title-main">{{'项目中文名称'}}</span>
          <span class="admin-project-list-content-text-title-en">{{'Project name in English'}}</span>
        </div>
        <div class="admin-project-list-content-text-more">
          <span class="admin-project-list-content-text-tags">
            项目标签：{{'UE/UI/HTML Building'}}
          </span>
          <span class="admin-project-list-content-text-authors">
            项目参与者：{{'胡兵兵 胡海南'}}
          </span>
          <span class="admin-project-list-content-text-intro">
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
  	name:'admin-project-list',
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