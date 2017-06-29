<template>
  <div class="admin-comp-uploadImage" :style="{width:(mini?474:880)+'px'}">
    <div class="admin-comp-uploadImage-line1">
      <div class="admin-comp-uploadImage-title">
        <span>{{'图片1'}}</span>
      </div>
      <div class="admin-comp-uploadImage-button">
        <span>上传图片</span>
      </div>
      <input v-show="!mini" type="text" class="admin-comp-uploadImage-url" placeholder="如有链接，请输入跳转链接">
    </div>
    <div class="admin-comp-uploadImage-line2">
      <div class="admin-comp-uploadImage-states">
        已经上传：{{''}}
      </div>
    </div>
    <div class="admin-comp-uploadImage-progress"></div>
  </div>
</template>
<script>
  export default{
  	name:'admin-comp-uploadImage',
    data(){
  		return{

      }
    },
    methods:{
    	button(){

      }
    },
    props:{
    	mini:{
    		default:false
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-comp-uploadImage{
    width: 880px;
    height:80px;
    background: #F8F8F8;
    position: relative;
    padding: 20px 16px 16px 16px;
    box-sizing: border-box;

    .admin-comp-uploadImage-line1{
      height: 24px;
      width:100%;

      .admin-comp-uploadImage-title{
        height: 24px;
        margin-right: 10px;
        min-width: 36px;
        font-size: 12px;
        color: #333333;
        font-weight: bold;
        line-height: 24px;
        float: left;
      }

      .admin-comp-uploadImage-button{
        width:72px;
        height: 24px;
        background: #EB1E27;
        margin-right: 14px;
        line-height: 23px;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        float: left;
        text-align: center;
      }

      .admin-comp-uploadImage-url{
        width: 300px;
        height: 22px;
        line-height: 22px;
        padding: 0 4px;
        box-sizing: border-box;
        border: 1px solid #E0E0E0;
        font-size: 12px;
        color: #4a4a4a;
        float: left;

        ::placeholder{
          color: #BDBDBD;
        }

        &:focus{
          outline: none;
        }
      }
    }

    .admin-comp-uploadImage-line2{
      width: 100%;
      height: 12px;
      line-height: 12px;
      margin-top: 8px;
      color: #828282;
      font-size: 12px;
      font-weight:bold;
    }

    .admin-comp-uploadImage-progress{
      position: absolute;
      height: 2px;
      /*width: 70%;*/
      left:0;
      bottom: 0;
      background: #EB1E27;
    }
  }
</style>