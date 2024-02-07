<script>
//Importer a RouterLink for setting up a router
import { RouterLink } from 'vue-router';
//Import useRoute to use a route wich to pass data via
import { useRouter } from 'vue-router';
//Import other components as child components

import Navbar from './components/Navbar.vue'
import Trending from './components/Trending.vue'
import SearchBar from './components/SearchBar.vue'
import MovieInfo from './components/MovieInfo.vue'


export default {
  data() {
    return {
      isMovieClicked: false,
    }
  },
  methods: {

    //Method that recieves search-result custom event from navbar
    onSearchBtnClick(e) {
      console.log('incoming-search-result har tagits emot!')
      // Parse the received string back to array of objects
      const receivedData = JSON.parse(e);
      console.log('Filmerna är', receivedData);

      /*=== PASS recievedData AS PARAMS VIA ROUTE ===*/

      //Create const for usingRoute
      const router = useRouter();
      //Push params to the router
      router.push({ name: 'Home', params: { searchData: data } });


    }

  },
  components: {
    Navbar,
    SearchBar,


  }
}
</script>

<template>
  <Navbar></Navbar>

  <!--
  <Navbar @incoming-search-result="onSearchBtnClick" />

  <main>
    <RouterView />
  </main>
-->
</template>
