import { createRouter, createWebHistory } from 'vue-router'
import mycalendar from '../components/tools/mycalendar.vue'
import myset from '../components/tools/myset.vue'
import myTodolist from '../components/tools/myTodolist/myTodolist.vue'
import myhomepage from '../components/webStructure/myhomepage.vue'
import studyGuide from '../components/study/studyGuide.vue'
import mygame from '../components/game/mygame.vue'
import myindex from '../components/webStructure/myindex.vue'
import mycss from '../components/study/studys/mycss/mycss.vue'
const router = createRouter({
   base: '/',
  history: createWebHistory(),
  routes: [
  
    {
      path: '/',
      component: myhomepage,
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
      
      
    },
    {
      path: '/studyGuide',
      component: studyGuide
      ,
      children:[{
        path: '/mycss',
        component:mycss
      }]
    },
    {path:'/mygame',
      component: mygame
     
    }
]
    },
    
    
  
)

export default router
