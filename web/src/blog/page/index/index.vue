<template>
  <div id="blog-index">

    <carousel></carousel>

    <div class="blog-index-introduction">
      <span>更多实验室信息→</span>
      <span>Holyhi互动媒体设计实验室，专注于 “情景化” 设计语言的探索和实践，通
        过思维产生理念，业务领域涵盖UE&UI、用户体验、品牌形象、视频动画等
        新媒体设计。我们主张持续的、动态的设计理念，并不断尝试其在各种不同
        媒介上的应对策略。
      </span>
    </div>

    <!--瀑布流-->
    <waterfall
      :boxRect="boxRect"
      :eleData="eleData"
      :listSum="listSum"
    >
      <template scope="waterfall">
        <div :style="waterfall.listData.boxStyle" class="test">
          <img :style="waterfall.listData.imgStyle">
        </div>
      </template>
    </waterfall>

  </div>
</template>
<script>
  import waterfall from '../../components/waterFall/waterfall.vue'
  import carousel from '../../components/carousel/carousel.vue'

  export default{
    name: 'blog-index',
    data(){
      return {
        // 容器矩形
        boxRect: {
          // 图片的宽度
          width: 224,
          top: 8,
          right: 8,
          left: 8,
          bottom: 65,
          // 每个模板之间的间距
          marginLeft: 8,
          marginTop: 8
        },
        // 数据
        eleData: [],
        // 列数
        listSum: 0
      }
    },
    components: {
      waterfall,carousel
    },

    methods: {

    }

  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "./index.less";
</style>