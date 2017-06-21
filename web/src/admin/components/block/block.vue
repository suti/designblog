<template>
  <div class="admin-block">
    <div class="admin-block-title">
      <span class="admin-block-title-des">{{title}}</span>
      <span class="admin-block-title-count" v-show="count!==null">（{{count}}）</span>
      <div class="admin-block-title-button"
           v-show="button.des!==null"
           @click="$emit('cmd',button.cmd)"
      >
        <span>{{button.des}}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default{
  	name:'admin-block',
    data(){
  		return{}
    },
    props:{
    	title:{
    		default:'默认标题'
      },
    	count:{
    		default:null
      },
      button:{
    		default:{
    			des:null,
          cmd:null
        },
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-block{
    width: 880px;
    margin-bottom: 32px;

    .admin-block-title{
      height: 23px;
      padding-left: 16px;
      position: relative;
      margin-bottom: 20px;

      .admin-block-title-des{
        font-size: 18px;
        color: #333333;
        font-weight: bold;
        line-height: 25px;
      }

      .admin-block-title-count{
        font-size: 12px;
        color: #828282;
        font-weight: bold;
        line-height: 25px;
      }

      .admin-block-title-button{
        position: absolute;
        top:-3px;
        right:0;
        width: 110px;
        height: 30px;
        background: #EB1E27;
        border-radius: 2px;
        cursor: pointer;
        text-align: center;
        font-size: 18px;
        color: #FFFFFF;
        font-weight: bold;
        line-height: 32px;
      }


      &:after{
        content: '';
        position: absolute;
        top: 0;
        left:0;
        height: 100%;
        width: 5px;
        background: #EB1E27;
      }
    }
  }

</style>