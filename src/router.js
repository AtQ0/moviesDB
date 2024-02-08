import { createRouter, createWebHashHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import HomeView from "./views/HomeView.vue"
import MovieView from "./views/MovieView.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            component: AboutView,
            path: "/about"
        },
        {
            component: HomeView,
            name: "Home",
            path: "/",
        }
    ]
})
