<script>
// Import the Axios library, downloaded by npm
import axios from 'axios';

//Import a Router for use
import router from '../router'


export default {

    data() {
        return {
            searchInputValue: "",
        }
    },
    component: {

    },
    created() {


    },
    computed: {


    },
    methods: {


        linkToPageSearchResults() {

            // Replace spaces with + signs before pushing it to the adress field via router
            const formattedSearchInput = this.searchInputValue.replace(/\s+/g, '+');

            // Navigate to the movie page with the movie's ID as a route parameter
            router.push({ name: 'SearchResults', params: { movieTitle: formattedSearchInput } });

            //Clear inputfield after it has been used
            this.searchInputValue = "";

        },

    },

    watch: {

    },



}
</script>



<style scoped>
.container {
    padding-top: 60px;
    padding-bottom: 10px;
    height: 15vw;
    max-height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-and-filter-container {
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.searchbar-input-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.searchbar-input-container input {
    background-color: rgba(80, 98, 123, 0.2);
    border: solid 2px #719edd;
    height: 6vw;
    width: 100%;
    max-height: 30px;
    border-radius: 6px;
    color: white;
    font-size: 4vw;
    padding-left: 10px;
}

.search-filter-container {
    width: 100%;
    max-width: 300px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.5vw;
}

.year-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin-left: 2px;
    cursor: pointer;
}

.year-filter p {
    margin: 0;
    padding: 0;
}

.year-filter-svg-container {
    display: flex;
    align-items: center;
}

.genre-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    cursor: pointer;
}

.genre-filter p {
    margin: 0;
    padding: 0;
}

.genre-filter-svg-container {
    display: flex;
    align-items: center;
}

.score-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    cursor: pointer;
}

.score-filter p {
    margin: 0;
    padding: 0;
}

.score-filter-svg-container {
    display: flex;
    align-items: center;
}



@media screen and (min-width: 451px) {

    .searchbar-input-container input {
        font-size: 18px;
    }

    .search-filter-container {
        font-size: 11.5px;
    }

    .searchbar-input-container {
        align-items: flex-start;
    }

    .search-filter-container {
        justify-content: flex-start;
    }

    .genre-filter {
        margin-left: 28px;
    }

    .score-filter {
        margin-left: 28px;
    }
}
</style>


<template>
    <div class="container">

        <div class="search-and-filter-container">
            <div class="searchbar-input-container">
                <input type="text" placeholder="Type your title here" v-model="searchInputValue"
                    @keyup.enter="linkToPageSearchResults">

                <div class="search-filter-container">

                    <div class="year-filter">
                        <div class="year-title-container">
                            <p>YEAR</p>
                        </div>
                        <div class="year-filter-svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ffffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>

                    <div class="genre-filter">
                        <div class="genre-title-container">GENRE</div>
                        <div class="genre-filter-svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ffffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>

                    <div class="score-filter">
                        <div class="imdb-title-container">IMDB SCORE</div>
                        <div class="score-filter-svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#ffffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
