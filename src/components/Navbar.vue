<script>

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


    },

    watch: {

    },


}
</script>



<style scoped>
.container {
    width: 100vw;
    display: flex;
    justify-content: center;
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
    position: relative;
    cursor: pointer;
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

.genre-container {
    height: 20px;
    width: 130px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-left: 10px;
    visibility: hidden;
}

.movies-wrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.25s;
    cursor: pointer;
}

.movies-wrapper:hover {
    color: white;
}

.series-wrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.25s;
    cursor: pointer;
}

.series-wrapper:hover {
    color: white;
}


.container h1 {
    margin: 0;
    flex-grow: 1;
    text-align: center;
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

.prop {
    height: 20px;
    width: 100px;
    margin-right: 10px;
}

.search-and-account-container {
    width: 70px;
    min-width: 60px;
    height: 30px;
    margin-right: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.search-svg-wrapper {
    width: 25px;
    height: 25px;
    cursor: pointer;
}

.search-svg {
    transition: stroke 0.25s;
}

.search-svg-wrapper:hover .search-svg {
    stroke: #ffffff;
}


.account-icon-container {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


.account-icon-wrapper {
    background-color: #50627B;
    width: 100%;
    height: 100%;
    border-radius: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    transition: color 0.25s;
    color: #ffffffcc;
}

.account-icon-wrapper:hover {
    color: white;
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

@media screen and (min-width: 561px) {
    .vue-part-of-title {
        font-size: 2.45rem;
    }

    .last-part-of-title {
        font-size: 2.45rem;
    }

}

@media screen and (min-width: 769px) {

    .genre-container {
        visibility: visible;
    }
}
</style>




<template>
    <!--Nav/menu-->
    <div class="container">

        <div class="burger-container">
            <div class="rectA"></div>
            <div class="rectB"></div>
            <div class="rectC"></div>
        </div>
        <div class="genre-container">
            <div class="movies-wrapper"><b>Movies</b></div>
            <div class="series-wrapper"><b>Series</b></div>
        </div>

        <h1><span class="vue-part-of-title">{{ pageTitleVue }}</span><span class="last-part-of-title">{{ pageTitleMovieDb
        }}</span></h1>

        <div class="prop">
            <!--Used as prop to ensure main title is in center-->
        </div>

        <div class="search-and-account-container">
            <div class="search-svg-wrapper">
                <svg class="search-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                    fill="none" stroke="#ffffffcc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
            <div class="account-icon-container">
                <div class="account-icon-wrapper">
                    A
                </div>
            </div>
        </div>
    </div>
</template>
