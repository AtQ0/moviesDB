
<template>
    <!--Nav/menu-->
    <div class="container">

        <div class="logged-in-title-container">
            <h1 @click="linkToPageHome"><span class="vue-part-of-title">{{ pageTitleVue }}</span><span
                    class="last-part-of-title">{{
                        pageTitleMovieDb
                    }}</span></h1>
        </div>


        <div class="burger-and-other-container">
            <div class="burger-container">
                <div class="rectA"></div>
                <div class="rectB"></div>
                <div class="rectC"></div>
            </div>

            <div class="genre-container">
                <div class="movies-wrapper">
                    <router-link to="/movies" class="router-link-custom"><b>Movies</b></router-link>
                </div>
                <div class="series-wrapper">
                    <router-link to="/series" class="router-link-custom"><b>Series</b></router-link>
                </div>
            </div>
        </div>

        <div class="search-and-user-account-container">

            <div @click="linkToPageSearch" class="search-svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
                    stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            <div class="user-account-container">
                <div class="user-account-wrapper">
                    <p>A</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
//Import a Router for use
import router from '../router'
//Importer a RouterLink for setting up a router
import { RouterLink } from 'vue-router';


export default {
    data() {
        return {
            pageTitleVue: 'Vue',
            pageTitleMovieDb: 'Movies',
        }
    },
    created() {


    },
    computed: {


    },
    methods: {

        linkToPageHome() {
            // Use router.push to navigate to page Home
            router.push('/');
        },

        linkToPageSearch() {
            // Use router.push to navigate to page Search
            router.push('/search')
        },

    },

    watch: {

    },


}
</script>



<style scoped>
.router-link-custom {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.router-link-custom:hover {
    color: rgba(255, 255, 255, 1.0);
}


.container {
    width: 100vw;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 2;
    background-color: transparent;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
}

.burger-and-other-container {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.burger-container {
    height: fit-content;
    height: 20px;
    width: 40px;
    margin-left: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.rectA {
    width: 30px;
    height: 2.5px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 80px;
    position: absolute;
    top: 3px;
    transition: background-color 0.25s;
}

.rectB {
    width: 30px;
    height: 2.5px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 80px;
    position: absolute;
    top: 9px;
    transition: background-color 0.25s;
}

.rectC {
    width: 30px;
    height: 2.5px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: background-color 0.25s;
    border-radius: 80px;
    position: absolute;
    top: 15px;
}

.burger-container:hover .rectA {
    background-color: rgba(255, 255, 255, 1);
}

.burger-container:hover .rectB {
    background-color: rgba(255, 255, 255, 1);
}

.burger-container:hover .rectC {
    background-color: rgba(255, 255, 255, 1);
}

.mobile-title-container {
    height: fit-content;
    margin-left: 10px;
    cursor: pointer;
}

.mobile-title-container h1 {
    padding: 0;
    margin: 0;
}

.logged-in-title-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    z-index: -1;
}

.logged-in-title-container h1 {
    cursor: pointer;
}

.vue-part-of-title {
    background-color: transparent;
    color: #67AD7C;
    font-family: Slate;
    font-size: 7vw;
}

.last-part-of-title {
    color: white;
    font-size: 7vw;
}

.genre-container {
    display: flex;
}

.genre-container div {
    margin-left: 2vw;
    font-size: 15px;
    display: none;
}

.search-and-user-account-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3vw;
    z-index: 5;
}

.search-svg-container {
    height: fit-content;
    margin-right: 2vw;
    margin-top: 3px;
    cursor: pointer;
}


.user-account-wrapper {
    background-color: #50627B;
    border: solid 2px #719edd;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 28.5px;
    height: 28.5px;
    border-radius: 8vw;
    font-size: 22px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.user-account-wrapper:hover {
    color: rgba(255, 255, 255, 1);
}

.user-account-wrapper p {
    margin: 0;
    padding: 0;
}



@media screen and (min-width: 451px) {
    .mobile-title-container h1 {
        padding-bottom: 0.15vw;
    }

}

@media screen and (min-width: 475px) {
    .mobile-title-container h1 {
        padding-bottom: 0.2vw;
    }

}

@media screen and (min-width: 501px) {

    .mobile-title-container h1 {
        padding-bottom: 0.25vw;
    }
}

@media screen and (min-width: 525px) {
    .mobile-title-container h1 {
        padding-bottom: 0.3vw;
    }
}

@media screen and (min-width: 550px) {
    .mobile-title-container h1 {
        padding-bottom: 0.35vw;
    }
}

@media screen and (min-width: 561px) {
    .vue-part-of-title {
        font-size: 40px;
    }

    .last-part-of-title {
        font-size: 40px;
    }
}

@media screen and (min-width: 575px) {
    .mobile-title-container h1 {
        padding-bottom: 0.4vw;
    }
}

@media screen and (min-width: 600px) {
    .mobile-title-container h1 {
        padding-bottom: 0.45vw;
    }
}

@media screen and (min-width: 620px) {
    .mobile-title-container h1 {
        padding-bottom: 0.5vw;
    }
}

@media screen and (min-width: 650px) {
    .mobile-title-container h1 {
        padding-bottom: 0.55vw;
    }
}

@media screen and (min-width: 675px) {
    .mobile-title-container h1 {
        padding-bottom: 0.6vw;
    }

    .mobile-title-container h1 {
        padding-bottom: 0.6vw;
    }
}

@media screen and (min-width: 700px) {
    .mobile-title-container h1 {
        padding-bottom: 0.65vw;
    }
}

@media screen and (min-width: 725px) {
    .mobile-title-container h1 {
        padding-bottom: 0.7vw;
    }
}

@media screen and (min-width: 730px) {

    .genre-container div {
        display: block;
    }
}

@media screen and (min-width: 750px) {
    .mobile-title-container h1 {
        padding-bottom: 0.75vw;
    }
}

@media screen and (min-width: 775px) {
    .mobile-title-container h1 {
        padding-bottom: 0.8vw;
    }
}

@media screen and (min-width: 797px) {
    .genre-container div {
        font-size: 18px;
    }
}

@media screen and (min-width: 1100px) {

    .mobile-title-container h1 {
        padding-bottom: 9px;
    }

    .mobile-title-container {
        height: fit-content;
        margin-left: 15px;
    }
}
</style>
