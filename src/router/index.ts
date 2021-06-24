import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'inicio'
      },
      {
        path: 'inicio',
        component: () => import('@/views/Inicio.vue')
      },
      {
        path: 'tabla-multiplicacion',
        component: () => import('@/views/TablaMultiplicacion.vue')
      },
      {
        path: 'numero-mayor',
        component: () => import('@/views/NumeroMayor.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
