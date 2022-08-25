import { createRouter, createWebHistory } from "vue-router";

import CategoriesIndex from "../pages/backend/categories/CategoriesIndex";
import CategoryCreate from "../pages/backend/categories/CategoryCreate";
import CategoryEdit from "../pages/backend/categories/CategoryEdit";
import CategoryDetails from "../pages/backend/categories/CategoryDetails";

import ProductsIndex from "../pages/backend/products/ProductsIndex";
import ProductCreate from "../pages/backend/products/ProductCreate";
import ProductEdit from "../pages/backend/products/ProductEdit";
import ProductDetails from "../pages/backend/products/ProductDetails";

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

    // (((((((((((((((((--Products--)))))))))))))))))
    {
        path: "/dashboard/products",
        name: "products.index",
        component: ProductsIndex,
    },
    {
        path: "/dashboard/products/create",
        name: "product.create",
        component: ProductCreate,
    },
    {
        path: "/dashboard/products/:id/edit",
        name: "product.edit",
        component: ProductEdit,
        props: true,
    },
    {
        path: "/dashboard/products/:id/details",
        name: "product.details",
        component: ProductDetails,
        props: true,
    },
    // (((((((((((((((((--Products--)))))))))))))))))
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
