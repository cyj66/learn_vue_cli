import Vue from "vue"
import VueRouter from "vue-router"

const Home=()=>import('views/home/Home.vue')
const Category=()=>import('views/category/Category.vue')
const Shopping=()=>import('views/shopping/Shopping.vue')
const Profile=()=>import('views/profile/Profile.vue')

Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/shopping',
        component:Shopping
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/home',
        component:Home
    },
]
const router=new VueRouter({
    routes,
    mode:'history'
})

export default router