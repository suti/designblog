<template>
  <div class="admin-index">
    <adminBlock title="介绍文字">
      <div class="admin-index-intro">
        <adminText width="600"></adminText>
      </div>
    </adminBlock>
    <adminBlock title="Banner图">
      <uploadImage></uploadImage>
    </adminBlock>
    <adminBlock title="推荐链接">
      <uploadImage></uploadImage>
    </adminBlock>
  </div>
</template>
<script>
	import uploadImage from '../../components/uploadImage/uploadImage.vue'
	import adminText from '../../components/textarea/textarea.vue'
	import adminBlock from '../../components/block/block.vue'

	export default{
		name:'admin-index',
		data(){
			return{

			}
		},
		components:{
			adminBlock,uploadImage,adminText
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-index{
    padding: 35px 50px;
    box-sizing: border-box;
  }
</style>