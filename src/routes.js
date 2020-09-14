import Home from "@/components/Home";
import MyProjects from "@/components/MyProjects";
import Foto from "@/components/Foto";
import Eat from "@/components/Eat";
import Product from "@/components/Product";
import Recipe from "@/components/Recipe";
import Check from "@/components/Check";


export const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/eat', component: Eat
    },
    {
        path: '/myprojects', component: MyProjects
    },
    {
        path: '/product', component: Product
},
    {
        path: '/recipe', component: Recipe
    },
    {
        path: '/foto', component: Foto
    },
    {
        path: '/check', component: Check
    },

];