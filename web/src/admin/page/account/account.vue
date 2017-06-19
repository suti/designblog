<template>
  <div class="admin-account">
    <adminBlock title="账号管理" :button="{des:'添加用户'}" @cmd="">

    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'

	export default{
		name:'admin-account',
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
  .admin-account{

  }
</style>