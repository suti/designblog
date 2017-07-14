/**
 * Created by suti on 2017/6/18.
 */
import index from '../page/index/index.vue'
import project from '../page/project/project.vue'
import projectDatail from '../page/project/detail.vue'

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
  }
]