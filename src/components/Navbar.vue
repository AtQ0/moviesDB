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
    font-size: 2rem;
}

.last-part-of-title {
    color: white;
    font-size: 2rem;
}
</style>


<template>
    <!--Nav/menu-->
    <div class="container">
        <h1><span class="vue-part-of-title">{{ pageTitleVue }}</span><span class="last-part-of-title">{{ pageTitleMovieDb
        }}</span></h1>
    </div>
</template>
