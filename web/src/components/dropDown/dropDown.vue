<template>
  <div class="common-drop-down" :style="{width:width+'px'}">
    <div class="common-drop-down-sel">
      <span>{{da.sel}}</span>
    </div>
    <div class="common-drop-down-drop">
      <div
        class="common-drop-down-drop-option"
        v-for="(e,i) in da.opt"
        :class="{disabled:e.dis,selected:e.sel}"
        @click="!e.dis&&test(i)"
      >
        {{e.des}}
      </div>
    </div>
  </div>
</template>
<script>
  export default{
  	name:'common-drop-down',
    data(){
  		return{
        da:{
	        sel:'',
	        opt:[]
        }
      }
    },
    props:{
    	data:{
    		required:true,
        default:{
        	sel:'',
          opt:[],
          id:null
        }
      },
      reSet:{
    		required:true
      },
      width:{
    		default:155
      }
    },
    mounted(){
    	let {sel,opt,id}=this.data
      this.da={sel,opt,id}
    },
    watch:{
	    data(){
		    let {sel,opt,id}=this.data
		    this.da={sel,opt,id}
      },
	    reSet(){
		    let {sel,opt,id}=this.data
		    this.da={sel,opt,id}
	    }
    },
    methods:{
    	test(j){
    		let arr=[]
        for(let i=0;i<this.da.opt.length;i++){
	        arr[i]={dis:this.da.opt[i].dis,des:this.da.opt[i].des,sel:i===j,id:this.da.opt[i].id}
        }
		    this.$set(this.da,'sel',arr[j].des)
		    this.$emit('select',arr[j])
        this.$set(this.da,'opt',arr)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import './dropDown';
</style>