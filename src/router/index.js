import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginModal from "@/components/LoginModal";
import IntoGardenView from "../views/IntoGardenView.vue"
import SignUpModal from "@/components/SignUpModal";
import AdminView from "@/views/AdminView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },

    {
        path: '/signup',
        name: 'signupRoute',
        component: SignUpModal
    },

    {
        path: '/login',
        name: 'loginRoute',
        component: LoginModal
    },
    {
      path: '/admin',
      name: 'adminRoute',
      component: AdminView
    },
    {
        path: '/intoGarden',
        name: 'intoGardenRoute',
        component: IntoGardenView
    }
]

const router = new VueRouter({
    routes
})

export default router
