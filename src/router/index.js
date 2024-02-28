import Vue from 'vue'
import VueRouter from 'vue-router'
import Vues from '@App.vue'

Vue.use(VueRouter)

const routes = [
  {  
    path: '/',  
    name: 'Home',  
    component:  Vues
  }
]

const router = new VueRouter({
  routes
})

export default router
