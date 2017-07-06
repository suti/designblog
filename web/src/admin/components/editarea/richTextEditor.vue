<template>
  <div class="admin-comp-richEdit">
    <textarea
      class=""
      @input="input"
    ></textarea>
    <div v-html="editorContent"></div>
  </div>
</template>
<script>
  import showdown from 'showdown'

  let converter=new showdown.Converter()

  export default{
	  name: 'editor',
	  data () {
		  return {
			  editorContent: '',
		  }
	  },
	  methods: {
		  input(e) {
			  this.editorContent=converter.makeHtml(e.target.value)
		  }
	  },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .admin-comp-richEdit{
    width: 700px;


  }
</style>