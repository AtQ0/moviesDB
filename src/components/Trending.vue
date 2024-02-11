<script>
// Import the Axios library, downloaded by npm
import axios from 'axios';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


export default {
    data() {
        return {
            apiKey: "1a31fa90d843040a3cdee6b110b0fe4a",
            baseTrendingQueryUrl: 'https://api.themoviedb.org/3/trending/movie/week?api_key=',
            baseImageUrl: 'https://image.tmdb.org/t/p/w500',
            genreUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=',
            trendingMovies: null, //Array used for storing movie
            trendingMovieTitle: null, //Movie Title of each movie in array
            movieGenres: null, //Array for all genres
        }
    },
    created() {

        //call method to fetch trending movies on pageReload
        this.getTrendingMoviesOnStart();

        this.getGenresOnStart();
    },
    computed: {


    },
    methods: {

        getTrendingMoviesOnStart() {
            //Fetch trending movie on page reload, using Axios
            axios.get(`${this.baseTrendingQueryUrl}${this.apiKey}`)
                .then((response) => {
                    this.trendingMovies = response.data.results;
                })
        },

        //Method to format imdb score to one decimal
        formatVoteAverage(voteAverage) {
            const scoreStr = voteAverage.toString();
            const decimalIndex = scoreStr.indexOf('.');
            if (decimalIndex !== -1) {
                // If there is a decimal part, return the score with one decimal
                return scoreStr.slice(0, decimalIndex + 2);
            } else {
                // If it's a whole number, append '.0' to it
                return scoreStr + '.0';
            }
        },

        //Method that simple fetches all genres on page load
        getGenresOnStart() {
            //Fetch trending movie on page reload, using Axios
            axios.get(`${this.genreUrl}${this.apiKey}`)
                .then((response) => {
                    this.movieGenres = response.data.genres;
                })
        },

        //Match genres from each movie to the genre-list and send back 2 of 3 genres
        getGenres(genreIds) {
            // Return empty string if either genreIds or movieGenres is not available
            if (!genreIds || !this.movieGenres) return '';

            const genres = [];
            for (let i = 0; i < genreIds.length; i++) {
                const id = genreIds[i];
                // Find genre by id
                const genre = this.movieGenres.find(genre => genre.id === id);
                if (genre) {
                    // Push genre name to genres array if found
                    genres.push(genre.name);
                }
                // Exit loop if two genres are found
                if (genres.length >= 2) break;
            }
            // Join genre names with commas
            return genres.join(', ');
        },


        showMovieInfo(incomingTrendingMovie) {
            console.log("yeah")
            console.log(incomingTrendingMovie)

            this.$emit('movie-info', incomingTrendingMovie)
        },

    },

    watch: {

    },


}


</script>



<style scoped>
.content-container {
    padding-left: 3vw;
    padding-right: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 40px;
    background-color: lightblue;
}


.content-container h1 {

    width: 100%;
    font-size: 28px;
    margin-top: 30px;
    margin-bottom: 0;
    padding-bottom: 0;
    justify-self: left;
}

.trending-movie-container {
    display: flex;
    justify-content: start;
    width: fit-content;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
    margin: 0;
    background-color: red;
}

.trending-movie-wrapper {
    background-color: #50627B;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    padding: 10px;
    margin-top: 0;
}

.trending-movie-wrapper h2 {
    margin-bottom: 0px;
    font-size: 14px;
}

.trending-movie-wrapper h3 {
    font-size: 14px;
}

.first-p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 12px;
}

.last-p {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 12px;
}

.image-container-for-each-trending-movie img {
    height: 250px;
    width: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}


.movie-year {
    color: #93A2B6;
    margin-bottom: 0;
}

.movie-title {
    margin-top: 0;
}


@media screen and (min-width: 451px) {

    .home-container p {
        margin: 0;
        font-size: 0.95rem;
    }

    .about-container p {
        font-size: 0.95rem;

    }
}
</style>


<template>
    <div class="content-container">

        <h1>Trending movies this week</h1>


        <template>
            <div class="content-container">
                <h1>Trending movies this week</h1>
                <!-- Slider main container -->
                <div class="trending-swiper-container swiper-container">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><img src="../../assets/images/movie1.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/images/movie2.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/images/movie3.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/images/movie1.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/images/movie2.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../assets/images/movie3.jpg" alt=""></div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <div class="trending-movie-container">
                    <div @click="showMovieInfo(trendingMovie)" v-for="trendingMovie in trendingMovies"
                        class="trending-movie-wrapper">
                        <div class="image-container-for-each-trending-movie">
                            <!--Show movie poster if existing-->
                            <img v-if="trendingMovie.poster_path !== null"
                                :src="this.baseImageUrl + trendingMovie.poster_path" alt="Movie Poster">
                            <!--Show generic movie poster if poster is missing-->
                            <img v-else src="../../assets/images/missingMovie.jpg" alt="">
                        </div>
                        <h3 class="movie-year">{{ trendingMovie.release_date.slice(0, -6) }}</h3>
                        <h2 class="movie-title">{{ trendingMovie.title }}</h2>
                        <p class="first-p"> Imdb score: <b>{{ formatVoteAverage(trendingMovie.vote_average) }}</b></p>
                        <p class="last-p">Genre: {{ getGenres(trendingMovie.genre_ids) }}</p>
                    </div>
                </div>
            </div>
        </template>


        <div class="trending-movie-container">

            <div @click="showMovieInfo(trendingMovie)" v-for="trendingMovie in trendingMovies"
                class="trending-movie-wrapper">

                <div class="image-container-for-each-trending-movie">

                    <!--Show movie poster if existing-->
                    <img v-if="trendingMovie.poster_path !== null" :src="this.baseImageUrl + trendingMovie.poster_path"
                        alt="Movie Poster">

                    <!--Show generic movie poster if poster is missing-->
                    <img v-else src="../../assets/images/missingMovie.jpg" alt="">

                </div>

                <h3 class="movie-year">{{ trendingMovie.release_date.slice(0, -6) }}</h3>
                <h2 class="movie-title">{{ trendingMovie.title }}</h2>
                <p class="first-p"> Imdb score: <b>{{ formatVoteAverage(trendingMovie.vote_average) }}</b></p>
                <p class="last-p">Genre: {{ getGenres(trendingMovie.genre_ids) }}</p>
            </div>

        </div>
    </div>
</template>
