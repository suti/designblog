<template>
  <div class="admin-project">
    <adminBlock title="项目列表" count="29" :button="{des:'创建项目'}" @cmd="createProject">
      <adminTags
        :tags="tags"
        @select="selectTags"
        class="admin-project-tags"
      ></adminTags>
      <page :current="1" :count="20" bgcolor="#ffffff"></page>
    </adminBlock>
  </div>
</template>
<script>
	import adminBlock from '../../components/block/block.vue'
	import adminTags from '../../components/tags/tags.vue'
  import page from 'components/pagination/pagination.vue'

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
			}
		},
		components:{
			adminBlock,adminTags,page
		},
    methods:{
	    createProject(){
	    	console.log('createProject')
      },
	    selectTags({e,i}){
	    	console.log(i,e)
      }
    },
	}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-project{

    .admin-project-tags{
      margin-bottom: 28px;
    }
  }
</style>