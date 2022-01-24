export default {
    async getGifs({commit}, {searchGif, offset = 1}) {
        const apiKey = process.env.VUE_APP_API_KEY
        const searchEndPoint = 'https://api.giphy.com/v1/gifs/search?'
        const limit = 12;
        const url = `${searchEndPoint}&api_key=${apiKey}&q=${searchGif}&limit=${limit}&offset=${offset}`
        console.log('URL', url);
        await fetch(url)
          .then(res => res.json())
          .then(res => {
            const gifs = res.data
              .map(gif => {
                const url = `https://media.giphy.com/media/${gif.id}/giphy.gif`
  
                gif.url = url;
                gif.reveal = false;
  
                return gif
              })
            commit('UPDATE_GIFS', gifs)
          })
          .catch(() => commit('UPDATE_GIFS', []))
          
      },
  
      async searchGif({commit, dispatch}, {searchGif, offset = 1}) {
        commit('REPLACE_GIFS')
        await dispatch('getGifs',{searchGif, offset})
      },
  
  
      // SALVAR GIFS
  
      index({ commit }) {
        const myGifs = JSON.parse(localStorage.getItem('mygifs'))
        commit('INDEX_GIF', myGifs)
        console.log(myGifs);
      },
  
      store({ commit }, { id, title, url, reveal, import_datetime }) {
        const gif = { id, title, url, reveal, import_datetime }
        commit('STORE_GIF', gif)
      },
  
      destroy({ commit }, { id }) {
        commit('DESTROY_GIF', id)
      },
  
      update({ commit }, { id, title, url, import_datetime }) {
        commit('UPDATE_GIF', { id, title, url, import_datetime })
      }
}