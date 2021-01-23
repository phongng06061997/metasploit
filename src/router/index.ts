import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/Login.vue';
import MainSlot from '@/components/layout/MainSlot.vue';
import homeRoutes from './home'
Vue.use(Router);


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/',
        component: MainSlot,
        children: [
            ...homeRoutes 

        ],
        redirect: { name: 'Home' },
        meta: {
        requiresAuth: true,
        }
    }
]

const router = new Router({
    mode: 'history',
    routes
});

export default router;