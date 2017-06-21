<template>
  <div class="admin-comp-input">
    <input type="text" :placeholder="placeholder" @input="input">
  </div>
</template>
<script>
  export default{
  	name:'admin-comp-input',
    data(){
  		return{}
    },
    props:{
    	placeholder:{
    		default:''
      }
    },
    methods:{
    	input(e){
		    this.$emit('input',e.target.value)
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-comp-input{
    width: 474px;
    height:40px;
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

      ::placeholder{
        color: #BDBDBD;
      }

      &:focus{
        outline: none;
      }
    }

  }
</style>