<script>
//Importer a RouterLink for setting up a router
import { RouterLink } from 'vue-router';
//Import useRoute to use a route wich to pass data via
import { useRouter } from 'vue-router';
//Import other components as child components

import Navbar from './components/NavBar.vue'
import Trending from './components/Trending.vue'
import SearchBar from './components/SearchBar.vue'
import MovieInfo from './components/MovieInfo.vue'
import HomeView from './views/HomeView.vue';


export default {
  data() {
    return {
      isMovieClicked: false,

    }
  },
  methods: {



  },
  components: {
    Navbar,
    SearchBar,
    Trending,
    MovieInfo,
    HomeView
  }
}
</script>


<style>
/*============================*/
/*========== FONTS ===========*/
/*============================*/


@font-face {
  font-family: "SlateMedium";
  src: url("../../assets/fonts/SlateMedium.TTF") format("opentype");
  font-weight: medium;
  font-style: normal;
}

@font-face {
  font-family: "SlateReg";
  src: url("../../assets/fonts/SlateRg.TTF") format("opentype");
  font-weight: normal;
  font-style: normal;
}


body {
  font-family: SlateReg;
  font-size: 14px;
  background-color: #303A48;
  margin: 0;
  padding: 0;
  color: white;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: SlateMedium;
}
</style>

<template>
  <Navbar></Navbar>

  <main>
    <RouterView />
  </main>
</template>
