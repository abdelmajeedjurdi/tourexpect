import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: () => import("../pages/backend/Dashboard.vue"),
    },

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
