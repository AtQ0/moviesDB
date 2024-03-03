<script>
import Swiper from '../components/Swiper.vue';
import Trending from '../components/Trending.vue';



export default {
    data() {
        return {

            //Boolean triggered (true) my click on movie
            isMovieClicked: false,

            //Storing search results emmitted by SearchBar
            searchResults: null,

        }
    },
    components: {
        Swiper,
        Trending,

    },
    created() {



    },
    methods: {

        //Recieves custom-event from SearchBar
        onSearchBtnClick(e) {
            // Parse the received string back to array of objects
            const receivedData = JSON.parse(e);

            //save params to local variable to prop it further
            this.searchResults = receivedData;

        },

        forwardCustomEvent(incomingTrendingMovie) {
            // Emit the custom event using Vue's event system

            console.log("yaaa", incomingTrendingMovie)
            this.$root.$emit("movie-info", incomingTrendingMovie);
        }

    },
    props: {

    },

    watch: {


    },
}
</script>


<style>
</style>


<template>
    <Swiper></Swiper>

    <Trending @movie-info="forwardCustomEvent"></Trending>
</template>
