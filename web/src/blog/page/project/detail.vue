<template>
  <div id="blog-project-detail">
    <div class="blog-project-detail-left">
      <div class="blog-project-detail-left-englishName">
        ProjectName in English
      </div>
      <div class="blog-project-detail-left-chineseNameAndYear">
        <span>项目中文名称</span><span>2017</span>
      </div>
      <div class="blog-project-detail-left-customerName">
        客户名称
      </div>
      <div class="blog-project-detail-left-style">
        UE/UI/HTML Building
      </div>
      <div class="blog-project-detail-left-author">
        胡兵兵 胡海南
      </div>
      <div class="blog-project-detail-left-projectDescription">
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
        项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，项目描述，
      </div>
      <div class="blog-project-detail-left-website">
        www.Holyhilab.com
      </div>
    </div>
    <div class="blog-project-detail-right">
      <div class="blog-project-detail-right-pic">
        <img src="./comp/blockImageExample.png">
      </div>
      <div class="blog-project-detail-right-pic">
        <img src="./comp/blockImageExample.png">
      </div>
      <!--分割线-->
      <div class="blog-project-detail-right-zhanwei"></div>
      <p>更多项目</p>
      <div class="blog-project-detail-right-moreProject">
        <router-view>
          
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "./detail.less";
</style>