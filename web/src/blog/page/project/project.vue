<template>
  <div id="blog-project-view">
    <blogNav></blogNav>

    <div class="blog-project-all">
      <router-link to="/blog/project/detail">
          <blockPop
            v-for="item in list"
            :blockDate="item"
            :key="item.englishName"
          >
          </blockPop>
      </router-link>
      <div style="clear: both"></div>
    </div>

  </div>
</template>

<script>
  import blogNav from '../../components/blogNav/blogNav.vue'
  import blockPop from './comp/block.vue'
  export default{
    data(){
      return {
        list:[{englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'4'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'4'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          {englishName:'projectName in English',chineseName:'项目中文名称',year:'2017',customerName:'客户名称',size:'1'},
          ]
      }
    },
    components:{
      blogNav,blockPop
    },
  }
</script>
<style rel="stylesheet/less" lang="less">

</style>
