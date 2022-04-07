import { createRouter, createWebHistory } from "vue-router";

import CategoriesIndex from "../pages/backend/categories/CategoriesIndex";
import CategoriesCreate from "../pages/backend/categories/CategoryCreate";
import CategoriesEdit from "../pages/backend/categories/CategoryEdit";

import Test from "../pages/backend/Test.vue";
import Dashboard from "../pages/backend/Dashboard.vue";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/dashboard/categories",
        name: "categories.index",
        component: CategoriesIndex,
    },
    {
        path: "/dashboard/categories/create",
        name: "categories.create",
        component: CategoriesCreate,
    },
    {
        path: "/dashboard/categories/:id/edit",
        name: "categories.edit",
        component: CategoriesEdit,
        props: true,
    },
    {
        path: "/dashboard/test",
        name: "test",
        component: Test,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
