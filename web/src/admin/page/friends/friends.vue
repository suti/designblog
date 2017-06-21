<template>
  <div class="admin-friends">
    <adminBlock title="Partner/合作伙伴" :button="{des:'添加伙伴'}" @cmd="">
      <uploadImage class="inner-block-mb"></uploadImage>
      <uploadImage class="inner-block-mb"></uploadImage>
      <uploadImage class="inner-block-mb"></uploadImage>
    </adminBlock>
    <adminBlock title="Clients‘s Evaluation/客户评价" :button="{des:'添加评论'}" @cmd="">
      <createEvaluation></createEvaluation>
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
	import uploadImage from '../../components/uploadImage/uploadImage.vue'
  import createEvaluation from './comp/createEvaluation.vue'

	export default{
		name:'admin-friends',
		data(){
			return{

			}
		},
		components:{
			adminBlock,
      uploadImage,
			createEvaluation
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-friends{
    .inner-block-mb{
      margin-bottom: 4px;
    }
  }
</style>