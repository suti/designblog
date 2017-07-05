<template>
  <div class="admin-about">
    <transition name="display" mode="out-in">
      <div class="admin-about-display" v-if="display">
        <adminBlock title="About Us/关于我们" :button="{des:'添加模块儿'}" @cmd="create">
          <list v-for="e in lists" class="inner-block-mb"></list>
        </adminBlock>
      </div>
    </transition>
    <transition name="edit" mode="in-out">
      <edit class="admin-about-edit" v-if="!display" @cancel="display=true"></edit>
    </transition>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
  import edit from './comp/edit/edit.vue'
  import list from './comp/list/list.vue'

	export default{
		name:'admin-about',
		data(){
			return{
				display:true,
        lists:[1,2,3,4,5]
			}
		},
		components:{
			adminBlock,
			edit,
      list
		},
		methods:{
			create(){
				this.display=false
			},
		}
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../common/admin-common-style";

  .admin-about{

  }
</style>