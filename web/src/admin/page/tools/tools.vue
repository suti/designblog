<template>
  <div class="admin-tools">
    <transition name="display" mode="out-in">
      <div class="admin-tools-display" v-if="display">
        <adminBlock title="Holyhi Tools" :button="{des:'添加工具'}" @cmd="create">
          <adminTags :tags="[]" class="admin-articles-tags"></adminTags>
          <list
            class="inner-block-mb"
            v-for="e in lists"
          ></list>
          <page :current="1" :count="20" bgcolor="#ffffff"></page>
        </adminBlock>
      </div>
    </transition>
    <transition name="edit" mode="in-out">
      <edit class="admin-tools-edit" v-if="!display" @cancel="display=true"></edit>
    </transition>

  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
	import adminTags from '../../components/tags/tags.vue'
	import page from 'components/pagination/pagination.vue'
	import list from './comp/list/list.vue'
	import edit from './comp/edit/edit.vue'

	export default{
		name:'admin-tools',
		data(){
			return{
				lists:[1,2,3,4,5],
        display:true
			}
		},
		components:{
			adminBlock,
      adminTags,
      page,
      list,
      edit
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

  .admin-tools{

    .admin-articles-tags{
      margin-bottom: 28px;
    }
  }
</style>