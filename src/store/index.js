// let user = JSON.parse(localStorage.getItem("user"));
// localStorage.setItem("user", JSON.stringify(state.global.user));

import { createStore } from 'vuex'


const state = {
    storeResult: ['','']
}

const actions = {
}

const mutations = {
    SET_INITIAL:state => {
        let storeResult = JSON.parse(localStorage.getItem("store_result"));
        if (storeResult) {
            state.storeResult = storeResult
        }
        console.log("HEY")
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





