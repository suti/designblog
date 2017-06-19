<template>
  <div id="admin-nav">
    <div class="admin-nav-list">
      <div
        class="admin-nav-list-li"
        v-for="(e,i) in nav"
        :class="{active:active[i]}"
        @click="$router.push(e.url)"
      >
        <span>{{e.des}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
  	name:'admin-nav',
    data(){
  		return{
        nav:[
          {
          	des:'Home/首页',
            url:'/admin'
          },
          {
          	des:'Projects/项目',
	          url:'/admin/projects'
          },
          {
          	des:'Articles',
	          url:'/admin/articles'
          },
          {
          	des:'Holyhi Tools',
	          url:'/admin/tools'
          },
          {
          	des:'Our Friends',
	          url:'/admin/friends'
          },
          {
          	des:'About us',
	          url:'/admin/about'
          },
          {
          	des:'其他',
	          url:'/admin/others'
          }
        ]
      }
    },
    computed:{
    	active(){
    		let index=test(this.nav,this.$route.path),array=[]
        if(index===null){
	        this.nav.map((e,i)=>{
	        	array[i]=false
          })
        }else {
	        this.nav.map((e,i)=>{
		        array[i]=(index===i)
	        })
        }
        return array
      }
    }
  }
  function test(a,b) {
    let index=null
    a.map((e,i)=>{
    	if(e.url===b){
    		index=i
      }
    })
    return index
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #admin-nav{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    width: 200px;
    outline:2px solid #f8f8f8;

    .admin-nav-list{
      width: 100%;
      height: auto;
      overflow: hidden;

      .admin-nav-list-li{
        width: 100%;
        height: 40px;
        background: #F2F2F2;
        padding-left: 18px;
        box-sizing: border-box;
        cursor: pointer;

        &>span{
          font-size: 14px;
          color: #4F4F4F;
          line-height: 40px;
          font-weight: bold;
        }

        &:hover,&[class~='active']{
          background: #EB1E27;
          
          &>span{
            color: #ffffff;
          }
        }
      }
    }
  }
</style>