import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Login from '../views/login/index.vue'
import Home from '../views/home/index.vue'
import Dashboard from '../views/dashboard/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login', 
    component: Login,
  },
  {
    path: '/home', 
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: 'machine',
        component: () => import('@/views/machine/index.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/users/index.vue')
      },
    ]
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
