import { createRouter, createWebHashHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import HomeView from "./views/HomeView.vue"

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
            //pass searchData as a prop
            props: route => ({ searchData: route.params.searchData })
        }
    ]
})
