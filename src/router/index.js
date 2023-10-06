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
      path: '/discription',
      name: 'discription',
      component: Discription
    },
    {
      path: '/navmilk',
      name: 'navmilk',
      component: Navmilk
    }
  ]
})

export default router
