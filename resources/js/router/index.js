import {createRouter, createWebHistory} from 'vue-router';

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
        {
            path: '/catalog/:slug',
            name: 'product.show',
            component: () => import('../views/product/Show.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/Cart.vue')
        },
        {
            path: '/orders',
            name: 'orders',
            component: () => import('../views/order/Index.vue')
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('../views/user/Account.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/user/Login.vue')
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import('../views/user/Registration.vue')
        },
        // otherwise redirect to home
        { path: '/*', redirect: '/', name: '404' }
    ]
})

router.beforeEach((to, from, next) => {

    const user = localStorage.getItem('user')

    if (to.name === 'account' || to.name === 'orders') {
        if (!user) {
             return next({
                 name: 'login'
             })
        }
    }
    if ((to.name === 'login' || to.name === 'registration') && user) {
        return next({
            name: 'account'
        })
    }

    next()
})

export default router
