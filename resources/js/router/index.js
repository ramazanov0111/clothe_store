import { createRouter, createWebHistory } from 'vue-router'
// import express from "express";
import App from '../App.vue';
import {createApp} from "vue/dist/vue";
const app = createApp(App)

// app.use(express.static(__dirname + '/public'));

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/player',
      name: 'player',
      component: () => import('../views/main/PlayerIndex.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/product/Index.vue')
    },
  ]
})

export default router
