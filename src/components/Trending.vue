<script>
// Import the Axios library, downloaded by npm
import axios from 'axios';

export default {



    data() {
        return {
            apiKey: "1a31fa90d843040a3cdee6b110b0fe4a",
            baseTrendingQueryUrl: 'https://api.themoviedb.org/3/trending/movie/week?api_key=',
            baseImageUrl: 'https://image.tmdb.org/t/p/w500',
            trendingMovies: null, //Array used for storing movie
            trendingMovieTitle: null, //Movie Title of each movie in array
        }
    },
    created() {

        //call method to fetch trending movies on pageReload
        this.getTrendingMoviesOnStart();
    },
    computed: {


    },
    methods: {

        getTrendingMoviesOnStart() {
            //Fetch trending movie on page reload, using Axios
            axios.get(`${this.baseTrendingQueryUrl}${this.apiKey}`)
                .then((response) => {
                    this.trendingMovies = response.data.results;
                    console.log(this.trendingMovies)

                })
        }

    },

    watch: {

    },


}
</script>



<style>
.content-container {
    width: 100vw;
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
}

.trending-movie-wrapper {
    background-color: orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.image-container-for-each-trending-movie {

    border-radius: 26px;
    border: solid black 1px;
    overflow: hidden;
    height: 400px;
    width: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;

}

.image-container-for-each-trending-movie img {
    border-radius: 26px;
}



.content-container h2 {
    background-color: red;
}
</style>


<template>
    <div class="content-container">
        <div v-for="trendingMovie in trendingMovies" class="trending-movie-wrapper">

            <div class="image-container-for-each-trending-movie">

                <!--Show movie poster if existing-->
                <img v-if="trendingMovie.poster_path !== null" :src="this.baseImageUrl + trendingMovie.poster_path"
                    alt="Movie Poster">

                <!--Show generic movie poster if poster is missing-->
                <img v-else src="../../assets/images/missingMovie.jpg" alt="">

            </div>

            <h2>{{ trendingMovie.title }} ({{ trendingMovie.release_date.slice(0, -6) }})</h2>
        </div>

    </div>
</template>
