import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import Discription from '../views/DiscriptionView.vue';
import Navmilk from '../components/Navmilk.vue';
import listView from '../views/listView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/list',
      name: 'list',
      component: listView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/discription',
      name: 'discription',
      component: Discription
    },
    {
      path: '/navmilk',
      name: 'navmilk',
      component: Navmilk
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
