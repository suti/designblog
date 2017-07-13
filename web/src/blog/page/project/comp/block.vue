<template>
  <div
    class="blog-project-block"
    :class="blockObj"
  >
    <div class="blog-project-block-pic">
      <img src="./blockImageExample.png">
    </div>
    <div class="blog-project-block-content">
      <span class="blog-project-block-content-engName">{{blockDate.englishName}}</span>
      <span class="blog-project-block-content-chineseName">{{blockDate.chineseName}}</span><span
      class="blog-project-block-content-year">{{blockDate.year}}</span>
      <span class="blog-project-block-content-customerName">{{blockDate.customerName}}</span>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        normalBlockSize:false,
        specialBlockSize:false
      }
    },
    props: {
      blockDate: {}
    },
    mounted(){
      //根据传输过来的属性来判断div的大小
      //需要使用计算属性吗？当前的样式
    },
    computed: {
      blockObj(){
        switch(this.blockDate.size){
          case '1':
            this.normalBlockSize=true;
            return {
              'normal':this.normalBlockSize
            }
            break;
          case '4':
            this.specialBlockSize=true;
            return {
              'special':this.specialBlockSize
            }
            break;
        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "./block.less";
</style>