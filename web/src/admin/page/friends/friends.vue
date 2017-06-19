<template>
  <div class="admin-friends">
    <adminBlock title="Partner/合作伙伴" :button="{des:'添加伙伴'}" @cmd="">
    </adminBlock>
    <adminBlock title="Clients‘s Evaluation/客户评价" :button="{des:'添加评论'}" @cmd="">
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'

	export default{
		name:'admin-friends',
		data(){
			return{

			}
		},
		components:{
			adminBlock
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-friends{

  }
</style>