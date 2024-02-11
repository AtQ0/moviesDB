<script>
// Import the Axios library, downloaded by npm
import axios from 'axios';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export default {

    data() {
        return {

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
    mounted() {
        const introSwiper = new Swiper('.intro-swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.intro-swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.intro-swiper-btn-next',
                prevEl: '.intro-swiper-btn-prev',

            },

            // Autoplay
            autoplay: {
                delay: 5000, // Delay between slides in milliseconds
                disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
            },
            // Speed (milliseconds)
            speed: 1000, // Adjust the speed as needed (e.g., 800 milliseconds)

            // Transition effect
            effect: 'fade', // Choose the desired transition effect (e.g., 'slide', 'fade', 'cube', 'flip', etc.)

        });
    },


}
</script>



<style scoped>
.intro-swiper-container {
    color: white;
    width: 100%;
    height: fit-content;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
}

.intro-swiper-wrapper {
    height: 400px;
    height: 100vw;
    max-height: 620px;
}

.slides-in-intro-swiper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.intro-swiper-pagination {
    height: fit-content;
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    z-index: 1;
    text-align: center;
}



.intro-swiper-btn-prev,
.intro-swiper-btn-next {
    color: white;
    cursor: pointer;
    visibility: hidden;
    background-color: orange;


}
</style>

<template>
    <!-- Slider main container -->
    <div class="intro-swiper-container swiper">
        <!-- Additional required wrapper -->
        <div class="intro-swiper-wrapper swiper-wrapper">
            <!-- Slides -->
            <div class="slides-in-intro-swiper swiper-slide"><img src="../../assets/images/movie1.jpg" alt=""></div>
            <div class="slides-in-intro-swiper swiper-slide"><img src="../../assets/images/movie2.jpg" alt=""></div>
            <div class="slides-in-intro-swiper swiper-slide"><img src="../../assets/images/movie3.jpg" alt=""></div>
        </div>
        <!-- If we need pagination -->
        <div class="intro-swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="intro-swiper-btn-prev"></div>
        <div class="intro-swiper-btn-next"></div>


    </div>
</template>
