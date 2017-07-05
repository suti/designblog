<template>
  <div class="admin-friends">
    <adminBlock title="Partner/合作伙伴" :button="{des:'添加伙伴'}" @cmd="">
      <uploadImage class="inner-block-mb"></uploadImage>
      <uploadImage class="inner-block-mb"></uploadImage>
      <uploadImage class="inner-block-mb"></uploadImage>
    </adminBlock>
    <adminBlock title="Clients‘s Evaluation/客户评价" :button="{des:'添加评论'}" @cmd="">
      <createEvaluation></createEvaluation>
      <evaluation
        v-for="e in lists"
        class="inner-block-mb"
      ></evaluation>
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
	import uploadImage from '../../components/uploadImage/uploadImage.vue'
  import createEvaluation from './comp/createEvaluation.vue'
  import evaluation from './comp/evaluation.vue'

	export default{
		name:'admin-friends',
		data(){
			return{
        lists:[1,2,3,4,5]
			}
		},
		components:{
			adminBlock,
      uploadImage,
			createEvaluation,
			evaluation
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../common/admin-common-style";

  .admin-friends{
  }
</style>