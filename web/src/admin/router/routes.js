/**
 * Created by suti on 2017/6/18.
 */
import index from '../page/index/index.vue'
import projects from '../page/projects/projects.vue'
import articles from '../page/articles/articles.vue'
import tools from '../page/tools/tools.vue'
import friends from '../page/friends/friends.vue'
import about from '../page/about/about.vue'
import others from '../page/others/others.vue'
import account from '../page/account/account.vue'

export default [
	{
		path:'/admin',
		component:index
	},
	{
		path:'/admin/projects',
		component:projects
	},
	{
		path:'/admin/articles',
		component:articles
	},
	{
		path:'/admin/tools',
		component:tools
	},
	{
		path:'/admin/friends',
		component:friends
	},
	{
		path:'/admin/about',
		component:about
	},
	{
		path:'/admin/others',
		component:others
	},
	{
		path:'/admin/account',
		component:account
	},
]