<template>
  <div class="admin-others">
    <adminBlock title="其他" :button="{des:null}">
    </adminBlock>
    <adminBlock title="信箱" :button="{des:null}">
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'

	export default{
		name:'admin-others',
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
  .admin-others{

  }
</style>