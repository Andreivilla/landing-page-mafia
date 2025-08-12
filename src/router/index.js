import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MafiaView1 from '../views/MafiaView1.vue'
import MafiaView2 from '../views/MafiaView2.vue'
import MafiaView3 from '../views/MafiaView3.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/MafiaI',
    name: 'MafiaI',
    component: MafiaView1
  },
  {
    path: '/MafiaII',
    name: 'MafiaII',
    component: MafiaView2
  },
  {
    path: '/MafiaIII',
    name: 'MafiaIII',
    component: MafiaView3
  },
  // Adicione outras rotas aqui
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
