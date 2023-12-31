import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('@/views/Home/index.vue')
                },
                {
                    path: 'category/:id',
                    name: 'Category',
                    component: () => import('@/views/Category/index.vue')
                },
            ]
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('@/views/Login/index.vue')
        },
    ]
})

export default router
