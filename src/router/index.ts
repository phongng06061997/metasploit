import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                authRequired: true
            }
        }
    ]
});

export default router;