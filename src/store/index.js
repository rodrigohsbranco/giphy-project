import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default new Vuex.Store({
  modules: {
    store
  }
})