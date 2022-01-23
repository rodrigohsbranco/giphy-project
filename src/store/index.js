import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchGif: "",
    gifs: [],
  },

  mutations: {
    updateGifs(state, payload) {
      state.gifs = payload
    }
  },

  actions: {
    async getGifs({commit}, searchGif) {
          let apiKey = 'zexXkhBN79IOsvCWYACqwjyUtITGGqY4';
          let searchEndPoint = 'https://api.giphy.com/v1/gifs/search?'
          let limit = 1;
          let url = `${searchEndPoint}&api_key=${apiKey}&q=${searchGif}&limit=${limit}`
    
          await fetch(url)
            .then(res => res.json())
            .then(res => {
              this.buildGifs(res)
              commit('updateGifs', res)
            })
            .catch(err => console.log(err))
        },
    
        buildGifs(res) {
          this.gifs = res.data
          .map(gif => gif.id)
          .map(gifId => `https://media.giphy.com/media/${gifId}/giphy.gif`)
        }
  },
  modules: {
  }
})
