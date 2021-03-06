import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/room/:roomId/',
    name: 'Room',
    component: () => import('../views/Room.vue')
  },
  {
    path: '/issue/:issueId/',
    name: 'Issue',
    component: () => import('../views/Issue.vue')
  },
  {
    path: '/users/',
    name: 'Users',
    component: () => import('../views/Users.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
