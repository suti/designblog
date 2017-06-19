<template>
  <div class="admin-comp-text" :style="{width:width+'px'}" @click="$refs.input.focus()">
    <div class="admin-comp-text-text"
         contenteditable="true"
         @input="input" ref="input"
         @click="getFocusOffset()"
         @keyup.up.down.left.right="getFocusOffset()"
    ></div>
    <div class="admin-comp-text-count">
      {{focusOffset+'/'+count}}
    </div>
  </div>
</template>
<script>
  export default{
  	name:'admin-comp-text',
    data(){
  		return{
  			inputValue:'',
			  focusOffset:0
      }
    },
    props:{
    	width:{
    		default:600
      }
    },
    methods:{
	    input(v){
		    this.inputValue=v.target.innerText
        this.$emit('value',this.inputValue)
        this.getFocusOffset()
	    },
      getFocusOffset(){
	      this.focusOffset=window.getSelection().focusOffset
      }
    },
    computed:{
    	count(){return this.inputValue.length}
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-comp-text{
    min-height:100px;
    padding: 8px 24px 40px 16px;
    border: 1px solid #E0E0E0;
    border-radius: 2px;
    background: #F8F8F8;
    position: relative;
    cursor: text;
    box-sizing: border-box;

    .admin-comp-text-text{
      font-size: 12px;
      color: #828282;
      line-height: 18px;
      overflow: hidden;

      &:focus{
        outline: none;
      }
    }

    .admin-comp-text-count{
      position: absolute;
      right:24px;
      bottom: 18px;
      font-size: 12px;
      color: #828282;
    }
  }
</style>
