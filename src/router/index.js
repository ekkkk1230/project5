import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/AddList',
    name: 'AddList',
    // route level code-splitting
    // this generates a separate chunk (AddList.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddList" */ '../views/AddList.vue')
  },
  {
    path: '/AddDiary',
    name: 'AddDiary',
    // route level code-splitting
    // this generates a separate chunk (AddDiary.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddDiary" */ '../views/AddDiary.vue')
  },
  {
    path: '/SettingSub',
    name: 'SettingSub',
    // route level code-splitting
    // this generates a separate chunk (SettingSub.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SettingSub" */ '../views/SettingSub.vue')
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (index.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
  {
    path: '/index2',
    name: 'index2',
    // route level code-splitting
    // this generates a separate chunk (index2.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index2" */ '../views/Index2.vue')
  },
  {
    path: '/ListDairy',
    name: 'ListDairy',
    // route level code-splitting
    // this generates a separate chunk (ListDairy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ListDairy" */ '../views/ListDairy.vue')
  },
  {
    path: '/SettingMain',
    name: 'SettingMain',
    // route level code-splitting
    // this generates a separate chunk (SettingMain.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SettingMain" */ '../views/SettingMain.vue')
  },
  {
    path: '/DiaryMain',
    name: 'DiaryMain',
    // route level code-splitting
    // this generates a separate chunk (DiaryMain.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DiaryMain" */ '../views/DiaryMain.vue')
  },
  {
    path: '/Healing',
    name: 'Healing',
    // route level code-splitting
    // this generates a separate chunk (Healing.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Healing" */ '../views/Healing.vue')
  },
  {
    path: '/Shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (Shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (test.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    // route level code-splitting
    // this generates a separate chunk (test2.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test2" */ '../views/test2.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
