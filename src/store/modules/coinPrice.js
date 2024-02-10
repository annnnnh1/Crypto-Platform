let state = {
    price: {},
    currencyPrice: {}
};

let getters = {
    PRICE: state => {
        return state.price
    },
    CURRENCY_PRICE: state => {
        return state.currencyPrice
    }
};

let mutations = {
    SET_CRYPTO_PRICE: (state, payload) => {
        state.price = payload
    },
    SET_CURRENCY_PRICE: (state, payload) => {
        state.currencyPrice = payload
    }
};

let actions = {
    GET_CRYPTO_PRICE: async (context) => {
        let tradeCrypto = {
            BTC: {
                RUB: 3752621,
                USD: 41799,
                EUR: 38477,
                AED: 153901.81,
            },
            ETH: {
                RUB: 203535,
                USD: 2267.57,
                EUR: 2087.41,
                AED: 8350.29
            },
            USDT: {
                RUB: 89.76,
                USD: 0.999948,
                EUR: 0.920459,
                AED: 3.68
            },
            BNB: {
                RUB: 27321,
                USD: 306.56,
                EUR: 284.01,
                AED: 1119.71
            }
        }
        context.commit('SET_CRYPTO_PRICE', tradeCrypto)
    },
    GET_CURRENCY_PRICE: async (context) => {
        let tradeCurrency = {
            USD: 1,
            RUB: 91.15,
            EUR: 0.929229,
            AED: 3.67
        }
        context.commit('SET_CURRENCY_PRICE', tradeCurrency)

    }
};

export default {
    state,
    getters,
    mutations,
    actions
}