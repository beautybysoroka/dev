import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import routeNames from '@/constants/routeNames'
import HomeView from '@/views/HomeView.vue'
import PlanView from '@/views/PlanView.vue'
import PriceView from '@/views/PriceView.vue'
import PortfolioVIew from '@/views/PortfolioVIew.vue'

const routes = [
    { path: '/', name: routeNames.MAIN, component: HomeView },
    { path: '/plan', name: routeNames.PLAN, component: PlanView },
    { path: '/price', name: routeNames.PRICE, component: PriceView },
    { path: '/portfolio', name: routeNames.PORTFOLIO, component: PortfolioVIew }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // when using back/forward, restore saved scroll position
            return savedPosition
        } else {
            // otherwise, scroll to top
            return { top: 0 }
        }
    }
})


const app = createApp(App)
app.use(router)
app.mount('#app')
