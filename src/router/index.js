import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '@/views/container/AppMain.vue'
import UserMontor from '@/views/user_status_monitor/UserMontor.vue'
import IndicatorControl from '@/views/Main/IndicatorControl.vue'
import AtomStatic from '@/views/Main/Statistic/AtomStatic.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: AppMain },
  { path: '/user_change', component: UserMontor },
  { path: '/indicator_create', component: AppMain },
  { path: '/indicator_control', component: IndicatorControl },
  { path: '/atom_static', component: AtomStatic },
  
]

const router = new VueRouter({
  routes
})

export default router
