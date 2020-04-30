import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user: localStorage.getItem("userMsg")
    },
    mutations:{
        handleUser: (state, userMsg) => {
            state.user = userMsg
            localStorage.setItem("userMsg",state.user)
        }
    },
    getters:{
        userMsg: (state) => state.user
    }
})