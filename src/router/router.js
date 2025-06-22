import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import BackToHomeView from '../pages/BackToHomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/back-home', component: BackToHomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router