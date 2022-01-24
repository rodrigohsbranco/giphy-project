export default {
  UPDATE_GIFS(state, payload) {
    const gifs = state.gifs.concat(payload)
    state.gifs = gifs
  },
  REPLACE_GIFS(state) {
    state.gifs = []
  },
  STORE_GIF(state, payload) {
    state.myGifs.push(payload)
    localStorage.setItem('mygifs', JSON.stringify(state.myGifs))
  },
  DESTROY_GIF(state, payload) {
    const index = state.myGifs.findIndex(gif => gif.id === payload)
    state.myGifs.splice(index, 1)
    localStorage.setItem('mygifs', JSON.stringify(state.myGifs))
  },
  INDEX_GIF(state, payload) {
    if (payload) state.myGifs = payload
    else state.myGifs = []
  },
  UPDATE_GIF(state, {
    id,
    title,
    url,
    import_datetime
  }) {
    const index = state.myGifs.findIndex(gif => gif.id === id)
    state.myGifs[index].id = id
    state.myGifs[index].title = title
    state.myGifs[index].url = url
    state.myGifs[index].import_datetime = import_datetime

    localStorage.setItem('mygifs', JSON.stringify(state.myGifs))
  }
}