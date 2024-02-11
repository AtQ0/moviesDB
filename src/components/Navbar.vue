<script>

export default {
    data() {
        return {

            pageTitleVue: 'Vue',
            pageTitleMovieDb: 'Movies',
            isUserLoggedIn: false,
            isSearchSvgClicked: false,

        }
    },
    created() {



    },
    computed: {


    },
    methods: {

        changeNavBarOnLogin() {

            //Toggle if user has logged in
            this.isUserLoggedIn = true;

            //Change login and register for search and account
            const loginAndRegisterContainer = document.querySelector(".login-and-register-container");
            const searchAndUserAccountContainer = document.querySelector(".search-and-user-account-container");
            const burgerContainer = document.querySelector(".burger-container");

            loginAndRegisterContainer.style.display = "none";
            searchAndUserAccountContainer.style.display = "flex";
            burgerContainer.style.display = "block";
            burgerContainer.style.marginLeft = "3vw";


            //Adjust nav content to user view
            searchAndUserAccountContainer.style.marginRight = "3vw";

        },

        showSearchInput() {
            this.isSearchSvgClicked = true;
        },

    },

    watch: {

    },


}
</script>



<style scoped>
.container {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 2;
    background-color: transparent;
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

.must-see-wrapper {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.must-see-wrapper:hover {
    color: rgba(255, 255, 255, 1.0);
}

.movies-wrapper {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.movies-wrapper:hover {
    color: rgba(255, 255, 255, 1.0);
}

.series-wrapper {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.movies-wrapper:hover {
    color: rgba(255, 255, 255, 1.0);
}

.family-wrapper {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.series-wrapper:hover {
    color: rgba(255, 255, 255, 1.0);
}

.faq-wrapper {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.family-wrapper:hover {
    color: rgba(255, 255, 255, 1.0);
}

.prices-wrapper {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.35s;
}

.faq-wrapper:hover {
    color: rgba(255, 255, 255, 1.0);
}

.login-and-register-container {
    display: flex;
    align-items: center;
}

.login-wrapper {
    color: rgba(255, 255, 255, 0.8);
    height: fit-content;
    margin-right: 15px;
    margin-left: 15px;
    transition: color 0.35s;
    cursor: pointer;
    visibility: hidden;
}

.login-wrapper:hover {
    color: rgba(255, 255, 255, 1);
}

.register-btn-container {
    margin-right: 3vw;
}

.register-btn-container button {
    background-color: #50627B;
    font-family: SlateReg;
    font-size: 3vw;
    color: rgba(255, 255, 255, 0.8);
    transition: background-color 0.75s, color 0.35s;
    width: 21vw;
    border-radius: 4vw;
    padding: 8px;
    border: none;
    cursor: pointer;
}

.register-btn-container button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #67AD7C;

}

.search-and-user-account-container {
    background-color: coral;
    padding: 4px;
    display: flex;
    display: none;
}

.search-svg-container {
    background-color: blue;
    width: 40px;
    height: 40px;
}

.user-account-container {
    background-color: green;
    width: 40px;
    height: 40px;
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

    .burger-container {
        margin-left: 15px;
    }

    .register-btn-container {
        margin-right: 15px;
    }

}

@media screen and (min-width: 501px) {
    .register-btn-container button {
        font-size: 15px;
        width: 105px;
    }

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

@media screen and (min-width: 622px) {
    .login-wrapper {
        visibility: visible;
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

    .burger-container {
        display: none;
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

    .login-wrapper {
        font-size: 18px;
    }

    .register-btn-container button {
        font-size: 18px;
    }
}

@media screen and (min-width: 1100px) {

    .mobile-title-container h1 {
        padding-bottom: 9px;
    }

    .burger-container {
        margin-left: 0;
    }

    .mobile-title-container {
        height: fit-content;
        margin-left: 15px;
    }
}
</style>


<template>
    <!--Nav/menu-->
    <div class="container">

        <div v-if="isUserLoggedIn" class="logged-in-title-container">
            <h1><span class="vue-part-of-title">{{ pageTitleVue }}</span><span class="last-part-of-title">{{
                pageTitleMovieDb
            }}</span></h1>
        </div>


        <div class="burger-and-other-container">
            <div class="burger-container">
                <div class="rectA"></div>
                <div class="rectB"></div>
                <div class="rectC"></div>
            </div>

            <div v-if="!isUserLoggedIn" class="mobile-title-container">
                <h1><span class="vue-part-of-title">{{ pageTitleVue }}</span><span class="last-part-of-title">{{
                    pageTitleMovieDb
                }}</span></h1>
            </div>


            <div class="genre-container">
                <div v-if="!isUserLoggedIn" class="must-see-wrapper"><b>Must see</b></div>
                <div class="movies-wrapper"><b>Movies</b></div>
                <div class="series-wrapper"><b>Series</b></div>
                <div v-if="!isUserLoggedIn" class="family-wrapper"><b>Family</b></div>
                <div v-if="!isUserLoggedIn" class="faq-wrapper"><b>FAQ</b></div>
                <div v-if="!isUserLoggedIn" class="prices-wrapper"><b>Prices</b></div>
            </div>
        </div>



        <div class="login-and-register-container">

            <div @click="changeNavBarOnLogin" class="login-wrapper"><b>LOGIN</b></div>

            <div class="register-btn-container">
                <button><b>REGISTER</b></button>
            </div>

        </div>

        <div class="search-and-user-account-container">

            <div class="search-svg-container">
                hww
            </div>

            <div class="user-account-container">
                jjje
            </div>

        </div>

    </div>
</template>
