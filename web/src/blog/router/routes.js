/**
 * Created by suti on 2017/6/18.
 */
import index from '../page/index/index.vue'
import project from '../page/project/project.vue'
import projectDatail from '../page/project/detail.vue'
import lab from '../page/lab/lab.vue'
import articles from '../page/lab/comp/articles.vue'
import about from '../page/lab/comp/about.vue'
import tools from '../page/lab/comp/tools.vue'
import friends from '../page/lab/comp/friends.vue'

export default [
  {
    path:'/blog',
    component:index
  },
  {
    path:'/blog/project',
    component:project
  },
  {
    path:'/blog/project/detail',
    component:projectDatail
  },
  {
    path:'/blog/lab',
    component:lab
  },
  {
    path:'/blog/lab/articles',
    component:articles
  },
  {
    path:'/blog/lab/about',
    component:about
  },
  {
    path:'/blog/lab/tools',
    component:tools
  },
  {
    path:'/blog/lab/friends',
    component:friends
  }
]