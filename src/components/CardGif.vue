<template>
  <div class="my-10 mx-5">
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
            <v-btn class="text-capitalize" color="pink accent-2" rounded dark @click="store({ id: gif.id, title: gif.title, url: gif.url, reveal:gif.reveal, import_datetime:gif.import_datetime })">
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
                <p class="mb-1 details-font-title">
                  Nome: <span class="details-font-span">{{ gif.title }}</span>
                </p>
                <p class="mb-1 details-font-title">
                  URL: <span class="details-font-span">{{ gif.url }}</span>
                </p>
                <p class="mb-1 details-font-title">
                  Data de criação: <span class="details-font-span">{{ gif.import_datetime | formatDate }}</span>
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
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      gifs: (state) => state.gifs,
    }),
  },

  methods: {
    ...mapActions(['store'])
  },

  filters: {
      formatDate(date) {
          if(!date) return ''
          
         const newDate = new Date(date).toLocaleDateString('pt-BR')

         return newDate
      }
  }
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

.details-font-title {
    font-family: "Poppins", sans-serif !important;
    font-weight: bold;
}

.details-font-span {
    font-weight: normal;
}
</style>
