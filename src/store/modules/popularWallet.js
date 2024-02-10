// import axios from "axios";

let state = {
    infoWallet: null,
};

let getters = {
    INFO_WALLET: state => {
        return state.infoWallet
    }
};

let mutations = {
    SET_INFO_WALLET: (state, payload) => {
        state.infoWallet = payload
    }
};

let actions = {
    GET_POPULAR_WALLET: async (context) => {
        // let data = axios.get('https://blockchain.info/ticker')
        let data = [
                {
                    id: 1,
                    name: "Bitcoin",
                    tag: "btc",
                    anim: "fadeInLeft",
                    surname: "BTC/USDT",
                    price: "25,839.00",
                    stat: "-1.33",
                },
                { 
                    id: 2,
                    name: "Ethereume",
                    tag: "eth",
                    anim: "fadeInUp",
                    surname: "ETH/USDT",
                    price: "1,627.38",
                    stat: "-0.58"
                },
                {
                    id: 3,
                    name: "Ripple",
                    tag: "xrp",
                    anim: "fadeInRight",
                    surname: "XRP/USDT",
                    price: "0.51",
                    stat: "+1.23"
                },
        ]
        context.commit('SET_INFO_WALLET', data)
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}