<template>
  <div>
    <v-row class="mx-5">
      <v-col cols="11" class="d-flex">
        <v-text-field
          v-model="searchGif"
          clearable
          solo
          placeholder="Escolha um Gif - Ex.: Mr Bean"
          @keyup.enter="getGifs"
        ></v-text-field>
        <v-btn @click="getGifs" height="49" large class="mx-2" dark color="pink">
          <v-icon large dark> mdi-magnify </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex flex-wrap ml-7">
        <v-card v-for="gif in gifs" :key="gif.id" elevation="9" class="mx-2 mt-3" max-width="250">
          <v-img
            height="250px"
            :src="gif"
          >
          </v-img>
          <v-card-actions>
            <v-btn class="text-capitalize" color="pink accent-2" rounded dark>
              Salvar
            </v-btn>
            <v-btn
              class="text-capitalize"
              color="light-blue darken-3"
              rounded
              dark
            >
              Detalhes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      searchGif: state => state.searchGif,
      gifs: state => state.gifs
    })
  },
  data() {
    return {
      // searchGif: "",
      // gifs: [],
    };
  },

  methods: {

    ...mapActions(['getGifs']),

  //   async getGifs() {
  //     let apiKey = 'zexXkhBN79IOsvCWYACqwjyUtITGGqY4';
  //     let searchEndPoint = 'https://api.giphy.com/v1/gifs/search?'
  //     let limit = 1;
  //     let url = `${searchEndPoint}&api_key=${apiKey}&q=${this.searchGif}&limit=${limit}`

  //     await fetch(url)
  //       .then(res => res.json())
  //       .then(res => this.buildGifs(res))
  //       .catch(err => console.log(err))
  //   },

  //   buildGifs(res) {
  //     this.gifs = res.data
  //     .map(gif => gif.id)
  //     .map(gifId => `https://media.giphy.com/media/${gifId}/giphy.gif`)
  //   }
  },

  mounted() {
    this.getGifs(this.searchGif);
  }
};
</script>

<style></style>
