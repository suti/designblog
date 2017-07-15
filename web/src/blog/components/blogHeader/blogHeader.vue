<template>
  <div id="blog-header">
    <div class="blog-header-logo"></div>
    <div class="blog-header-nav">
      <div
        class="blog-header-list"
        v-for="(e,i) in nav"
        :class="{active:navActive[i]}"
        @click="navClick({e,i})"
      >
        <span
          class="blog-header-list-pop"
        >{{e.pop}}</span>
        <span class="blog-header-list-des">{{e.des}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
  	name:'blog-header',
    data(){
  		return{
  			nav:[
          {des:'Home',pop:'首页',url:'/blog'},
          {des:'Project',pop:'项目',url:'/blog/project'},
          {des:'Holyhi Lab',pop:'好厉害实验室',url:'/blog/lab'},
        ],
        navActive:[]
      }
    },
    mounted(){

    },
    methods:{
	    navClick({i,e}){
	    	this.$set(this.navActive,i,true)
        this.$router.push(e.url);
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #blog-header{
    width: 100%;
    height: 80px;
    background: rgba(255,255,255,0);
    position: absolute;
    top:0;
    left:0;

    .blog-header-logo{
      width: 97px;
      height: 40px;
      float: left;
      margin: 20px 0;
      background: url("../../../common/images/LOGO40px.svg") no-repeat 0 0;
    }

    .blog-header-nav{
      width: auto;
      height: 100%;
      padding: 20px 0;
      box-sizing: border-box;
      float: right;
      
      .blog-header-list{
        float: left;
        margin-left: 32px;
        height: 100%;

        span{
          display: block;
          cursor: pointer;
        }

        &[class~='active'],&:hover{
          .blog-header-list-pop{
            opacity: 1;
          }
          .blog-header-list-des{
            color: #EB1E27;
          }
        }
        
        .blog-header-list-pop{
          color: #000;
          font-weight: bold;
          font-size: 12px;
          opacity: 0;
          transition: opacity .6s ease;


        }

        .blog-header-list-des{
          color: #828282;
          font-size: 18px;
        }
      }
    }
  }
</style>
