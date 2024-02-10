// import axios from "axios";

let state = {
    balance: {},
};

let getters = {
    BALANCE: state => {
        return state.balance
    },
};

let mutations = {
    SET_BALANCE: (state, payload) => {
        state.balance = payload
    },
};

let actions = {
    GET_BALANCE: async (context) => {
        let data =  {
            listCrypto: ["BTC", "ETH", "USDT","BNB", "SOL", "XRP", "ADA", "AVAX", "DOGE", "LTC",],
            listCurrency: ["USD", "RUB", "EUR", "AED"],

            mainCrypto: "BTC",
            mainCurrency: "USD",
            
            BTCbalance: 6.6334,
            ETHbalance: 11.3323,
            XRPbalance: 332.22,
            USDTbalance: 1133.23,
            BNBbalance: 11.1,
            SOLbalance: 12.2,
            ADAbalance: 13.3

        }
        context.commit('SET_BALANCE', data)
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
}