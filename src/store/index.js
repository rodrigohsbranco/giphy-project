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
  // state: {
  //   gifs: [],
  //   myGifs: []
  // },

  // mutations: {
  //   UPDATE_GIFS(state, payload) {
  //     const gifs = state.gifs.concat(payload)
  //     state.gifs = gifs
  //   },
  //   REPLACE_GIFS(state) {
  //     state.gifs = []
  //   },
  //   STORE_GIF(state, payload) {
  //     state.myGifs.push(payload)
  //   },
  //   DESTROY_GIF(state, payload) {
      
  //     const index = state.myGifs.findIndex(gif => {
  //       gif.id === payload
  //       console.log('GIF ID', gif.id);
  //       console.log('ID', payload);
  //     })
  //     console.log('MYGIFS', state.myGifs);
  //     state.myGifs.splice(index, 1)
      
  //   },
  //   INDEX_GIF(state, payload) {
  //     if(payload) state.myGifs = payload
  //     else state.myGifs = []
  //   },
  //   UPDATE_GIF(state, { id, title, url, import_datetime }) {
  //     const index = state.myGifs.findIndex(gif => gif.id === id)
  //     state.myGifs[index].id = id
  //     state.myGifs[index].title = title
  //     state.myGifs[index].url = url
  //     state.myGifs[index].import_datetime = import_datetime
  //   }
  // },

  // actions: {
  //   async getGifs({commit}, {searchGif, offset = 1}) {
  //     const apiKey = process.env.VUE_APP_API_KEY
  //     // const apiKey = 'zexXkhBN79IOsvCWYACqwjyUtITGGqY4'
  //     const searchEndPoint = 'https://api.giphy.com/v1/gifs/search?'
  //     const limit = 12;
  //     const url = `${searchEndPoint}&api_key=${apiKey}&q=${searchGif}&limit=${limit}&offset=${offset}`
  //     console.log('URL', url);
  //     await fetch(url)
  //       .then(res => res.json())
  //       .then(res => {
  //         const gifs = res.data
  //           .map(gif => {
  //             const url = `https://media.giphy.com/media/${gif.id}/giphy.gif`

  //             gif.url = url;
  //             gif.reveal = false;

  //             return gif
  //           })
  //         commit('UPDATE_GIFS', gifs)
  //         // commit('REPLACE_GIFS', gifs)
  //       })
  //       .catch(() => commit('UPDATE_GIFS', []))
        
  //   },

  //   async searchGif({commit, dispatch}, {searchGif, offset = 1}) {
  //     commit('REPLACE_GIFS')
  //     await dispatch('getGifs',{searchGif, offset})
  //   },


  //   // SALVAR GIFS

  //   index({ commit }) {
  //     const myGifs = JSON.parse(localStorage.getItem('mygifs'))
  //     commit('INDEX_GIF', myGifs)
  //     console.log(myGifs);
  //   },

  //   store({ commit, state }, { id, title, url, reveal, import_datetime }) {
  //     const gif = { id, title, url, reveal, import_datetime }
  //     commit('STORE_GIF', gif)
  //     localStorage.setItem('mygifs', JSON.stringify(state.myGifs))
  //   },

  //   destroy({ commit }, { id }) {
  //     commit('DESTROY_GIF', id)
  //     localStorage.setItem('mygifs', JSON.stringify(this.myGifs))
  //   },

  //   update({ commit }, { id, title, url, import_datetime }) {
  //     commit('UPDATE_GIF', { id, title, url, import_datetime })
  //     localStorage.setItem('mygifs', JSON.stringify(this.myGifs))
  //   }
  // },

  modules: {
    store
  }
})