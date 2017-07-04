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
      <div>
        <input placeholder="E-Mail*">
      </div>
    </div>

  <foot></foot>
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
  #blog-footer .blog-footer-logo{
    width: 97px;
    height: 40px;
    margin: 20px 0;
    background: url("../../../common/images/LOGO40px.svg") no-repeat 0 0;
  }

  .blog-footer-left{
    float: left;
  }
  .blog-footer-left .blog-footer-business-list{
    font-size:14px;
    .blog-footer-business-list-item{
      span:nth-child(1){
        display: inline-block;
        width: 244px;
      }
      span:nth-child(2){
        margin-left: 166px;
       }
    }
  }
  .blog-footer-left .blog-footer-business-address{
    margin-top: 24px;
    font-size:14px;
    color: #9b9b9b;

    .blog-footer-business-address-item{
      span:nth-child(1){
        width: 334px;
        display: inline-block;
      }

      .blog-footer-business-address-item-logo{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 74px;
      }
      .wechat{
        background: url("./img/footer-wechat.svg") 0 0 no-repeat;
        &:hover{
           background: url("./img/footer-wechat-active.svg") 0 0 no-repeat;
         }
      }
      .weibo{
        background: url("./img/footer-weibo.svg") 0 0 no-repeat;
        &:hover{
           background: url("./img/footer-weibo-active.svg") 0 0 no-repeat;
         }
      }
      .bahance{
        background: url("./img/footer-behance.svg") 0 0 no-repeat;
        &:hover{
           background: url("./img/footer-behance-active.svg") 0 0 no-repeat;
         }
      }
      .zcool{
        background: url("./img/footer-zcool.svg") 0 0 no-repeat;
        &:hover{
           background: url("./img/footer-zcool-active.svg") 0 0 no-repeat;
         }
      }

      span:nth-child(2){
        margin-left: 8px;
        display: inline-block;
      }

    }
  }
  .blog-footer-right{
    float: right;

    p:nth-child(1){
      font-weight: 600;
    }

    p:nth-child(2){
      color: #9b9b9b;
    }

    >div{
     width: 380px;
     height: 40px;
     background-color: white;
      >input{
        width: 380px;
        border: 0;
        padding: 10px 5px;
        &:focus{
          outline: none;
          border: 1px solid red;
        }
      }
    }

  }
</style>