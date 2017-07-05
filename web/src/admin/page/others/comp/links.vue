<template>
  <div class="admin-other-link">
    <div class="admin-other-link-title">
      {{title}}
    </div>
    <div class="admin-other-link-link">
      <input type="text" :placeholder="placeholder" @input="input">
    </div>
    <div class="admin-other-link-button">
      <div class="admin-other-link-button-icon"></div>
      <div class="admin-other-link-button-text">
        在新窗口打开页面
      </div>
    </div>
  </div>
</template>
<script>

  export default{
  	name:'admin-other-link',
    data(){
  		return{}
    },
    props:{
	    title:{},
	    placeholder:{}
    },
    components:{
    },
    methods:{
	    input(e){
	    	this.$emit('value',e.target.value)
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-other-link{
    width: 880px;
    height: 62px;
    padding: 20px 16px 18px 16px;
    box-sizing: border-box;
    background: #F8F8F8;

    .admin-other-link-title{
      height: 24px;
      width: 60px;
      margin-right: 24px;
      float: left;
      line-height: 24px;
      font-size: 12px;
      font-weight: bold;
      color: #333333;
    }

    .admin-other-link-link{
      float: left;
      margin-right: 12px;

      width: 313px;
      height:24px;
      box-sizing: border-box;
      outline: 1px solid #E0E0E0;
      padding: 0 10px;
      background: #ffffff;

      &>input{
        color: #4a4a4a;
        line-height:40px;
        font-size:14px;
        border:none;
        width:100%;
        height:100%;
        padding:0;

        ::placeholder{
          color: #BDBDBD;
        }

        &:focus{
          outline: none;
        }
      }
    }
    
    .admin-other-link-button{
      float: left;
      height: 24px;

      .admin-other-link-button-icon{
        width: 24px;
        height: 24px;
        background: #ffffff;
        outline: 1px solid #BDBDBD;
        margin-right: 8px;
        float: left;
        transition: all .4s ease;
        cursor: pointer;
        
        &:after{
          content: '';
          margin: 4px;
          width: 16px;
          height: 16px;
          display: block;
          background: #E0E0E0;
          transition: all .4s ease;
        }

        &[class~='active'],&:hover{
          outline: 1px solid #EB1E27;

          &:after{
            background: #EB1E27;
          }
        }
      }
      
      .admin-other-link-button-text{
        float: left;
        line-height: 24px;
        color: #4F4F4F;
        font-size: 12px;
      }
    }
  }
</style>