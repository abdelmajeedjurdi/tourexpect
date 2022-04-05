import { createRouter, createWebHistory } from "vue-router";

import CategoriesIndex from "../pages/categories/CategoriesIndex";
import CategoriesCreate from "../pages/categories/CategoriesCreate";
import CategoriesEdit from "../pages/categories/CategoriesEdit";

const routes = [
    {
        path: "/dashboard",
        name: "categories.index",
        component: CategoriesIndex,
    },
    {
        path: "/categories/create",
        name: "categories.create",
        component: CategoriesCreate,
    },
    {
        path: "/categories/:id/edit",
        name: "categories.edit",
        component: CategoriesEdit,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
