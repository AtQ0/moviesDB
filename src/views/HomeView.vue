<script>
import SearchBar from '../components/SearchBar.vue';
import Trending from '../components/Trending.vue';
import SearchResults from '../components/SearchResults.vue';
import MovieInfo from '../components/MovieInfo.vue';

export default {
    data() {
        return {
            //Boolean triggered (true) by search-btn from Navbar-component
            areMoviesSearched: false,
            isMovieClicked: false,
        }
    },
    components: {
        SearchBar,
        Trending,
        SearchResults,
        MovieInfo,
    },
    methods: {

        //Recieves custom-event from SearchBar

        onSearchBtnClick(e) {

            console.log('incoming-search-result har tagits emot!')
            // Parse the received string back to array of objects
            const receivedData = JSON.parse(e);
            console.log('Filmerna är', receivedData);

        },


        showMovieInfo(e) {
            console.log('Filmen är', e)
        },


    },

}
</script>


<style>
</style>


<template>
    <SearchBar @incoming-search-result="onSearchBtnClick"></SearchBar>

    <Trending @movie-info="showMovieInfo" v-if="!areMoviesSearched"></Trending>
    <SearchResults v-else></SearchResults>

    <MovieInfo v-if="isMovieClicked"></MovieInfo>
</template>
