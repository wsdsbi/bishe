import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '@/views/login/LoginForm.vue'
import UserStatus from '@/views/user_status/UserStatus.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: LoginForm },
  { path: '/', component: UserStatus }
]

const router = new VueRouter({
  routes
})

export default router
