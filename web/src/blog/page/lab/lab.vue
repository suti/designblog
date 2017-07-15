<template>
  <div id="blog-lab">
    <div class="blog-lab-nav">
      <span
        v-for="(e,i) in navList"
        @click="navClick({e,i})"
        :class="{active:navActive[i]}"
      >
        {{e}}
      </span>
    </div>
    <div class="blog-lab-content">
      <transition name="fade" mode="out-in">
        <component :is="currentView"></component>
      </transition>
    </div>
  </div>
</template>
<script>

  import about from './comp/about/about.vue'
  import articles from './comp/articles/articles.vue'
  import friends from './comp/friends/friends.vue'
  import tools from './comp/tools/tools.vue'

  export default{
    data(){
      return {
        navList: ['Articles', 'Holyhi Tools', 'Our Friends', 'About us'],
        navActive: ['Articles'],
        currentView:'articles'
      }
    },
    components: {
      about, articles, friends, tools
    },
    methods: {
      navClick({e, i}){
        this.navActive = [];
        this.$set(this.navActive, i, true);
        switch(e){
          case 'Articles':
            this.currentView='articles';
            break;
          case 'Holyhi Tools':
            this.currentView='tools';
            break;
          case 'Our Friends':
            this.currentView='friends';
            break;
          case 'About us':
            this.currentView='about'
            break;
        }
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="less" scoped>
  @import "./lab.less";
</style>