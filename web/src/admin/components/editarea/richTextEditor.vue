<template>
  <div class="admin-comp-richEdit"></div>
</template>
<script>
  import Wang from 'wangeditor'

  export default{
	  name: 'editor',
	  data () {
		  return {
			  editorContent: ''
		  }
	  },
	  methods: {
		  getContent: function () {
			  alert(this.editorContent)
		  }
	  },
	  mounted() {
		  let editor = new Wang('.admin-comp-richEdit')
		  editor.customConfig.onchange = (html) => {
			  this.editorContent = html
		  }
		  editor.create()
	  }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-comp-richEdit{
    width: 700px;
  }
</style>