// let user = JSON.parse(localStorage.getItem("user"));
// localStorage.setItem("user", JSON.stringify(state.global.user));

import { createStore } from 'vuex'


const state = {
    storeResult: []
}

const actions = {
    clearStoreResult({commit}) {
        commit("clearStoreResult")
    },
    pushStoreResult({commit},obj) {
        commit("pushStoreResult",obj)
    }
}

const mutations = {
    SET_INITIAL:(state) => {
        if (localStorage.getItem("store_result")) {
            state.storeResult = JSON.parse(localStorage.getItem("store_result"))
            console.log("type = ",typeof state.storeResult)
        }
    },
    clearStoreResult(state) {
        state.storeResult = []
        localStorage.removeItem("store_result");
    },
    pushStoreResult(state,obj) {
        state.storeResult.push(obj)
        localStorage.setItem("store_result", JSON.stringify(state.storeResult));
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





