<template>
  <div class="admin-about">
    <adminBlock title="About Us/关于我们" :button="{des:'添加模块儿'}" @cmd="">
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'

	export default{
		name:'admin-about',
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
  .admin-about{

  }
</style>