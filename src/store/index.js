// let user = JSON.parse(localStorage.getItem("user"));
// localStorage.setItem("user", JSON.stringify(state.global.user));

import { createStore } from 'vuex'
// import axios from 'axios'


// const config = {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// }
  

const state = {
    storeResult: []
}

const actions = {
    clearStoreResult({commit}) {
        commit("clearStoreResult")
    },
    pushStoreResult({commit},obj) {
        commit("pushStoreResult",obj)
    },
    calculate({commit},str) {
        commit("calculate",str)
    }
}

const mutations = {
    SET_INITIAL:(state) => {
        if (localStorage.getItem("store_result")) {
            state.storeResult = JSON.parse(localStorage.getItem("store_result"))
        }
    },
    clearStoreResult(state) {
        state.storeResult = []
        localStorage.removeItem("store_result");
    },
    pushStoreResult(state,obj) {
        state.storeResult.push(obj)
        localStorage.setItem("store_result", JSON.stringify(state.storeResult));
    },
    calculate(str) {
        console.log("vuex expr = ", str)
        return '0'
        // return axios.get('https://api.mathjs.org/v4/?expr=2*(7-3)')
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





