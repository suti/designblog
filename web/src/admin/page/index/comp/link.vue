<template>
  <div class="admin-index-link">
    <div class="admin-index-link-title">{{title}}</div>
    <adminDropDown
      :data="{sel:'未选择分类',opt:[{des:'分类1'},{des:'分类2'},{des:'分类3'}],id:null}"
      :reSet="true" class="admin-index-link-sel"
    ></adminDropDown>
    <adminDropDown
      :data="{sel:'选择显示内容',opt:[{des:'内容'},{des:'内容'},{des:'内容'}],id:null}"
      :reSet="true" class="admin-index-link-sel"
    ></adminDropDown>
  </div>
</template>
<script>
	import adminDropDown from 'components/dropDown/dropDown.vue'

  export default{
  	name:'admin-index-link',
    data(){
  		return{}
    },
    props:{
    	title:{
    		default:''
      }
    },
    components:{adminDropDown}
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-index-link{
    width: 880px;
    height: 70px;
    background: #F8F8F8;
    padding: 20px 20px 25px 15px;
    box-sizing: border-box;

    .admin-index-link-title{
      float: left;
      height: 24px;
      line-height: 24px;
      min-width: 100px;
      margin-right: 8px;
      color: #333333;
      font-weight: bold;
      font-size: 12px;
    }
    
    .admin-index-link-sel{
      float: left;
      margin-right: 8px;
    }
  }
</style>