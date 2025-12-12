import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Produk from '../pages/Produk.vue'
import Kategori from '../pages/Kategori.vue'
import Tentang from '../pages/Tentang.vue'
import Kontak from '../pages/Kontak.vue'
import AboutMe from '../pages/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/produk', component: Produk },
    { path: '/kategori', component: Kategori },
    { path: '/tentang', component: Tentang },
    { path: '/kontak', component: Kontak },
    { path: '/About', component: AboutMe },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
