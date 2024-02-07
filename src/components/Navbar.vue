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
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.home-container {
    height: fit-content;
    margin-top: 10px;
    margin-left: 3vw;
    transition: transform 0.35s;
}

.home-container:hover {
    transform: scale(1.1);
}


.home-container p {
    margin: 0;
    font-size: 3.3vw;
}

.container h1 {
    margin: 0;
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


.about-container {
    margin-top: 10px;
    margin-right: 3vw;
    transition: transform 0.35s;
}


.about-container:hover {
    transform: scale(1.1);
}

.about-container p {
    margin: 0;
    font-size: 3.3vw;

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
</style>


<template>
    <!--Nav/menu-->
    <div class="container">

        <div class="home-container">
            <p>HOME</p>
        </div>

        <h1><span class="vue-part-of-title">{{ pageTitleVue }}</span><span class="last-part-of-title">{{ pageTitleMovieDb
        }}</span></h1>

        <div class="about-container">
            <p>ABOUT</p>
        </div>
    </div>
</template>
