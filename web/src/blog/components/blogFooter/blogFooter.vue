<template>
  <div id="blog-footer">
    <div class="blog-footer-logo"></div>

    <div class="blog-footer-left">
      <div class="blog-footer-business-list">
        <div class="blog-footer-business-list-item">
          <span>Interaction Design 交互设计 (UE&UI)</span><span>Home/首页</span>
        </div>
        <div class="blog-footer-business-list-item">
          <span>Graphic Design 平面设计</span><span>Project/项目</span>
        </div>
        <div class="blog-footer-business-list-item">
          <span>Motion Graphic 动态图形</span><span>Articles/文章</span>
        </div>
        <div class="blog-footer-business-list-item">
          <span>Design Consultant 设计顾问</span><span>About Us/关于我们</span>
        </div>
      </div>

      <div class="blog-footer-business-address">
        <div class="blog-footer-business-address-item">
          <span>北京市朝阳区 水岸南街16号 城建N次方 A座662</span>
          <div class="blog-footer-business-address-item-logo weibo"></div>
          <span>Weibo</span>
        </div>
        <div class="blog-footer-business-address-item">
          <span>No.16,ShuiAn South Street,ChaoYang District,Beijing</span>
          <div class="blog-footer-business-address-item-logo wechat"></div>
          <span>WeChat</span>
        </div>
        <div class="blog-footer-business-address-item">
          <span>+86 186 1385 9561（Phone&Wechat）</span>
          <div class="blog-footer-business-address-item-logo bahance"></div>
          <span>Behance</span>
        </div>
        <div class="blog-footer-business-address-item">
          <span>bingo@holyhilab.com 胡兵兵</span>
          <div class="blog-footer-business-address-item-logo zcool"></div>
          <span>Zcool</span>
        </div>
      </div>
    </div>
    <div class="blog-footer-right">
      <p>设计咨询</p>
      <p>如果您有设计相关的任何问题需要帮助，请联系我们</p>
      <div class="blog-footer-right-input email">
        <input placeholder="E-Mail*">
      </div>
      <div class="blog-footer-right-input name">
        <input placeholder="您的联系方式/姓名">
      </div>
      <div class="blog-footer-right-underInput">
        <div class="blog-footer-right-underInput-mailAndTel">
          bingo@holyhilab.com
          +86 186 1385 9561
        </div>
        <div class="blog-footer-right-underInput-send">
          发送
        </div>
      </div>
    </div>

  <foot class="foot"></foot>
  </div>
</template>
<script>
  import foot from '../../../components/footer/footer.vue'
  export default{

    name:'blog-footer',
    data(){
      return {}
    },
    components:{
      foot
    },

    methods:{

    }

  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "./blogFooter.less";
</style>
