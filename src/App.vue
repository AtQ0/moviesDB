<script>
import { RouterLink } from 'vue-router';
import Navbar from './components/Navbar.vue'
import Trending from './components/Trending.vue'
import SearchByTitle from './components/SearchByTitle.vue'


export default {
  components: {
    Navbar,
    Trending,
    SearchByTitle
  }
}
</script>

<template>
  <Navbar />

  <main>
    <RouterView />
  </main>
</template>
