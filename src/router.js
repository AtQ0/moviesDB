import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "./views/HomeView.vue"
import UserView from "./views/UserView.vue"
import MoviesView from "./views/MoviesView.vue"
import SeriesView from "./views/SeriesView.vue"
import SearchView from './views/SearchView.vue'
import SearchResultsView from './views/SearchResultsView.vue'
import MovieView from "./views/MovieView.vue"


export default createRouter({
    history: createWebHashHistory(),
    routes: [

        {
            component: HomeView,
            name: "Home",
            path: "/",

        },
        {
            component: UserView,
            name: "User",
            path: "/user"
        },
        {
            component: MoviesView,
            name: "Movies",
            path: "/movies"
        },
        {
            component: SeriesView,
            name: "Series",
            path: "/series"
        },
        {
            component: SearchView,
            name: "Search",
            path: "/search",
            props: true,

        },
        {
            component: SearchResultsView,
            name: "SearchResults",
            path: "/search/:movieTitle",
            props: true,

        },
        {
            component: MovieView,
            name: "Movie",
            path: "/movie/:movieId",
            props: true,
        },


    ]
})
