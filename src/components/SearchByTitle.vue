<script>
// Import the Axios library, downloaded by npm
import axios from 'axios';

export default {



    data() {
        return {
            apiKey: "1a31fa90d843040a3cdee6b110b0fe4a",
            pageTitleVue: 'Vue',
            pageTitleMovieDb: 'Movie Database',
            pageIntroParagraph: 'FIND GOOD MOVIES AND SERIES TO WATCH',
            movieImage: "/assets/images/background.jpg",
            moviePlot: null,
            searchInputValue: "",
            movies: null,
            isPageReloaded: true,
            baseImageUrl: 'https://image.tmdb.org/t/p/w500',
        }
    },
    created() {

        this.getMovieBySearching();

        this.getGenres();
    },
    computed: {


    },
    methods: {


        getMovieBySearching() {

            //Get api-data on page reload
            if (this.isPageReloaded === true) {

                //Fetch movies on start of page reload, using Axios
                axios.get(`https://api.themoviedb.org/3/search/movie?query=batman&api_key=${this.apiKey}`)
                    .then((response) => {
                        this.movies = response.data.results;
                        console.log(this.movies)
                        this.isPageReloaded = false;
                    })


            }
            else if (this.isPageReloaded === false && this.searchInputValue === "") {
                alert("input field is empty")
            }
            //get api-data on btn-click
            else {

                //Fetch movies on btn-click, using Axios
                axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.searchInputValue}&api_key=${this.apiKey}`)
                    .then((response) => {
                        this.movies = response.data.results;
                        console.log(this.movies)
                        this.searchInputValue = "";
                    })
            }
        },

        //Method that cuts off overview efter certain length and before space
        truncateOverview(overview, maxLength) {
            if (overview.length > maxLength) {
                const truncatedText = overview.slice(0, maxLength);
                const lastSpaceIndex = truncatedText.lastIndexOf(' ');

                return lastSpaceIndex !== -1
                    ? truncatedText.slice(0, lastSpaceIndex) + '...'
                    : truncatedText + '...';
            }
            return overview;
        },

        //method that gets genres names based on genre id's
        getGenres(incomingGenreIds) {
            return "yes";
        }
    },

    watch: {

    },


}
</script>



<style>
body {
    background-color: #303A48;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}


#app {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.vue-part-of-title {
    background-color: transparent;
    color: #67AD7C;
}

.last-part-of-title {
    color: white;
}

.pageIntroParagraph {

    display: flex;
    justify-content: center;
    width: fit-content;
    position: absolute;
    color: white;
    font-size: 14px;
}

.image-container {
    width: 380px;
    height: 350px;
    margin-bottom: 30px;
    position: relative;
    cursor: pointer;
    border-radius: 26px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.85));
}

img {
    width: 100%;
    height: 100%;
    contain: cover;
}

.movieTitleInput {
    width: 280px;
    height: 25px;
    border-radius: 8px;
}

.search-button {
    margin-top: 15px;
    margin-bottom: 40px;
    height: 30px;
    width: 130px;
    border-radius: 8px;
    background-color: #67AD7C;
    cursor: pointer;
    transition: background-color 0.1s;
}

.search-button:hover {
    background-color: green;
}

.content-container {
    width: 80vw;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    gap: 40px;
    overflow-wrap: break-word;
    flex-wrap: wrap;
}

.movie-wrapper {
    width: 300px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.image-container-for-each-movie {
    border-radius: 26px;
    border: solid black 1px;
    overflow: hidden;
    height: fit-content;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
}

.image-container-for-each-movie img {
    border-radius: 26px;
}

.movie-wrapper h4 {
    width: fit-content;
    margin-bottom: 0;
}

.movie-wrapper p {
    margin-top: 0;
}



.error-container {
    height: 20px;
    width: 80px;
    background-color: orange;
    visibility: hidden;
}

.error-container p {
    margin: 0;
}
</style>


<template>
    <!--Nav/menu-->
    <div class="container">
        <h1><span class="vue-part-of-title">{{ pageTitleVue }}</span><span class="last-part-of-title">{{ pageTitleMovieDb
        }}</span></h1>
        <div class="image-container">
            <p class="pageIntroParagraph"><b>{{ pageIntroParagraph }}</b></p>
            <img :src="movieImage" />
        </div>
        <input class="movieTitleInput" type="text" placeholder="what are you looking for?" v-model="searchInputValue"
            @keydown.enter="getMovieBySearching" />

        <div class="error-container">
            <p>*Heeey</p>
        </div>
        <button class="search-button" @click="getMovieBySearching">SEARCH</button>
    </div>

    <!--GENERATED API DATA-->
    <div class="content-container">
        <div v-for=" movie  in  movies " class="movie-wrapper">
            <div class="image-container-for-each-movie">

                <!--Show movie poster if existing-->
                <img v-if="movie.poster_path !== null" :src="this.baseImageUrl + movie.poster_path" alt="Movie Poster">

                <!--Show generic movie poster if poster is missing-->
                <img v-else src="../../assets/images/missingMovie.jpg" alt="">

            </div>
            <h2>{{ movie.title }} ({{ movie.release_date.slice(0, -6) }})</h2>
            <h4>Synopsis</h4>
            <p>
                {{ truncateOverview(movie.overview, 210) }}

            </p>

            <p><b>Genre:</b> {{ this.getGenres(movie.genre_ids) }}</p>
        </div>
    </div>
</template>
