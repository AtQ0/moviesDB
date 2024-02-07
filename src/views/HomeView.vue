<script>
import Trending from '../components/Trending.vue';
import SearchResults from '../components/SearchResults.vue';

export default {
    data() {
        return {
            //Boolean triggered (true) by search-btn from Navbar-component
            isMovieSearched: false,
        }
    },
    components: {
        Trending,
        SearchResults,
    },
    props: ['searchData'],
    mounted() {
        console.log('Received searchData:', this.searchData);
    }
}
</script>


<style>
</style>



<template>
    <Trending v-if="!isMovieSearched"></Trending>
    <SearchResults v-else></SearchResults>
</template>
