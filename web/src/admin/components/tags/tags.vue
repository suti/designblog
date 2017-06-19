<template>
  <div class="admin-comp-tags">
    <div class="admin-comp-tags-item" :class="{active:isAll}" @click="selAll">
      <span>全部</span>
    </div>
    <div
      class="admin-comp-tags-item"
      v-for="(e,i) in tags"
      @click="select({e,i})"
      :class="{active:active[i]}"
    >
      <span>{{e.des}}</span>
    </div>
  </div>
</template>
<script>
  export default{
  	name:'admin-comp-tags',
    data(){
  		return{
  			active:[]
      }
    },
    props:{
    	tags:{
    		default:[]
      }
    },
    computed:{
    	isAll(){
    		let flag=true
        this.active.forEach(e=>{
        	if(e)
        		flag=false
        })
        return flag
      }
    },
    mounted(){
	    let array=[]
	    this.tags.map((e,i)=>{
		    array[i]=false
	    })
	    this.active=array
    },
    methods:{
    	selAll(){
    		let array=[]
		    this.tags.map((e,i)=>{
			    array[i]=false
		    })
        this.active=array
		    this.$emit('select',{e:-1,i:-1})
      },
	    select({e,i}){
		    let array=[]
		    this.tags.map((e,i)=>{
			    array[i]=false
		    })
		    this.active=array
    		this.$set(this.active,i,true)
        this.$emit('select',{e,i})
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-comp-tags{
    width: 100%;
    max-width: 880px;
    height: auto;

    &:after{
      content: '';
      display: block;
      clear: both;
    }

    .admin-comp-tags-item{
      height: 24px;
      padding: 0 12px;
      background: #ffffff;
      outline: 1px solid #EB1E27;
      cursor: pointer;
      float: left;
      margin-right: 6px;
      font-size: 12px;
      color: #EB1E27;
      line-height: 24px;
      text-align: center;
      font-weight: bold;

      &[class~='active']{
        background: #EB1E27;
        color: #ffffff;
      }
    }
  }
</style>