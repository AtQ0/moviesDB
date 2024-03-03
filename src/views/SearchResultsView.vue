<script>
import SearchBar from '../components/SearchBar.vue';
import axios from 'axios';

export default {
    data() {
        return {
            apiKey: "1a31fa90d843040a3cdee6b110b0fe4a",
            baseImageUrl: 'https://image.tmdb.org/t/p/w500',
            genreUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=',
            movieGenres: null, //Array for all genres
            movies: null,
        }
    },
    components: {
        SearchBar,

    },
    created() {

        //Collect genres on component creation
        this.getGenresOnStart();

    },
    props: {
        movieTitle: {
            type: String,
            required: true,
        }

    },
    methods: {


        //Method that simple fetches all genres on page load
        getGenresOnStart() {
            //Fetch trending movie on page reload, using Axios
            axios.get(`${this.genreUrl}${this.apiKey}`)
                .then((response) => {
                    this.movieGenres = response.data.genres;
                })
        },

        //Methods that gets serach results by using prop
        viewSearchResults() {

            //Fetch movies on btn-click, using Axios
            axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.movieTitle}&api_key=${this.apiKey}`)
                .then((response) => {
                    //Save gotten query to a variable called movies
                    this.movies = response.data.results;
                    console.log(this.movies)
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

    },


    watch: {

        //Watch movieTitle prop for any change
        movieTitle: {
            //Execute watcher immediately when component is created
            immediate: true,

            //If new value, call  method to view search results
            handler(newValue, oldValue) {
                // Call viewSearchResults method whenever movieTitle changes
                this.viewSearchResults();
            }
        }

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
}


.content-container h1 {
    width: 100%;
    font-size: 28px;
    margin-top: 0px;
    margin-bottom: 0;
    padding-bottom: 0px;
    text-align: center;
}

.trending-movie-container {
    display: flex;
    justify-content: center;
    width: fit-content;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
    margin: 0;
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
    <SearchBar></SearchBar>

    <div class="content-container">



        <div class="trending-movie-container">
            <h1>SEARCH RESULTS</h1>
            <div v-for="movie in movies" class="trending-movie-wrapper">

                <div class="image-container-for-each-trending-movie">

                    <!--Show movie poster if existing-->
                    <img v-if="movie.poster_path !== null" :src="this.baseImageUrl + movie.poster_path" alt="Movie Poster">

                    <!--Show generic movie poster if poster is missing-->
                    <img v-else src="../../assets/images/missingMovie.jpg" alt="">

                </div>

                <h3 class="movie-year">{{ movie.release_date.slice(0, -6) }}</h3>
                <h2 class="movie-title">{{ movie.title }}</h2>
                <p class="first-p"> Imdb score: <b>{{ formatVoteAverage(movie.vote_average) }}</b></p>
                <p class="last-p">Genre: {{ getGenres(movie.genre_ids) }}</p>
            </div>

        </div>
    </div>
</template>
