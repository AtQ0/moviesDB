<script>
// Import the Axios library, downloaded by npm
import axios from 'axios';

export default {
    data() {
        return {
            apiKey: "1a31fa90d843040a3cdee6b110b0fe4a",
            //Stores results gotten from below prop (see created)
            searchedMovieResults: null,
            baseImageUrl: 'https://image.tmdb.org/t/p/w500',
            genreUrl: 'https://api.themoviedb.org/3/genre/movie/list?api_key=',
            movieGenres: null, //Array for all genres
        }
    },
    created() {

        //Save incoming prop to local data-variable first time component loads
        //This logic is replaced by immediate inside of watch below
        // this.searchedMovieResults = this.searchResults;

        //Call this method to get genres on start
        this.getGenresOnStart();

    },
    computed: {


    },
    props: {
        //Sent from SearchBar via Homeview
        searchResults: { type: Array },
    },
    methods: {

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


    },

    watch: {

        // Watch for changes to the searchResults prop
        searchResults: {
            handler(newValue, oldValue) {
                // Update searchedMovieResults whenever searchResults prop changes
                this.searchedMovieResults = newValue;
            },

            immediate: true, // Execute the handler immediately when the component is created
        },

    },


}
</script>


<style scoped>
.content-container {
    padding-left: 6vw;
    padding-right: 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
}

.content-container h1 {
    text-align: center;
    width: fit-content;
    margin-top: 0;
    font-size: 28px;
    margin-top: 30px;
    margin-bottom: 40px;
}

.search-results-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    row-gap: 80px;
}

.searched-movie-wrapper {
    background-color: #50627B;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
}

.searched-movie-wrapper h2 {
    margin-bottom: 0px;
}

.image-container-for-each-searched-movie img {
    height: 380px;
    width: 280px;
}




.movie-year {
    color: #93A2B6;
    margin-bottom: 0;
}

.movie-title {
    margin-top: 0;
}

.first-p {
    margin-top: 0;
    margin-bottom: 0;
}

.last-p {
    margin-top: 0;
    margin-bottom: 30px;
}
</style>



<template>
    <div class="content-container">
        <h1>Search results</h1>
        <div class="search-results-container">
            <div v-for="movie in searchedMovieResults" class="searched-movie-wrapper">

                <div class="image-container-for-each-searched-movie">

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
