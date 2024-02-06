<script>
// Import the Axios library, downloaded by npm
import axios from 'axios';

export default {



    data() {
        return {
            pageTitleVue: 'Vue',
            pageTitleMovieDb: 'Movie Database',
            pageIntroParagraph: 'FIND GOOD MOVIES AND SERIES TO WATCH',
            movieImage: "/assets/images/background.jpg",
            searchInputValue: "",
        }
    },
    created() {


    },
    computed: {


    },
    methods: {





    },

    watch: {

    },


}
</script>



<style>
/*============================*/
/*========== FONTS ===========*/
/*============================*/


@font-face {
    font-family: "SlateMedium";
    src: url("../../assets/fonts/SlateMedium.TTF") format("opentype");
    font-weight: medium;
    font-style: normal;
}

@font-face {
    font-family: "SlateReg";
    src: url("../../assets/fonts/SlateRg.TTF") format("opentype");
    font-weight: normal;
    font-style: normal;
}


body {
    font-family: SlateReg;
    font-size: 18px;
    background-color: #303A48;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

h1,
h2,
h3,
h4,
h5 {
    font-family: SlateMedium;
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
    font-family: Slate;
    font-size: 3rem;
}

.last-part-of-title {
    color: white;
    font-size: 3rem;
}

.pageIntroParagraph {
    display: flex;
    justify-content: center;
    width: fit-content;
    position: absolute;
    color: white;
    font-size: 18px;
}

.image-container {
    width: 450px;
    height: 400px;
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
    width: 330px;
    height: 35px;
    padding-left: 15px;
    border-radius: 8px;
    background-color: #50627B;
    color: white;
    font-size: 1.2rem;
    border: none;

}

.movieTitleInput::placeholder {
    color: #ffffff;
    opacity: 1;
}

.search-button {
    margin-top: 15px;
    margin-bottom: 40px;
    height: 40px;
    width: 150px;
    border-radius: 8px;
    background-color: #67AD7C;
    cursor: pointer;
    transition: background-color 0.1s;
    border: none;
    font-size: 1.2rem;
    color: white;
}

.search-button:hover {
    background-color: #588157;
}

.error-container {
    height: 20px;
    width: 75%;
    font-size: 10px;
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
        <input class="movieTitleInput" type="text" placeholder="What are you looking for?" v-model="searchInputValue"
            @keydown.enter="getMovieBySearching" />

        <div class="error-container">
            <p>*Please write the name of the title you are searching for.</p>
        </div>
        <button class="search-button" @click="getMovieBySearching">SEARCH</button>
    </div>
</template>
