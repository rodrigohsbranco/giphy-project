<template>
  <div class="my-5">
    <SearchGifs />
  </div>
</template>

<script>
import SearchGifs from '../components/SearchGifs.vue';
export default {
  name: "Home",

  components: { SearchGifs },
};
</script>