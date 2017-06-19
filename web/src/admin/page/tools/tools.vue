<template>
  <div class="admin-tools">
    <adminBlock title="Holyhi Tools" :button="{des:'添加工具'}" @cmd="">
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'

	export default{
		name:'admin-tools',
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
  .admin-tools{

  }
</style>