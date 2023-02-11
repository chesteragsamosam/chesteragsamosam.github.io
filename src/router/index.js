import Async from '../pages/Async.vue'
import test from '../pages/test.vue'
import yieldSample from '../pages/yieldSample.vue'
import Race from '../pages/Race.vue'
import Tutorial from '../pages/Tutorial.vue'
import Transparent from '../pages/Transparent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // dynamic segments start with a colon
    { path: '/test', component: test },
    { path: '/async', component: Async },
    { path: '/yieldSample', component: yieldSample },
    { path: '/race', component: Race },
    { path: '/tutorial', component: Tutorial },
    { path: '/transparent', component: Transparent },
    { path: '/sort', component: () => import('../pages/Sort/Sort.vue') },
    { path: '/signal', component: () => import('../pages/Signal/index.vue') },
    { path: '/tictactoe', component: () => import('../pages/TikTacToe/index.vue') },
    { path: '/', component: () => import('../pages/index.vue') },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router