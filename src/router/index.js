import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '@/views/container/AppMain.vue'
import UserMontor from '@/views/user_status_monitor/UserMontor.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: AppMain },
  { path: '/user_change', component: UserMontor }

]

const router = new VueRouter({
  routes
})

export default router
