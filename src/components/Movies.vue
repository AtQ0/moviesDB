<script>
export default {

    data() {
        return {
            apiKey: "8412a2bb",
            pageTitleVue: 'Vue',
            pageTitleMovieDb: 'Movies Database',
            pageIntroParagraph: 'FIND GOOD MOVIES AND SERIES TO WATCH',
            movieImage: "/assets/images/background.jpg",
            moviePlot: null,
            searchInputValue: "",
            movies: null,
            isPageReloaded: true,
        }
    },
    created() {

        this.getMovieBySearching();
    },
    computed: {


    },
    methods: {


        getMovieBySearching() {

            if (this.isPageReloaded === true) {

                const movieDataInfoByTitleQueryLink = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=Batman`;
                fetch(movieDataInfoByTitleQueryLink)
                    .then((response) => response.json())
                    .then((result) => {
                        this.movies = result.Search;
                        this.isPageReloaded = false;
                    })
            }
            else if (this.isPageReloaded === false && this.searchInputValue === "") {
                alert("input field is empty")
            }
            else if (this.searchInputValue.length > 0 && this.searchInputValue.length < 3) {
                alert("Please type in at least three characters")
                this.searchInputValue = "";
            }
            else {

                const movieDataInfoByTitleQueryLink = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.searchInputValue}`;
                fetch(movieDataInfoByTitleQueryLink)
                    .then((response) => response.json())
                    .then((result) => {
                        this.movies = result.Search;
                        this.searchInputValue = "";
                    })
            }
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
    margin-top: 25px;
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
    height: 550px;
    border: #67AD7C 2px solid;
    border-radius: 16px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    padding-bottom: 30px;
}

.image-container-for-each-movie {
    margin-top: 40px;
    width: 80%;
    object-fit: cover;
    border-radius: 16px;
    overflow: hidden;
}
</style>


<template>
    <div class="container">
        <h1><span class="vue-part-of-title">{{ pageTitleVue }}</span><span class="last-part-of-title">{{ pageTitleMovieDb
        }}</span></h1>
        <div class="image-container">
            <p class="pageIntroParagraph"><b>{{ pageIntroParagraph }}</b></p>
            <img :src="movieImage" />
            <div class="intro-floating-description">
                <p>{{ moviePlot }}</p>
            </div>
        </div>
        <input class="movieTitleInput" type="text" placeholder="what are you looking for?" v-model="searchInputValue" />
        <button class="search-button" @click="getMovieBySearching">SEARCH</button>
    </div>
    <div class="content-container">
        <div v-for="movie in movies" class="movie-wrapper">
            <div class="image-container-for-each-movie">
                <img :src="movie.Poster" alt="Movie Poster">
            </div>
            <h2>{{ movie.Title }}</h2>
            <p>Year: {{ movie.Year }}</p>
            <p>ID: {{ movie.imdbID }}</p>
            <p>Type: {{ movie.Type }}</p>

        </div>
    </div>
</template>
