
let state = {
    market: null,
};

let getters = {
    MARKET: state => {
        return state.market
    },

};

let mutations = {
    SET_MARKET: (state, payload) => {
        state.market = payload
    }
};

let actions = {
    GET_MARKET: async (context) => {
        let data = [ 
            {
                id: 1,
                name: "Bitcoin",
                surname: "BTC",
                price: 23333.43,
                change: "+1,11"
            },
            {
                id: 2,
                name: "Ethereume",
                surname: "ETH",
                price: 3333.43,
                change: "+0,11"
            },
            {
                id: 3,
                name: "Ripple",
                surname: "XRP",
                price: 33.43,
                change: "-2,11"
            },
            {
                id: 4,
                name: "BNB",
                surname: "BNB",
                price: 298.43,
                change: "-1,74"
            },
            
        ]
            context.commit('SET_MARKET', data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}