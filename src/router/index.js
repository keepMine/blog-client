
import About from '@/view/about.vue'
import Home from '@/view/home.vue'
import {createRouter,createWebHashHistory} from "vue-router"
 const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
}) 