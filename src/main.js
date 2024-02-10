import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store';
import VueModalityV3 from 'vue-modality-v3'


router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    // if (to.name === 'login' && true) next({ name: 'account' })
    // if (to.name === 'register' && true) next({ name: 'account' })

    next()
});

createApp(App)
    .use(router)
    .use(store)
    .component('VueModality', VueModalityV3)
    .mount('#app')


