// let user = JSON.parse(localStorage.getItem("user"));
// localStorage.setItem("user", JSON.stringify(state.global.user));

import { createStore } from 'vuex'


const state = {
    storeResult: []
}

const actions = {
    clearStoreResult({commit}) {
        commit("clearStoreResult")
    }
}

const mutations = {
    SET_INITIAL:state => {
        let storeResult = JSON.parse(localStorage.getItem("store_result"));
        if (storeResult) {
            state.storeResult = storeResult
        }
    },
    clearStoreResult(state) {
        state.storeResult = []
        localStorage.removeItem("store_result");
    }
}

const getters = {
    GET_STORE_RESULT:state => {
        return state.storeResult
    }
}

export default createStore({
    state,
    actions,
    mutations,
    getters
})





