<template>
  <div class="my-5">
    <SearchGifs />
    <TrendingGifs />
  </div>
</template>

<script>
import SearchGifs from '../components/SearchGifs.vue';
import TrendingGifs from '../components/TrendingGifs.vue';
export default {
  name: "Home",

  components: { SearchGifs, TrendingGifs },
};
</script>