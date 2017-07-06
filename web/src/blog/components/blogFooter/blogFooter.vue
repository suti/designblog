<template>
  <div id="blog-footer">
    <div class="blog-footer-logo"></div>

    <div class="blog-footer-left">

      <div class="blog-footer-left-business">
        <span>Interaction Design 交互设计 (UE&UI)</span>
        <span>Graphic Design 平面设计</span>
        <span>Motion Graphic 动态图形</span>
        <span>Design Consultant 设计顾问</span>
      </div>
      <div class="blog-footer-left-nav">
        <span>Home/首页</span>
        <span>Project/项目</span>
        <span>Articles/文章</span>
        <span>About Us/关于我们</span>
      </div>
      <div class="blog-footer-left-address">
        <span>北京市朝阳区 水岸南街16号 城建N次方 A座662</span>
        <span>No.16,ShuiAn South Street,ChaoYang District,Beijing</span>
        <span>+86 186 1385 9561（Phone&Wechat）</span>
        <span>bingo@holyhilab.com 胡兵兵</span>
      </div>

      <div class="blog-footer-left-media">
        <div class="blog-footer-left-media-item">
          <div class="blog-footer-left-media-item-logo weibo"></div>
          <span>Weibo</span>
        </div>
        <div class="blog-footer-left-media-item">
          <div class="blog-footer-left-media-item-logo wechat"></div>
          <span>WeChat</span>
        </div>
        <div class="blog-footer-left-media-item">
          <div class="blog-footer-left-media-item-logo bahance"></div>
          <span>Behance</span>
        </div>
        <div class="blog-footer-left-media-item">
          <div class="blog-footer-left-media-item-logo zcool"></div>
          <span>Zcool</span>
        </div>
      </div>


    </div>
    <div class="blog-footer-right">
      <span>设计咨询</span>
      <span>如果您有设计相关的任何问题需要帮助，请联系我们</span>
      <div class="blog-footer-right-input email">
        <input placeholder="E-Mail*" @click="show =!show">
      </div>
      <transition name="fade">
        <div class="blog-footer-right-input name" v-if="show">
          <input placeholder="您的联系方式/姓名">
        </div>
      </transition>
      <div class="blog-footer-right-underInput">
        <transition name="fade" mode="in-out">
          <div class="blog-footer-right-underInput-mailAndTel" v-if="show">
            bingo@holyhilab.com
            +86 186 1385 9561
          </div>
        </transition>
        <transition name="slide-fade">
          <div class="blog-footer-right-underInput-button" v-if="show">发送</div>
        </transition>
      </div>
    </div>

    <foot class="foot"></foot>
  </div>
</template>
<script>
  import foot from '../../../components/footer/footer.vue'
  export default{

    data(){
      return {
        show: false,
      }
    },
    components: {
      foot
    },

    methods: {}

  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "./blogFooter.less";
</style>
