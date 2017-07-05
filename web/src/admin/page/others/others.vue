<template>
  <div class="admin-others">
    <adminBlock title="其他" :button="{des:null}">
      <list
        class="inner-block-mb"
        title="微博链接"
        placeholder="输入跳转链接"
      ></list>
      <list
        class="inner-block-mb"
        title="Behance"
        placeholder="输入跳转链接"
      ></list>
      <list
        class="inner-block-mb"
        title="站酷链接"
        placeholder="输入跳转链接"
      ></list>

      <uploadImage></uploadImage>

    </adminBlock>
    <adminBlock title="信箱" :button="{des:null}">
      <mail email="lxy96@outlook.com" connect="1787738272934" class="inner-block-mb"></mail>
      <mail email="lxy96@outlook.com" connect="1787738272934" class="inner-block-mb"></mail>
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
  import list from './comp/links.vue'
  import mail from './comp/mails.vue'
	import uploadImage from '../../components/uploadImage/uploadImage.vue'

	export default{
		name:'admin-others',
		data(){
			return{
			}
		},
		components:{
			adminBlock,
			list,
			uploadImage,
			mail
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../common/admin-common-style";

  .admin-others{

  }
</style>