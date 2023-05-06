import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: () => import("../pages/backend/Dashboard.vue"),
    },

    // {
    //     path: "/",
    //     name: "Home",
    //     component: () => import("../pages/frontend/Homepage"),
    //     props: true
    // },
    {
        path: "/dashboard/categories",
        name: "categories.index",
        component: () => import("../pages/backend/categories/CategoriesIndex"),
    },
    {
        path: "/dashboard/categories/create",
        name: "category.create",
        component: () => import("../pages/backend/categories/CategoryCreate"),
    },
    {
        path: "/dashboard/categories/:id/edit",
        name: "category.edit",
        component: () => import("../pages/backend/categories/CategoryEdit"),
        props: true,
    },
    {
        path: "/dashboard/categories/:id/details",
        name: "category.details",
        component: () => import("../pages/backend/categories/CategoryDetails"),
        props: true,
    },
    // ((((((((((((-- Destinations --)))))))))))))))

    {
        path: "/dashboard/destinations",
        name: "destinations.index",
        component: () => import("../pages/backend/destinations/DestinationsIndex"),
    },
    {
        path: "/dashboard/destinations/create",
        name: "destination.create",
        component: () => import("../pages/backend/destinations/DestinationCreate"),
    },
    {
        path: "/dashboard/destinations/:id/edit",
        name: "destination.edit",
        component: () => import("../pages/backend/destinations/DestinationEdit"),
        props: true,
    },
    {
        path: "/dashboard/destinations/:id/details",
        name: "destination.details",
        component: () => import("../pages/backend/destinations/DestinationDetails"),
        props: true,
    },


    // ((((((((((((-- Countries --)))))))))))))))

    {
        path: "/dashboard/countries",
        name: "countries.index",
        component: () => import("../pages/backend/countries/CountriesIndex"),
    },
    {
        path: "/dashboard/countries/create",
        name: "country.create",
        component: () => import("../pages/backend/countries/CountryCreate"),
    },
    {
        path: "/dashboard/countries/:id/edit",
        name: "country.edit",
        component: () => import("../pages/backend/countries/CountryEdit"),
        props: true,
    },
    {
        path: "/dashboard/countries/:id/details",
        name: "country.details",
        component: () => import("../pages/backend/countries/CountryDetails"),
        props: true,
    },

    // (((((((((((((((((--Tours--)))))))))))))))))
    {
        path: "/dashboard/tours",
        name: "tours.index",
        component: () => import("../pages/backend/tours/ToursIndex"),
    },
    {
        path: "/dashboard/tours/create",
        name: "tour.create",
        component: () => import("../pages/backend/tours/TourCreate"),
    },
    {
        path: "/dashboard/tours/:id/edit",
        name: "tour.edit",
        component: () => import("../pages/backend/tours/TourEdit"),
        props: true,
    },
    {
        path: "/dashboard/tours/:id/details",
        name: "tour.details",
        component: () => import("../pages/backend/tours/TourDetails"),
        props: true,
    },

    // (((((((((((((((((--Packages--)))))))))))))))))
    {
        path: "/dashboard/packages",
        name: "packages.index",
        component: () => import("../pages/backend/packages/PackagesIndex"),
    },
    {
        path: "/dashboard/packages/create",
        name: "single_package.create",
        component: () => import("../pages/backend/packages/PackageCreate"),
    },
    {
        path: "/dashboard/packages/:id/edit",
        name: "single_package.edit",
        component: () => import("../pages/backend/packages/PackageEdit"),
        props: true,
    },
    {
        path: "/dashboard/packages/:id/details",
        name: "single_package.details",
        component: () => import("../pages/backend/packages/PackageDetails"),
        props: true,
    },
    // (((((((((((((((((--Activities--)))))))))))))))))
    {
        path: "/dashboard/activities",
        name: "activities.index",
        component: () => import("../pages/backend/activities/ActivitiesIndex"),
    },
    {
        path: "/dashboard/activities/create",
        name: "activity.create",
        component: () => import("../pages/backend/activities/ActivityCreate"),
    },
    {
        path: "/dashboard/activities/:id/edit",
        name: "activity.edit",
        component: () => import("../pages/backend/activities/ActivityEdit"),
        props: true,
    },
    // (((((((((((((((((--Visas--)))))))))))))))))
    {
        path: "/dashboard/visas",
        name: "visas.index",
        component: () => import("../pages/backend/visas/VisasIndex"),
    },
    {
        path: "/dashboard/visas/create",
        name: "visa.create",
        component: () => import("../pages/backend/visas/VisaCreate"),
    },
    {
        path: "/dashboard/visas/:id/edit",
        name: "visa.edit",
        component: () => import("../pages/backend/visas/VisaEdit"),
        props: true,
    },
    {
        path: "/dashboard/packages/:id/details",
        name: "activity.details",
        component: () => import("../pages/backend/visas/VisaDetails"),
        props: true,
    },
    // (((((((((((((((((--Hotels And Resorts--)))))))))))))))))
    {
        path: "/dashboard/hotels",
        name: "hotels.index",
        component: () => import("../pages/backend/hotels/HotelsIndex"),
    },
    {
        path: "/dashboard/hotels/create",
        name: "hotel.create",
        component: () => import("../pages/backend/hotels/HotelCreate"),
    },
    {
        path: "/dashboard/hotels/:id/edit",
        name: "hotel.edit",
        component: () => import("../pages/backend/hotels/HotelEdit"),
        props: true,
    },
    {
        path: "/dashboard/hotels/:id",
        name: "hotel.details",
        component: () => import("../pages/backend/hotels/HotelDetails"),
        props: true,
    },
    // (((((((((((((((((--Blogs--)))))))))))))))))
    {
        path: "/dashboard/blogs",
        name: "blogs.index",
        component: () => import("../pages/backend/blogs/BlogsIndex"),
    },
    {
        path: "/dashboard/blogs/create",
        name: "blog.create",
        component: () => import("../pages/backend/blogs/BlogCreate"),

    },
    {
        path: "/dashboard/blogs/:id/edit",
        name: "blog.edit",
        component: () => import("../pages/backend/blogs/BlogEdit"),
        props: true,
    },
    {
        path: "/dashboard/blogs/:id/details",
        name: "blog.details",
        component: () => import("../pages/backend/blogs/BlogDetails"),
        props: true,
    },
    // (((((((((((((((((--Options--)))))))))))))))))
    {
        path: "/dashboard/options",
        name: "options",
        component: () => import("../pages/backend/options/Options"),
    },
    // (((((((((((((((((--Jobs--)))))))))))))))))
    {
        path: "/dashboard/jobs",
        name: "jobs",
        component: () => import("../pages/backend/jobs/Jobs"),
    },

    // [[[[[[[[[[[<<<<<<<<<<<<<<<<<<<<<<<<<<(((((((((((((((((--Front-End--)))))))))))))))))>>>>>>>>>>>>>>>>>>>>>>>>>>]]]]]]]]]]],

    {
        path: "/:lang?/about",
        name: "about",
        // component: About,
        component: () => import("../pages/frontend/AboutUs")
    },
    {
        path: "/:lang?/contact",
        name: "contact",
        component: () => import("../pages/frontend/ContactUs"),
        props: true
    },
    {
        path: "/:lang?/blogs",
        name: "blogs",
        component: () => import("../pages/frontend/Blogs"),
        props: true
    },
    {
        path: "/:lang?/blogs/:slug",
        name: "blog",
        component: () => import("../pages/frontend/SingleBlog"),
        props: true,
    },
    {
        path: "/:lang?/we-are-hiring",
        name: "we-are-hiring",
        component: () => import("../pages/frontend/WeAreHiring"),
        props: true,
    },

    {
        path: "/:lang?/tours",
        name: "tours",
        component: () => import("../pages/frontend/tours/Tours"),
        props: true
    },
    {
        path: "/:lang?/tours/details/:slug",
        name: "tours-details",
        component: () => import("../pages/frontend/tours/TourDetails"),
        props: true
    },

    {
        path: "/:lang?/tours/:destination",
        name: "DTours",
        component: () => import("../pages/frontend/tours/DestinationTours"),
        props: true
    },
    {
        path: "/:lang?/tours/:destination/:subdestination",
        name: "SDTours",
        component: () => import("../pages/frontend/tours/SubDestinationTours"),
        props: true
    },


    {
        path: "/:lang?/visas/:passport/:visa",
        name: "SDVisas",
        component: () => import("../pages/frontend/visas/PassportVisa"),
        props: true
    },
    {
        path: "/:lang?/visas/:passport/:visa/proceed-to-apply",
        name: "proceed-to-apply",
        component: () => import("../pages/frontend/visas/ProceedToApply"),
        props: true
    },
    {
        path: "/success",
        name: "success",
        component: () => import("../pages/frontend/Success"),
        props: true
    },
    {
        path: "/cancel",
        name: "cancel",
        component: () => import("../pages/frontend/Cancel"),
        props: true
    },
    {
        path: "/:lang?/visas/:passport/:visa/payment",
        name: "payment",
        component: () => import("../pages/frontend/visas/Payment"),
        props: true
    },

    {
        path: "/:lang?/activities",
        name: "activities",
        component: () => import("../pages/frontend/activities/Activities"),
        props: true
    },
    {
        path: "/:lang?/activities/:destination",
        name: "DActivities",
        component: () => import("../pages/frontend/activities/DestinationActivities"),
        props: true
    },
    {
        path: "/:lang?/activities/:destination/:subdestination",
        name: "SDActivities",
        component: () => import("../pages/frontend/activities/SubDestinationActivities"),
        props: true
    },


    {
        path: "/:lang?/packages",
        name: "packages",
        component: () => import("../pages/frontend/packs/Packs"),
        props: true
    },

    {
        path: "/:lang?/temp",
        name: "temp",
        component: () => import("../pages/frontend/packs/temp"),
        props: true
    },
    {
        path: "/:lang?/packages/:destination",
        name: "Dpackages",
        component: () => import("../pages/frontend/packs/DestinationPacks"),
        props: true
    },
    {
        path: "/:lang?/packages/:destination/:subdestination",
        name: "SDpackages",
        component: () => import("../pages/frontend/packs/SubDestinationPacks"),
        props: true
    },
    {
        path: "/:lang?/packages/details/:slug",
        name: "package-details",
        component: () => import("../pages/frontend/packs/PackDetails"),
        props: true
    },
    {
        path: "/:lang?/activities/details/:slug",
        name: "activity-details",
        component: () => import("../pages/frontend/activities/ActivityDetails"),
        props: true
    },
    {
        path: "/:lang?/hotels-and-resorts",
        name: "hotels-and-resorts",
        component: () => import("../pages/frontend/hotels/HotelsAndResorts"),
    },
    {
        path: "/:lang?/hotels-and-resorts/:destination",
        name: "DHotels",
        component: () => import("../pages/frontend/hotels/DestinationHotelsAndResorts"),
        props: true
    },
    {
        path: "/:lang?/hotels-and-resorts/:destination/:subdestination",
        name: "SDHotels",
        component: () => import("../pages/frontend/hotels/SubDestinationHotelsAndResorts"),
        props: true
    },
    {
        path: "/:lang?/transfer",
        name: "transfer",
        component: () => import("../pages/frontend/ComingSoon"),
        props: true
    },

    {
        path: "/:lang?/test",
        name: "test",
        component: () => import("../pages/backend/Test.vue"),
        props: true,
    },

    {
        path: "/:lang?/test2",
        name: "test2",
        component: () => import("../pages/backend/Test2.vue"),
        props: true,
    },
    {
        path: "/:lang?/:pathMatch(.*)*",
        name: "404",
        component: () => import("../pages/frontend/ComingSoon"),
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
});

// router.beforeEach((to, from, next) => {
//     // let name = to.name
//     // name = name.replace(/\-/g, ' ');
//     // name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
//     // let title = `${name} - Tourexpect`
//     // if (to.params.slug) {
//     //     let s = to.params.slug
//     //     s = s.replace(/\-/g, ' ');
//     //     s = s.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
//     //     title += ` - ${s}`
//     // }
//     // document.title = title


//     if (window.ga) {
//         window.ga('set', 'page', to.fullPath)
//         window.ga('send', 'pageview')
//     }
//     next();
// })

/*
router.beforeEach((to, from, next) => {
  if (window.ga) {
    window.ga('set', 'page', to.fullPath)
    window.ga('send', 'pageview')
  }
  next()
})

*/

export default router;
