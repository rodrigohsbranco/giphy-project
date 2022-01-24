<template>
  <div>
    <v-row class="mx-5">
      <v-col cols="11" class="d-flex">
        <v-text-field
          v-model="search"
          clearable
          solo
          placeholder="Escolha um Gif - Ex.: Mr Bean"
          @keyup.enter="searchGif({searchGif: search})"
        ></v-text-field>
        <v-btn
          @click="searchGif({searchGif: search})"
          height="49"
          large
          class="mx-2"
          dark
          color="pink"
        >
          <v-icon large dark> mdi-magnify </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <CardGif />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardGif from "./CardGif.vue";

export default {
  components: { CardGif },
  computed: {
    ...mapState({
      gifs: store => store.state.gifs,
      // offset: state => state.offset
    }),
  },
  data() {
    return {
      search: "",
      offset: 1,
    };
  },

  methods: {
    ...mapActions('store',['getGifs', 'searchGif']),

    handleInfintyScorll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.offset += 10;
          this.getGifs({searchGif:this.search, offset:this.offset})
          console.log("SCROLL", this.offset);
        }
      }
    }
  },

  mounted() {
    this.handleInfintyScorll();
    this.getGifs({searchGif:this.search});
  },
};
</script>

<style scope>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
