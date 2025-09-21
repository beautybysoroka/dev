import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PreparationView from '@/views/PreparationView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/preparation', component: PreparationView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router)
app.mount('#app')
