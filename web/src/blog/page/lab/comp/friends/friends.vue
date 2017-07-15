<template>
  <div id="blog-lab-content-friends">
    <div class="blog-lab-content-friends-evaluation">
      <div class="blog-lab-content-friends-evaluation-title"><span>Client's Evaluation/</span><span>客户评价</span></div>
      <div class="blog-lab-content-friends-evaluation-block" v-for="item in evaluationList">
        <div class="blog-lab-content-friends-evaluation-content">
          {{item.content}}
        </div>
        <div class="blog-lab-content-friends-evaluation-name">
          ———{{item.name}}
        </div>
      </div>
    </div>
    <div class="blog-lab-content-friends-partner">
      <div class="blog-lab-content-friends-partner-title"><span>Partner/</span><span>合作伙伴</span></div>
      <div class="blog-lab-content-friends-partner-picList">
        <div class="blog-lab-content-friends-partner-block">
          <img src="">
        </div>
        <div class="blog-lab-content-friends-partner-block">
          <img src="">
        </div>
        <div class="blog-lab-content-friends-partner-block">
          <img src="">
        </div>
        <div class="blog-lab-content-friends-partner-block">
          <img src="">
        </div>
        <div class="blog-lab-content-friends-partner-block">
          <img src="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        evaluationList: [{
          content: '客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，'+
          '客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，'+
            '客户评价内容，客户评价', name: '客户姓名'
        }, {
          content: '客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，'+
          '客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，客户评价内容，'+
            '客户评价内容，客户评价', name: '客户姓名'
        }, {
          content: '客户评价内容，客户评价内容，客户评价内容', name: '客户姓名'
        }, {
          content: '客户评价内容，客户评价内容，客户评价内容', name: '客户姓名'
        }]
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "./friends.less";
</style>