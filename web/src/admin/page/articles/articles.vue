<template>
  <div class="admin-articles">
    <adminBlock title="文章列表" count="29" :button="{des:'创建文章'}" @cmd="">
      <adminTags :tags="[]"></adminTags>
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
	import adminTags from '../../components/tags/tags.vue'

	export default{
		name:'admin-articles',
		data(){
			return{

			}
		},
		components:{
			adminBlock,adminTags
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-articles{

  }
</style>