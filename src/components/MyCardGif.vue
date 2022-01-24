<template>
  <div class="my-10 mx-5">
    <v-row class="">
      <v-col class="d-flex flex-wrap">
        <v-card
          v-for="gif in myGifs"
          :key="gif.id"
          elevation="9"
          class="mt-3 mx-2"
          max-width="250"
        >
          <v-img height="250px" :src="gif.url"></v-img>
          <v-card-actions>
            <v-btn
              class="text-capitalize"
              color="pink accent-2"
              rounded
              dark
              @click="destroy({ id: gif.id })"
            >
              Excluir
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
                  Data de criação:
                  <span class="details-font-span">{{
                    gif.import_datetime | formatDate
                  }}</span>
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
                <!-- <v-btn
                  rounded
                  dark
                  text
                  color="pink accent-2"
                >
                  Editar
                </v-btn> -->
                <v-dialog persistent v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="pink accent-2" text rounded dark v-bind="attrs" v-on="on" @click="setDialog(gif.title, gif.url, gif.import_datetime, gif.id)">
                      Editar
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-text  class="py-3 px-3">
                      <v-text-field v-model="name" label="Nome"></v-text-field>
                      <v-text-field v-model="url" label="URL"></v-text-field>
                      <v-text-field v-model="date" label="Data"></v-text-field>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="light-blue darken-3" text @click="updateDialog">
                        Salvar
                      </v-btn>
                      <v-btn color="pink accent-2" text @click="dialog = false">
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
    data() {
        return {
            dialog: false,
            name: '',
            url: '',
            date:'',
            id: '',
        }
    },
  computed: {
    ...mapState({
      myGifs: state => state.store.myGifs,
    }),
  },

  methods: {
    ...mapActions('store',["index", "destroy", "update"]),

    setDialog(title, url, date, id) {
        this.name = title
        this.url = url
        this.date = date
        this.id = id
    },

    updateDialog() {
        this.update({id:this.id, url:this.url, title:this.name, import_datetime:this.date})
        this.dialog = false
    }
  },

  created() {
    this.index();
  },

  filters: {
    formatDate(date) {
      if (!date) return "";

      const newDate = new Date(date).toLocaleDateString("pt-BR");

      return newDate;
    },
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

.details-font-title {
  font-family: "Poppins", sans-serif !important;
  font-weight: bold;
}

.details-font-span {
  font-weight: normal;
}
</style>
