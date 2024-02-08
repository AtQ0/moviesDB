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

            //Boolean triggered (true) my click on movie
            isMovieClicked: false,

            //Storing search results emmitted by SearchBar
            searchResults: null,
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
            // Parse the received string back to array of objects
            const receivedData = JSON.parse(e);

            //save params to local variable to prop it further
            this.searchResults = receivedData;

            //Toggle to show search result instead of trending movies
            this.areMoviesSearched = true;
        },

        //Recieves movie info
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
    <SearchResults v-else :search-results="searchResults"></SearchResults>

    <MovieInfo v-if="isMovieClicked"></MovieInfo>
</template>
