import { createRouter, createWebHistory } from "vue-router";

import CategoriesIndex from "../pages/backend/categories/CategoriesIndex";
import CategoryCreate from "../pages/backend/categories/CategoryCreate";
import CategoryEdit from "../pages/backend/categories/CategoryEdit";
import CategoryDetails from "../pages/backend/categories/CategoryDetails";

import DestinationsIndex from "../pages/backend/destinations/DestinationsIndex";
import DestinationCreate from "../pages/backend/destinations/DestinationCreate";
import DestinationEdit from "../pages/backend/destinations/DestinationEdit";
import DestinationDetails from "../pages/backend/destinations/DestinationDetails";

import ToursIndex from "../pages/backend/tours/ToursIndex";
import TourCreate from "../pages/backend/tours/TourCreate";
import TourEdit from "../pages/backend/tours/TourEdit";
import TourDetails from "../pages/backend/tours/TourDetails";

import PackagesIndex from "../pages/backend/packages/PackagesIndex";
import PackageCreate from "../pages/backend/packages/PackageCreate";
import PackageEdit from "../pages/backend/packages/PackageEdit";
import PackageDetails from "../pages/backend/packages/PackageDetails";

import HotelsIndex from "../pages/backend/hotels/HotelsIndex";
import HotelCreate from "../pages/backend/hotels/HotelCreate";
import HotelEdit from "../pages/backend/hotels/HotelEdit";
import HotelDetails from "../pages/backend/hotels/HotelDetails";

import BlogCreate from "../pages/backend/blogs/BlogCreate";
import BlogsIndex from "../pages/backend/blogs/BlogsIndex"
import BlogEdit from "../pages/backend/blogs/BlogEdit"
import BlogDetails from "../pages/backend/blogs/BlogDetails"

// Frontend
import Frontend from "../pages/frontend";
import CommingSoon from "../pages/frontend/CommingSoon";

import About from "../pages/frontend/AboutUs";
import Contact from "../pages/frontend/ContactUs";
import Blogs from "../pages/frontend/Blogs";
import HotelsAndResorts from "../pages/frontend/hotels/HotelsAndResorts"
import DestinationHotelsAndResorts from "../pages/frontend/hotels/DestinationHotelsAndResorts"
import SubDestinationHotelsAndResorts from "../pages/frontend/hotels/SubDestinationHotelsAndResorts"
import Tours from "../pages/frontend/tours/Tours"
import DestinationTours from "../pages/frontend/tours/DestinationTours"
import SubDestinationTours from "../pages/frontend/tours/SubDestinationTours"
import Packages from "../pages/frontend/packs/Packs"
import DestinationPacks from "../pages/frontend/packs/DestinationPacks"
import SubDestinationPacks from "../pages/frontend/packs/SubDestinationPacks"
import Test from "../pages/backend/Test.vue";
import Dashboard from "../pages/backend/Dashboard.vue";
import SingleBlog from "../pages/frontend/SingleBlog"

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
    // ((((((((((((-- Destinations --)))))))))))))))

    {
        path: "/dashboard/destinations",
        name: "destinations.index",
        component: DestinationsIndex,
    },
    {
        path: "/dashboard/destinations/create",
        name: "destination.create",
        component: DestinationCreate,
    },
    {
        path: "/dashboard/destinations/:id/edit",
        name: "destination.edit",
        component: DestinationEdit,
        props: true,
    },
    {
        path: "/dashboard/destinations/:id/details",
        name: "destination.details",
        component: DestinationDetails,
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

    // (((((((((((((((((--Packages--)))))))))))))))))
    {
        path: "/dashboard/packages",
        name: "packages.index",
        component: PackagesIndex,
    },
    {
        path: "/dashboard/packages/create",
        name: "single_package.create",
        component: PackageCreate,
    },
    {
        path: "/dashboard/packages/:id/edit",
        name: "single_package.edit",
        component: PackageEdit,
        props: true,
    },
    {
        path: "/dashboard/packages/:id/details",
        name: "single_package.details",
        component: PackageDetails,
        props: true,
    },
    // (((((((((((((((((--Hotels And Resorts--)))))))))))))))))
    {
        path: "/dashboard/hotels",
        name: "hotels.index",
        component: HotelsIndex,
    },
    {
        path: "/dashboard/hotels/create",
        name: "hotel.create",
        component: HotelCreate,
    },
    {
        path: "/dashboard/hotels/:id/edit",
        name: "hotel.edit",
        component: HotelEdit,
        props: true,
    },
    {
        path: "/dashboard/hotels/:id",
        name: "hotel.details",
        component: HotelDetails,
        props: true,
    },
    // (((((((((((((((((--Blogs--)))))))))))))))))
    {
        path: "/dashboard/blogs",
        name: "blogs.index",
        component: BlogsIndex,
    },
    {
        path: "/dashboard/blogs/create",
        name: "blog.create",
        component: BlogCreate,

    },
    {
        path: "/dashboard/blogs/:id/edit",
        name: "blog.edit",
        component: BlogEdit,
        props: true,
    },
    {
        path: "/dashboard/blogs/:id/details",
        name: "blog.details",
        component: BlogDetails,
        props: true,
    },

    // [[[[[[[[[[[<<<<<<<<<<<<<<<<<<<<<<<<<<(((((((((((((((((--Front-End--)))))))))))))))))>>>>>>>>>>>>>>>>>>>>>>>>>>]]]]]]]]]]],

    {
        path: "/test",
        name: "Home",
        component: Frontend,
    },
    {
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
        path: "/blogs",
        name: "blogs",
        component: Blogs,
    },
    {
        path: "/blogs/:slug",
        name: "blog",
        component: SingleBlog,
        props: true,
    },

    {
        path: "/tours",
        name: "tours",
        component: Tours,
    },
    {
        path: "/tours/:destination",
        name: "DTours",
        component: DestinationTours,
        props: true
    },
    {
        path: "/tours/:destination/:subdestination",
        name: "SDTours",
        component: SubDestinationTours,
        props: true
    },
    {
        path: "/packages",
        name: "packages",
        component: Packages,
    },
    {
        path: "/packages/:destination",
        name: "Dpackages",
        component: DestinationPacks,
        props: true
    },
    {
        path: "/packages/:destination/:subdestination",
        name: "SDpackages",
        component: SubDestinationPacks,
        props: true
    },
    {
        path: "/hotels-and-resorts",
        name: "hotels-and-resorts",
        component: HotelsAndResorts,
    },
    {
        path: "/hotels-and-resorts/:destination",
        name: "DTours",
        component: DestinationHotelsAndResorts,
        props: true
    },
    {
        path: "/hotels-and-resorts/:destination/:subdestination",
        name: "SDTours",
        component: SubDestinationHotelsAndResorts,
        props: true
    },
    {
        path: "/activities",
        name: "activities",
        component: CommingSoon,
    },
    {
        path: "/transfer",
        name: "transfer",
        component: CommingSoon,
    },

    {
        path: "/test2",
        name: "test",
        component: Test,
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: CommingSoon,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to);
    let name = to.name
    name = name.replace(/\-/g, ' ');
    name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    let title = `${name} - Tourexpect`
    if (to.params.slug) {
        let s = to.params.slug
        s = s.replace(/\-/g, ' ');
        s = s.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        title += ` - ${s}`
    }
    document.title = title
    next();
})

export default router;
