<template>
  <div class="admin-account">
    <adminBlock title="账号管理" :button="{des:'添加用户'}" @cmd="">
      <addUser></addUser>
      <list></list>
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
  import list from './comp/list.vue'
  import addUser from './comp/addUser.vue'

	export default{
		name:'admin-account',
		data(){
			return{

			}
		},
		components:{
			adminBlock,
			list,
			addUser
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../common/admin-common-style";

  .admin-account{

  }
</style>