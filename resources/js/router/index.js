import { createRouter, createWebHistory } from "vue-router";

import CategoriesIndex from "../pages/backend/categories/CategoriesIndex";
import CategoryCreate from "../pages/backend/categories/CategoryCreate";
import CategoryEdit from "../pages/backend/categories/CategoryEdit";
import CategoryDetails from "../pages/backend/categories/CategoryDetails";

import ToursIndex from "../pages/backend/tours/ToursIndex";
import TourCreate from "../pages/backend/tours/TourCreate";
import TourEdit from "../pages/backend/tours/TourEdit";
import TourDetails from "../pages/backend/tours/TourDetails";

import AccessoriesIndex from "../pages/backend/accessories/AccessoriesIndex";
import AccessoryCreate from "../pages/backend/accessories/AccessoryCreate";
import AccessoryEdit from "../pages/backend/accessories/AccessoryEdit";
import AccessoryDetails from "../pages/backend/accessories/AccessoryDetails";

import Frontend from "../pages/frontend";
import CommingSoon from "../pages/frontend/CommingSoon";

import About from "../pages/frontend/AboutUs";
import Contact from "../pages/frontend/ContactUs";

import Test from "../pages/backend/Test.vue";
import Hero from "../components/HeroCarousel";
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
        name: "category.create",
        component: CategoryCreate,
    },
    {
        path: "/dashboard/categories/:id/edit",
        name: "category.edit",
        component: CategoryEdit,
        props: true,
    },
    {
        path: "/dashboard/categories/:id/details",
        name: "category.details",
        component: CategoryDetails,
        props: true,
    },

    // (((((((((((((((((--Tours--)))))))))))))))))
    {
        path: "/dashboard/tours",
        name: "tours.index",
        component: ToursIndex,
    },
    {
        path: "/dashboard/tours/create",
        name: "tour.create",
        component: TourCreate,
    },
    {
        path: "/dashboard/tours/:id/edit",
        name: "tour.edit",
        component: TourEdit,
        props: true,
    },
    {
        path: "/dashboard/tours/:id/details",
        name: "tour.details",
        component: TourDetails,
        props: true,
    },
    // (((((((((((((((((--Tours--)))))))))))))))))
    {
        path: "/dashboard/accessories",
        name: "accessories.index",
        component: AccessoriesIndex,
    },
    {
        path: "/dashboard/accessories/create",
        name: "accessory.create",
        component: AccessoryCreate,
    },
    {
        path: "/dashboard/accessories/:id/edit",
        name: "accessory.edit",
        component: AccessoryEdit,
        props: true,
    },
    {
        path: "/dashboard/accessories/:id/details",
        name: "accessory.details",
        component: AccessoryDetails,
        props: true,
    },

    // (((((((((((((((((--Front-End--))))))))))))))))),

    {
        path: "/test",
        name: "Frontend",
        component: Frontend,
    }, {
        path: "/",
        name: "CommingSoon",
        component: CommingSoon,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
    },
    {
        path: "/test2",
        name: "test",
        component: Test,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
