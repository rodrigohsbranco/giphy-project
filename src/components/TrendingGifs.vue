<template>
  <div class="my-10 mx-5">
    <v-card color="#aa00ff" dark>
      <v-card-title class="title"
        ><v-icon class="mr-2">mdi-trending-up</v-icon> Mais Buscados
      </v-card-title></v-card
    >
    <!-- <h1 class="title">Gifs mais buscados</h1>
    <v-divider class="divider"></v-divider> -->
    <v-row class="">
      <v-col class="d-flex flex-wrap">
        <v-card
          v-for="gif in gifs"
          :key="gif.id"
          elevation="9"
          class="mt-3 mx-2"
          max-width="250"
        >
          <v-img height="250px" :src="gif.url"></v-img>
          <v-card-actions>
            <v-btn class="text-capitalize" color="pink accent-2" rounded dark>
              Salvar
            </v-btn>
            <v-btn
              class="text-capitalize"
              color="light-blue darken-3"
              rounded
              dark
              @click="gif.reveal = true"
            >
              Detalhes
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if="gif.reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">Detalhes</p>
                <p class="text--primary">
                  Nome: <span>{{ gif.title }}</span>
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  rounded
                  dark
                  text
                  color="light-blue darken-3"
                  @click="gif.reveal = false"
                >
                  Fechar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gifs: [],
      reveal: false,
    };
  },

  methods: {
    async getTrendingGifs() {
      const url =
        "https://api.giphy.com/v1/gifs/trending?api_key=zexXkhBN79IOsvCWYACqwjyUtITGGqY4&limit=10&rating=g";
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log('INFO', res.data);
          this.buildGifs(res);
        })
        .catch((err) => console.log(err));
    },

    buildGifs(res) {
      this.gifs = res.data
      .map(gif => {
        const url = `https://media.giphy.com/media/${gif.id}/giphy.gif`

        gif.url = url;
        gif.reveal = false;

        return gif
      })
    },
  },

  mounted() {
    this.getTrendingGifs();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");

.title {
  font-size: 1.25rem !important;
  font-family: "Poppins", sans-serif !important;
  font-weight: bold;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
