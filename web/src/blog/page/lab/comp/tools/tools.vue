<template>
  <div id="blog-lab-content-tools">
    <div class="blog-lab-content-tools-block" v-for="item in list">
      <div class="blog-lab-content-tools-block-pic">
        <img src="./demo.png">
      </div>
      <div class="blog-lab-content-tools-block-shadow"></div>
      <div class="blog-lab-content-tools-block-textContent">
        <div class="blog-lab-content-tools-block-textContent-englishName">
          {{item.englishName}}
        </div>
        <div class="blog-lab-content-tools-block-textContent-chineseName">
          {{item.chineseName}}
        </div>
        <div class="blog-lab-content-tools-block-textContent-abstract">
          {{item.abstract}}
        </div>
        <div class="blog-lab-content-tools-block-textContent-slogan">
          {{item.slogan}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        list: [{
          englishName: 'Holyhi Language', chineseName: '好厉害语言', abstract: '基于Google Metarial Design 与创客贴合作研发的一套针对WEB端和移动端的交互设计语'+
        '言，旨在系统化、高效率、优雅的方式的解决互联网产品的设计问题。', slogan: '勇于探索，挑战未知！'
        }, {
          englishName: 'Holyhi Language', chineseName: '好厉害语言', abstract: '基于Google Metarial Design 与创客贴合作研发的一套针对WEB端和移动端的交互设计语'+
        '言，旨在系统化、高效率、优雅的方式的解决互联网产品的设计问题。', slogan: '勇于探索，挑战未知！'
        }, {
          englishName: 'Holyhi Language', chineseName: '好厉害语言', abstract: '基于Google Metarial Design 与创客贴合作研发的一套针对WEB端和移动端的交互设计语'+
        '言，旨在系统化、高效率、优雅的方式的解决互联网产品的设计问题。', slogan: '勇于探索，挑战未知！'
        }, {
          englishName: 'Holyhi Language', chineseName: '好厉害语言', abstract: '基于Google Metarial Design 与创客贴合作研发的一套针对WEB端和移动端的交互设计语'+
        '言，旨在系统化、高效率、优雅的方式的解决互联网产品的设计问题。', slogan: '勇于探索，挑战未知！'
        }, {
          englishName: 'Holyhi Language', chineseName: '好厉害语言', abstract: '基于Google Metarial Design 与创客贴合作研发的一套针对WEB端和移动端的交互设计语'+
        '言，旨在系统化、高效率、优雅的方式的解决互联网产品的设计问题。', slogan: '勇于探索，挑战未知！'
        }, {
          englishName: 'Holyhi Language', chineseName: '好厉害语言', abstract: '基于Google Metarial Design 与创客贴合作研发的一套针对WEB端和移动端的交互设计语'+
        '言，旨在系统化、高效率、优雅的方式的解决互联网产品的设计问题。', slogan: '勇于探索，挑战未知！'
        }, {
          englishName: 'Holyhi Language', chineseName: '好厉害语言', abstract: '基于Google Metarial Design 与创客贴合作研发的一套针对WEB端和移动端的交互设计语'+
        '言，旨在系统化、高效率、优雅的方式的解决互联网产品的设计问题。', slogan: '勇于探索，挑战未知！'
        }]
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "./tools.less";
</style>