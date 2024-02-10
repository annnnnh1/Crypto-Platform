import Vuex from 'vuex';
import popularWallet from './modules/popularWallet';
import user from './modules/user';
import profileBalance from './modules/userBalance'
import marketTrend from './modules/marketTrend';
import createPersistedState from 'vuex-persistedstate'
import coinPrice from './modules/coinPrice';

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    
    modules: {
        popularWallet,
        user,
        profileBalance,
        marketTrend,
        coinPrice
    },
    plugins: [createPersistedState]
});