<script>
export default {
    data() {
        return {
            movieInfo: null,
        };
    },
    created() {
        this.show();
    },
    watch: {
        // Watch for changes in $route.meta.movieInfo
        '$route.meta'(newVal) {
            this.movieInfo = newVal.movieInfo;
            this.show();
        },
    },
    computed: {


    }, props: {
        movieId: {
            type: String,
            required: true
        }
    },
    methods: {

        show() {
            console.log("GOT IT", this.movieInfo)
        }
    },




}
</script>


<style>
</style>

<template>
    <div>
        This MOVIE is great.

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quia commodi quod modi harum tenetur vero
        saepe
        accusantium reprehenderit voluptatibus maiores corrupti. Nobis omnis dolorum explicabo ducimus ipsam magnam sequi
        dolore expedita ex commodi deleniti voluptatum impedit blanditiis optio exercitationem error corrupti nulla
        consecteum provident quia quas at accusantium quos repudiandae nihil similique rem
        praesentium, debitis saepe sapiente magnam delectus expedita autem aliquam ad distinctio. Repudiandae, ut ducimus.
        Doloribus voluptates modi excepturi minus. Deserunt voluptates ducimus cupiditate blanditiis? Distinctio
        reprehenderit qui natus accusamus eius, cumque quod voluptatum rem temporibus ipsa explicabo omnis magnam vitae,
        officiis maiores excepturi! Placeat aspernatur architecto qui numquam unde officia a iste nemo illum inventore
        laborum perferendis error, nam culpa neque odio, consequatur, recusandae fugit laudantium! Illo aliquid vero quas.
        Tempore odio ullam ratione ducimus temporibus nostrum, vero voluptate ut non maxime aut earum blanditiis sed
        mollitia odit rerum libero esse aliquam autem iusto excepturi quae sapiente. Eos dolore maiores consectetur minus
        repellendus rerum aliquam molestiae tempore, explicabo ut dolorum similique assumenda minima iusto, nobis veritatis
        eaque, suscipit fuga? Nemo libero eum laborum, vero dolores culpa quis debitis minus ad quos neque magni eaque rem
        earum quo, obcaecati consectetur? In, non impedit consequatur rem odio id. In neque, provident explicabo error sed,
        eos sint, quis eligendi aut quam recusandae? Corrupti debitis, neque quo, animi eligendi vero quia quasi
        exercitationem sapiente illum perspiciatis iure beatae, ducimus quisquam!.
    </div>

    <div>
        <h1>Movie Details</h1>
        <p>Movie ID: {{ movieId }}</p>
        <!-- Additional movie details can be displayed here -->
    </div>
</template>
