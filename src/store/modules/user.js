// import axios from "axios";

let state = {
    user: null,
    isAuthenticated: false,
};

let getters = {
    USER: state => {
        return state.user
    },
    isAuthenticated: state => {
        return state.isAuthenticated
    }
};

let mutations = {
    SET_USER: (state, payload) => {
        state.user = payload
    }
};

let actions = {
    GET_USER: async (context) => {
        let data = [
            
        ]
            context.commit('SET_USER', data)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}