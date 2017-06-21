<template>
  <div class="admin-comp-editArea">
    <div class="admin-comp-editArea-title" :class="{required}">
      {{title}}
    </div>
    <div class="admin-comp-editArea-input">
      <adminInput
        v-show="type==='input'"
        @input="input"
        :placeholder="placeholder"
      ></adminInput>
      <adminTextArea
        v-show="type==='textarea'"
        @input="input"
        :placeholder="placeholder"
        width="474"
      ></adminTextArea>
    </div>
  </div>
</template>
<script>
  import adminInput from '../textarea/input.vue'
  import adminTextArea from '../textarea/textarea.vue'

  export default{
    name:'admin-comp-editArea',
    data(){
    	return{}
    },
    props:{
    	title:{
    		default:'默认标题'
      },
	    required:{
    		default:false
      },
      type:{
    		default:'input'
      },
	    placeholder:{
		    default:''
	    }
    },
    components:{
	    adminInput,
	    adminTextArea
    },
    methods:{
    	input(e){
		    this.$emit('input',e)
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-comp-editArea{
    width: 474px;
    margin-bottom: 16px;

    .admin-comp-editArea-title{
      margin-bottom: 10px;
      display: inline-block;
      color: #4F4F4F;
      font-size: 14px;
      font-weight: bold;
      position: relative;

      &[class~='required']:after{
        position: absolute;
        content: '*';
        color: #EB1E27;
        font-weight: bold;
        font-size: 14px;
        top:0;
        right:-10px;
      }
    }
  }
</style>