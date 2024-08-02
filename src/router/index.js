import { createRouter, createWebHistory } from 'vue-router'
import mycalendar from '../components/tools/mycalendar.vue'
import myset from '../components/tools/myset.vue'
import myTodolist from '../components/tools/myTodolist/myTodolist.vue'
import myhomepage from '../components/webStructure/myhomepage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/mmyhomepage',
     
      component: myhomepage
    },
    {
      path: '/mycalendar.vue',
      
      component:mycalendar
    },
    {
      path: '/myTodolist.vue',
    
      
      component: myTodolist
    },
     {
      path: '/myset',
      component: myset,
      
      
    }
  ]
})

export default router
