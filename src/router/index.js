import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TradeCryptoView from "../views/Crypto/TradeCryptoView.vue"
import CryptoInfoView from "../views/Crypto/CryptoInfoListView.vue"
import ProfileView from '../views/User/ProfileView.vue'
import FormLoginView from '../views/User/Authorization/FormLoginView.vue'
import FormRegView from '../views/User/Authorization/FormRegView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Crypto Platform"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About"
      }
    },
    {
      path: '/market',
      name: 'market',
      component: CryptoInfoView,
      meta: {
        title: "Cryptocurrency Market"
      }
    },
    {
      path: '/crypto/:type/:BTC?',
      name: 'crypto-trade',
      component: TradeCryptoView,
      meta: {
        title: "Buy/Sell Crypto"
      }
    },
    {
      path: '/account/profile',
      name: 'account',
      component: ProfileView,
      meta: {
        title: "My Profile"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: FormLoginView,
      meta: {
        title: "Login"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: FormRegView,
      meta: {
        title: "Registration"
      }
    }
  ],

})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next()
})

export default router 
