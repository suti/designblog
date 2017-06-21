<template>
  <div class="admin-project">
    <transition name="display" mode="out-in">
      <div class="admin-project-display" v-if="display">
        <adminBlock title="项目列表" count="29" :button="{des:'创建项目'}" @cmd="createProject">
          <adminTags
            :tags="tags"
            @select="selectTags"
            class="admin-project-tags"
          ></adminTags>
          <projectList
            class="inner-block-mb"
            v-for="e in lists"
          ></projectList>
          <page :current="1" :count="20" bgcolor="#ffffff"></page>
        </adminBlock>
      </div>
    </transition>
    <transition name="edit" mode="in-out">
      <edit class="admin-project-edit" v-if="!display" @cancel="display=true"></edit>
    </transition>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
	import adminTags from '../../components/tags/tags.vue'
  import page from 'components/pagination/pagination.vue'
  import projectList from './comp/list/list.vue'
  import edit from './comp/edit/edit.vue'


	export default{
		name:'admin-project',
		data(){
			return{
				tags:[
					{des:'精选',active:false},
					{des:'网站',active:false},
					{des:'移动设备',active:false},
					{des:'平面',active:false},
					{des:'插画',active:false},
					{des:'其他',active:false},
				],
        lists:[1,2,3,4,5],
				display:true
			}
		},
		components:{
			adminBlock,
      adminTags,
      page,
			projectList,
			edit
		},
    methods:{
	    createProject(){
	    	console.log('createProject')
        this.display=false
      },
	    selectTags({e,i}){
	    	console.log(i,e)
      }
    },
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../common/admin-common-style";

  .admin-project{

    .admin-project-tags{
      margin-bottom: 28px;
    }
  }
</style>