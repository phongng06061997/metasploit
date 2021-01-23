import Home from '@/pages/Home.vue';

export default [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    }
]