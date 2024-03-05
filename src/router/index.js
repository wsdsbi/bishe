import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '@/views/container/AppMain.vue'
import UserMontor from '@/views/user_status_monitor/UserMontor.vue'
import IndicatorControl from '@/views/Main/IndicatorControl.vue'
import AtomStatic from '@/views/Main/Statistic/AtomStatic.vue'
import TableTest from '@/views/Main/index_2/TableTest.vue'
import IndicatorMontor from '@/views/Main/index_2/IndicatorMontor.vue'
import StepSub from '@/views/Main/index_2/StepSub.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: AppMain },
  { path: '/user_change', component: UserMontor },
  { path: '/indicator_create', component: AppMain },
  { path: '/indicator_control', component: IndicatorControl },
  { path: '/atom_static', component: AtomStatic },
  { path: '/table_test', component: TableTest },
  { path: '/indicator_montor', component: IndicatorMontor },
  { path: '/step_sub', component: StepSub }
  
]

const router = new VueRouter({
  routes
})

export default router
