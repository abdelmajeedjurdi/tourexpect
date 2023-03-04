"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_frontend_Blogs_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vueuse_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vueuse/head */ "./node_modules/@vueuse/head/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables/blogs */ "./resources/js/composables/blogs.js");
/* harmony import */ var _composables_destinations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/destinations */ "./resources/js/composables/destinations.js");
/* harmony import */ var _composables_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../composables/categories */ "./resources/js/composables/categories.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Blogs',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();

    var _useBlogs = (0,_composables_blogs__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        getFilteredBlogs = _useBlogs.getFilteredBlogs,
        blogs = _useBlogs.blogs,
        pagenation = _useBlogs.pagenation;

    var _useDestinations = (0,_composables_destinations__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        getDestinationsOnCountry = _useDestinations.getDestinationsOnCountry,
        countries = _useDestinations.countries;

    var _useCategories = (0,_composables_categories__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        getCategoriesOnSection = _useCategories.getCategoriesOnSection,
        categories = _useCategories.categories;

    var filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      destination: "*",
      category: "*",
      page: 1
    });
    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("lang") || "en";
    var active_country = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      getFilteredBlogs(filter.value);
      getDestinationsOnCountry();
      getCategoriesOnSection("blogs");
    });

    var showFilter = function showFilter() {
      if (document.getElementById("filter").style.display == "block") document.getElementById("filter").style.display = "none";else document.getElementById("filter").style.display = "block";
    };

    var refreshBlogs = function refreshBlogs() {
      getFilteredBlogs(filter);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(filter.value, function () {
      getFilteredBlogs(filter.value);
    });
    var __returned__ = {
      getFilteredBlogs: getFilteredBlogs,
      blogs: blogs,
      pagenation: pagenation,
      getDestinationsOnCountry: getDestinationsOnCountry,
      countries: countries,
      getCategoriesOnSection: getCategoriesOnSection,
      categories: categories,

      get filter() {
        return filter;
      },

      set filter(v) {
        filter = v;
      },

      get lang() {
        return lang;
      },

      set lang(v) {
        lang = v;
      },

      get active_country() {
        return active_country;
      },

      set active_country(v) {
        active_country = v;
      },

      showFilter: showFilter,
      refreshBlogs: refreshBlogs,

      get createHead() {
        return _vueuse_head__WEBPACK_IMPORTED_MODULE_4__.createHead;
      },

      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,

      get useBlogs() {
        return _composables_blogs__WEBPACK_IMPORTED_MODULE_1__["default"];
      },

      get useDestinations() {
        return _composables_destinations__WEBPACK_IMPORTED_MODULE_2__["default"];
      },

      get useCategories() {
        return _composables_categories__WEBPACK_IMPORTED_MODULE_3__["default"];
      }

    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=template&id=3069a346":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=template&id=3069a346 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28"
};
var _hoisted_2 = {
  "class": "max-h-screen w-11/12 mx-auto sm:mx-0 sm:w-80 border rounded shadow block px-3 py-3 mb-5 sm:mb-0"
};
var _hoisted_3 = {
  "class": "text-lg"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "class": "w-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
})])], -1
/* HOISTED */
);

var _hoisted_5 = {
  id: "filter",
  "class": "space-y-4 hidden sm:block"
};
var _hoisted_6 = {
  "class": "font-semibold text-lg"
};
var _hoisted_7 = ["onClick"];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "class": "w-5 text-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 6v12m6-6H6"
})])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "px-2"
};
var _hoisted_10 = ["id", "onUpdate:modelValue", "value"];
var _hoisted_11 = ["for"];
var _hoisted_12 = {
  "class": "font-semibold text-lg"
};
var _hoisted_13 = {
  "class": "h-80 overflow-y-scroll space-y-3"
};
var _hoisted_14 = {
  "class": "button text-center"
};
var _hoisted_15 = ["id", "onUpdate:modelValue", "value"];
var _hoisted_16 = ["for"];
var _hoisted_17 = {
  "class": "w-full px-4"
};
var _hoisted_18 = {
  style: {
    "min-height": "80vh"
  },
  "class": "grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between"
};
var _hoisted_19 = {
  "class": "bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = {
  "class": "p-2 h-36"
};
var _hoisted_22 = {
  "class": "text-base text-blue-500"
};
var _hoisted_23 = {
  "class": "overflow-hidden text-base text-body-color leading-relaxed mb-7 text-gray-600"
};
var _hoisted_24 = {
  key: 0,
  "class": "w-full text-center"
};
var _hoisted_25 = {
  "aria-label": "Page navigation example"
};
var _hoisted_26 = {
  "class": "inline-flex items-center -space-x-px"
};
var _hoisted_27 = {
  "class": "block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Previous", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1
/* HOISTED */
);

var _hoisted_30 = [_hoisted_29];
var _hoisted_31 = ["onClick"];
var _hoisted_32 = {
  "class": "block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Next", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1
/* HOISTED */
);

var _hoisted_35 = [_hoisted_34];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "flex justify-between sm:hidden",
    onClick: $setup.showFilter
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("filter")), 1
  /* TEXT */
  ), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("destinations")), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.countries, function (country) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: country
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "border px-2 flex justify-between items-center cursor-pointer",
      onClick: function onClick($event) {
        return $setup.active_country == country.id ? $setup.active_country = 0 : $setup.active_country = country.id;
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(country["name_en"]), 1
    /* TEXT */
    ), _hoisted_8], 8
    /* PROPS */
    , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(country.items, function (destination) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        "class": "button space-y-3",
        key: destination
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "radio",
        id: destination.slug,
        name: "destinations",
        "class": "hidden",
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return $setup.filter.destination = $event;
        },
        value: destination.id
      }, null, 8
      /* PROPS */
      , _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.filter.destination]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded px-2 w-full cursor-pointer", $setup.filter.destination == destination.id ? 'bg-blue-400  text-white font-bold' : 'bg-gray-100 border']),
        "for": destination.slug
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(destination["name_" + $setup.lang]), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_11)]);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 512
    /* NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, country.id == $setup.active_country]])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("categories")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    id: "all-categories",
    name: "categories",
    "class": "hidden",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.filter.category = $event;
    }),
    value: "*"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.filter.category]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.filter.category == '*' ? 'bg-blue-400 text-white' : 'bg-gray-300', "rounded w-4/5 text-center py-1 cursor-pointer"]),
    "for": "all-categories"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("all-categories")), 3
  /* TEXT, CLASS */
  )]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "button text-center",
      key: category
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      id: category.slug,
      name: "categories",
      "class": "hidden",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.filter.category = $event;
      },
      value: category.id
    }, null, 8
    /* PROPS */
    , _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.filter.category]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["rounded text-center py-1 w-4/5 cursor-pointer", $setup.filter.category == category.id ? 'bg-blue-400  text-white font-bold' : 'bg-gray-300']),
      "for": category.slug
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category["name_" + $setup.lang]), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_16)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.blogs, function (blog) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: blog.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'blog',
        params: {
          slug: blog.slug,
          lang: $setup.lang == 'ar' ? 'ar' : ''
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: '/images/blogs/' + blog.image,
          alt: "image",
          "class": "w-full h-48 object-cover"
        }, null, 8
        /* PROPS */
        , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(blog["title_" + $setup.lang].substring(0, 65) + (blog["title_" + $setup.lang].length > 65 ? "..." : "")), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(blog["preview_text_" + $setup.lang].substring(0, 100) + (blog["preview_text_" + $setup.lang].length > 100 ? "..." : "")), 1
        /* TEXT */
        )])];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" pagenation "), $setup.pagenation['meta'] !== undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_26, [$setup.pagenation['meta']['current_page'] != 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.filter.page = $setup.pagenation['meta']['current_page'] - 1;
    }),
    "class": "cursor-pointer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_27, [_hoisted_28, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.lang == 'en' ? '' : 'rotate:180deg'),
    "aria-hidden": "true",
    "class": "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_30, 4
  /* STYLE */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.pagenation['meta']['links'], function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: link,
      onClick: function onClick($event) {
        return $setup.filter.page = link.label;
      },
      "class": "cursor-pointer"
    }, [!isNaN(link.label) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["py-2 px-3 leading-tight bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", link.active ? 'text-blue-500' : 'text-gray-500'])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_31);
  }), 128
  /* KEYED_FRAGMENT */
  )), $setup.pagenation['meta']['current_page'] != $setup.pagenation['meta']['last_page'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.filter.page = $setup.pagenation['meta']['current_page'] + 1;
    }),
    "class": "cursor-pointer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_32, [_hoisted_33, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($setup.lang == 'en' ? '' : 'rotate:180deg'),
    "aria-hidden": "true",
    "class": "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_35, 4
  /* STYLE */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end of pagenation ")])]);
}

/***/ }),

/***/ "./resources/js/composables/blogs.js":
/*!*******************************************!*\
  !*** ./resources/js/composables/blogs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useBlogs)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useBlogs() {
  var blogs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var blog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var slides = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  var tours = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var pagenation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var pages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  var getBlogs = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/blogs?page=".concat(page));

            case 2:
              response = _context.sent;
              blogs.value = response.data.data;
              pages.value = response.data.meta; // blogs.value.content_en = JSON.parse(blogs.value.content_en)

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getBlogs(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getFilteredBlogs = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(filter) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/filtered-blogs?d=".concat(filter.destination, "&c=").concat(filter.category, "&page=").concat(filter.page));

            case 2:
              response = _context2.sent;
              blogs.value = response.data.data;
              pagenation.value = response.data;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getFilteredBlogs(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getBlog = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/blogs/" + id);

            case 2:
              response = _context3.sent;
              blog.value = response.data.data;
              blog.value.content_en = JSON.parse(blog.value.content_en);
              blog.value.content_ar = JSON.parse(blog.value.content_ar);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getBlog(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getSingleBlog = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(slug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/single-blog/" + slug);

            case 2:
              response = _context4.sent;
              blog.value = response.data.data;
              blog.value.content_en = JSON.parse(blog.value.content_en);
              blog.value.content_ar = JSON.parse(blog.value.content_ar);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getSingleBlog(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getBlogDetails = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(slug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/blog/" + slug);

            case 2:
              response = _context5.sent;
              blog.value = response.data.blog;
              tours.value = response.data.tours;

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getBlogDetails(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var storeBlog = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              fd = new FormData();
              fd.append("category_id", data.form.category_id);
              fd.append("destination_id", data.form.destination_id);
              fd.append("title_en", data.form.title_en);
              fd.append("title_ar", data.form.title_ar);
              fd.append("preview_text_en", data.form.preview_text_en);
              fd.append("preview_text_ar", data.form.preview_text_ar);
              fd.append("content_en", JSON.stringify(data.form.content_en));
              fd.append("content_ar", JSON.stringify(data.form.content_ar));
              fd.append("blog_img", data.form.image);
              fd.append("image", data.file);
              errors.value = "";
              _context6.prev = 12;
              _context6.next = 15;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/blogs", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {// uploadPercentage = parseInt(
                  //     Math.round(
                  //         (progressEvent.loaded / progressEvent.total) * 100
                  //     )
                  // );
                }
              });

            case 15:
              _context6.next = 17;
              return router.push({
                name: "blogs.index"
              });

            case 17:
              _context6.next = 22;
              break;

            case 19:
              _context6.prev = 19;
              _context6.t0 = _context6["catch"](12);

              if (_context6.t0.response.status === 422) {
                errors.value = _context6.t0.response.data.errors;
              }

            case 22:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[12, 19]]);
    }));

    return function storeBlog(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  var updateBlog = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              fd = new FormData();
              fd.append("_method", "patch");
              fd.append("category_id", data.form.category_id);
              fd.append("destination_id", data.form.destination_id);
              fd.append("title_en", data.form.title_en);
              fd.append("title_ar", data.form.title_ar);
              fd.append("preview_text_en", data.form.preview_text_en);
              fd.append("preview_text_ar", data.form.preview_text_ar);
              fd.append("content_en", JSON.stringify(data.form.content_en));
              fd.append("content_ar", JSON.stringify(data.form.content_ar));
              fd.append("blog_img", data.form.image);
              fd.append("new_image", data.file);
              errors.value = "";
              _context7.prev = 13;
              _context7.next = 16;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/blogs/" + id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 16:
              _context7.next = 18;
              return router.push({
                name: "blogs.index"
              });

            case 18:
              _context7.next = 23;
              break;

            case 20:
              _context7.prev = 20;
              _context7.t0 = _context7["catch"](13);

              if (_context7.t0.response.status === 422) {
                errors.value = _context7.t0.response.data.errors;
              }

            case 23:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[13, 20]]);
    }));

    return function updateBlog(_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  var destroyBlog = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/blogs/" + id);

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function destroyBlog(_x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  var duplicate = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/blog/duplicate/" + id);

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function duplicate(_x10) {
      return _ref9.apply(this, arguments);
    };
  }();

  return {
    blogs: blogs,
    blog: blog,
    duplicate: duplicate,
    errors: errors,
    getBlogs: getBlogs,
    getBlog: getBlog,
    storeBlog: storeBlog,
    updateBlog: updateBlog,
    destroyBlog: destroyBlog,
    slides: slides,
    getBlogDetails: getBlogDetails,
    getFilteredBlogs: getFilteredBlogs,
    tours: tours,
    pagenation: pagenation,
    pages: pages,
    getSingleBlog: getSingleBlog
  };
}

/***/ }),

/***/ "./resources/js/composables/categories.js":
/*!************************************************!*\
  !*** ./resources/js/composables/categories.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCategories)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useCategories() {
  var categories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var category = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var slides = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  var tours = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var pages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  var getCategories = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/categories?page=".concat(page));

            case 2:
              response = _context.sent;
              categories.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCategories(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getAllCategories = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/all-categories?page=".concat(page));

            case 2:
              response = _context2.sent;
              categories.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getAllCategories(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getCategoriesOnSection = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(type) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/categories-on-section?type=".concat(type));

            case 2:
              response = _context3.sent;
              categories.value = response.data.data; // pages.value = response.data.meta

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getCategoriesOnSection(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getFlagsOrSigns = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(type) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/get-flags-signs?type=" + type);

            case 2:
              response = _context4.sent;
              categories.value = response.data.data;

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getFlagsOrSigns(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getSlides = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/categories-slides");

            case 2:
              response = _context5.sent;
              slides.value = response.data.data;

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getSlides() {
      return _ref5.apply(this, arguments);
    };
  }();

  var getCategory = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/categories/" + id);

            case 2:
              response = _context6.sent;
              category.value = response.data.data;

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getCategory(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  var getCategoryDetails = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(slug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/category/" + slug);

            case 2:
              response = _context7.sent;
              category.value = response.data.category;
              tours.value = response.data.tours;

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function getCategoryDetails(_x6) {
      return _ref7.apply(this, arguments);
    };
  }();

  var storeCategory = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              fd = new FormData();
              fd.append("category", 'flag');
              fd.append("name_en", data.form.name_en);
              fd.append("name_ar", data.form.name_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("is_slide", data.form.is_slide);
              fd.append("is_trending", data.form.is_trending);
              fd.append("for_category", data.form.for_category);
              fd.append("category_img", data.form.image);
              fd.append("image", data.file);
              fd.append("properties", JSON.stringify(data.properties));
              errors.value = "";
              _context8.prev = 13;
              _context8.next = 16;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/categories", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {// uploadPercentage = parseInt(
                  //     Math.round(
                  //         (progressEvent.loaded / progressEvent.total) * 100
                  //     )
                  // );
                }
              });

            case 16:
              _context8.next = 18;
              return router.push({
                name: "categories.index"
              });

            case 18:
              _context8.next = 23;
              break;

            case 20:
              _context8.prev = 20;
              _context8.t0 = _context8["catch"](13);

              if (_context8.t0.response.status === 422) {
                errors.value = _context8.t0.response.data.errors;
              }

            case 23:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[13, 20]]);
    }));

    return function storeCategory(_x7) {
      return _ref8.apply(this, arguments);
    };
  }();

  var updateCategory = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id, data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              fd = new FormData();
              fd.append("_method", "patch");
              fd.append("category", 'flag');
              fd.append("name_en", data.form.name_en);
              fd.append("name_ar", data.form.name_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("is_slide", data.form.is_slide);
              fd.append("is_trending", data.form.is_trending);
              fd.append("for_category", data.form.for_category);
              fd.append("category_img", data.form.image);
              fd.append("new_image", data.file);
              fd.append("properties", JSON.stringify(data.form.properties));
              errors.value = "";
              _context9.prev = 14;
              _context9.next = 17;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/categories/" + id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 17:
              _context9.next = 19;
              return router.push({
                name: "categories.index"
              });

            case 19:
              _context9.next = 24;
              break;

            case 21:
              _context9.prev = 21;
              _context9.t0 = _context9["catch"](14);

              if (_context9.t0.response.status === 422) {
                errors.value = _context9.t0.response.data.errors;
              }

            case 24:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[14, 21]]);
    }));

    return function updateCategory(_x8, _x9) {
      return _ref9.apply(this, arguments);
    };
  }();

  var deleteProperty = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/cat-property/" + id);

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function deleteProperty(_x10) {
      return _ref10.apply(this, arguments);
    };
  }();

  var destroyCategory = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/categories/" + id);

            case 2:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function destroyCategory(_x11) {
      return _ref11.apply(this, arguments);
    };
  }();

  var duplicate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id) {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/category/duplicate/" + id);

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function duplicate(_x12) {
      return _ref12.apply(this, arguments);
    };
  }();

  return {
    categories: categories,
    category: category,
    errors: errors,
    getCategories: getCategories,
    getAllCategories: getAllCategories,
    getCategoriesOnSection: getCategoriesOnSection,
    getCategory: getCategory,
    storeCategory: storeCategory,
    updateCategory: updateCategory,
    destroyCategory: destroyCategory,
    deleteProperty: deleteProperty,
    getSlides: getSlides,
    slides: slides,
    getCategoryDetails: getCategoryDetails,
    tours: tours,
    getFlagsOrSigns: getFlagsOrSigns,
    pages: pages,
    duplicate: duplicate
  };
}

/***/ }),

/***/ "./resources/js/composables/destinations.js":
/*!**************************************************!*\
  !*** ./resources/js/composables/destinations.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDestinations)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useDestinations() {
  var destinations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var destination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  var tours = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var countries = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var country = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var pages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var fd = new FormData();

  var getDestinations = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var page,
          response,
          _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : -1;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/destinations?page=".concat(page));

            case 3:
              response = _context.sent;
              destinations.value = response.data.data;
              pages.value = response.data.meta;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getDestinations() {
      return _ref.apply(this, arguments);
    };
  }();

  var getCountries = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/countries");

            case 2:
              response = _context2.sent;
              countries.value = response.data;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getCountries() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getDestinationsOnCountry = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/countries-destinations");

            case 2:
              response = _context3.sent;
              countries.value = response.data.data;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getDestinationsOnCountry() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getDestination = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/destinations/" + id);

            case 2:
              response = _context4.sent;
              destination.value = response.data.data;

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getDestination(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getDestinationDetails = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(slug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/destination/" + slug);

            case 2:
              response = _context5.sent;
              destination.value = response.data.destination;
              tours.value = response.data.tours;

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getDestinationDetails(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var storeDestination = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              fd = new FormData();
              fd.append("name_en", data.form.name_en);
              fd.append("name_ar", data.form.name_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("trending", data.form.trending);
              fd.append("country_id", data.form.country_id);
              fd.append("destination_img", data.form.image);
              fd.append("image", data.file);
              errors.value = "";
              _context6.prev = 10;
              _context6.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/destinations", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {// uploadPercentage = parseInt(
                  //     Math.round(
                  //         (progressEvent.loaded / progressEvent.total) * 100
                  //     )
                  // );
                }
              });

            case 13:
              _context6.next = 15;
              return router.push({
                name: "destinations.index"
              });

            case 15:
              _context6.next = 20;
              break;

            case 17:
              _context6.prev = 17;
              _context6.t0 = _context6["catch"](10);

              if (_context6.t0.response.status === 422) {
                errors.value = _context6.t0.response.data.errors;
              }

            case 20:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[10, 17]]);
    }));

    return function storeDestination(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  var updateDestination = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              fd = new FormData();
              fd.append("_method", "patch");
              fd.append("destination", 'flag');
              fd.append("name_en", data.form.name_en);
              fd.append("name_ar", data.form.name_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("trending", data.form.trending);
              fd.append("destination_img", data.form.image);
              fd.append("country_id", data.form.country_id);
              fd.append("new_image", data.file);
              errors.value = "";
              _context7.prev = 12;
              _context7.next = 15;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/destinations/" + id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 15:
              _context7.next = 17;
              return router.push({
                name: "destinations.index"
              });

            case 17:
              _context7.next = 22;
              break;

            case 19:
              _context7.prev = 19;
              _context7.t0 = _context7["catch"](12);

              if (_context7.t0.response.status === 422) {
                errors.value = _context7.t0.response.data.errors;
              }

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[12, 19]]);
    }));

    return function updateDestination(_x4, _x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  var deleteProperty = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/cat-property/" + id);

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function deleteProperty(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();

  var destroyDestination = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/destinations/" + id);

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function destroyDestination(_x7) {
      return _ref9.apply(this, arguments);
    };
  }();

  var duplicate = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/destination/duplicate/" + id);

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function duplicate(_x8) {
      return _ref10.apply(this, arguments);
    };
  }();

  var getCountry = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/countries/" + id);

            case 2:
              response = _context11.sent;
              country.value = response.data;

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function getCountry(_x9) {
      return _ref11.apply(this, arguments);
    };
  }();

  var storeCountry = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(data) {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              fd.append("name_en", data.name_en);
              fd.append("name_ar", data.name_ar);
              errors.value = "";
              _context12.prev = 3;
              _context12.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/countries", fd);

            case 6:
              getCountries();
              _context12.next = 12;
              break;

            case 9:
              _context12.prev = 9;
              _context12.t0 = _context12["catch"](3);

              if (_context12.t0.response.status === 422) {
                errors.value = _context12.t0.response.data.errors;
              }

            case 12:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[3, 9]]);
    }));

    return function storeCountry(_x10) {
      return _ref12.apply(this, arguments);
    };
  }();

  var updateCountry = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(data) {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              fd.append("_method", "patch");
              fd.append("name", data.name);
              fd.append("email", data.email);
              fd.append("password", data.password);
              fd.append("role", data.role);
              errors.value = "";
              _context13.prev = 6;
              _context13.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/countries/" + data.id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 9:
              getCountries();
              _context13.next = 15;
              break;

            case 12:
              _context13.prev = 12;
              _context13.t0 = _context13["catch"](6);

              if (_context13.t0.response.status === 422) {
                errors.value = _context13.t0.response.data.errors;
              }

            case 15:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[6, 12]]);
    }));

    return function updateCountry(_x11) {
      return _ref13.apply(this, arguments);
    };
  }();

  var destroyCountry = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(id) {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/countries/" + id);

            case 2:
              getCountries();

            case 3:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function destroyCountry(_x12) {
      return _ref14.apply(this, arguments);
    };
  }();

  var trendingDestinations = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var response;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/trending-destinations");

            case 2:
              response = _context15.sent;
              return _context15.abrupt("return", response.data);

            case 4:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function trendingDestinations() {
      return _ref15.apply(this, arguments);
    };
  }();

  return {
    destinations: destinations,
    destination: destination,
    errors: errors,
    getDestinations: getDestinations,
    getDestination: getDestination,
    storeDestination: storeDestination,
    updateDestination: updateDestination,
    destroyDestination: destroyDestination,
    deleteProperty: deleteProperty,
    getDestinationDetails: getDestinationDetails,
    tours: tours,
    getDestinationsOnCountry: getDestinationsOnCountry,
    pages: pages,
    duplicate: duplicate,
    getCountry: getCountry,
    storeCountry: storeCountry,
    updateCountry: updateCountry,
    destroyCountry: destroyCountry,
    countries: countries,
    getCountries: getCountries,
    country: country,
    trendingDestinations: trendingDestinations
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: #00aeef;\n    border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #2dc7ff;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_style_index_0_id_3069a346_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_style_index_0_id_3069a346_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_style_index_0_id_3069a346_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/frontend/Blogs.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/frontend/Blogs.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blogs_vue_vue_type_template_id_3069a346__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blogs.vue?vue&type=template&id=3069a346 */ "./resources/js/pages/frontend/Blogs.vue?vue&type=template&id=3069a346");
/* harmony import */ var _Blogs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blogs.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/frontend/Blogs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Blogs_vue_vue_type_style_index_0_id_3069a346_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css */ "./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Blogs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Blogs_vue_vue_type_template_id_3069a346__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/frontend/Blogs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/frontend/Blogs.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/frontend/Blogs.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Blogs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/frontend/Blogs.vue?vue&type=template&id=3069a346":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/frontend/Blogs.vue?vue&type=template&id=3069a346 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_template_id_3069a346__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_template_id_3069a346__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Blogs.vue?vue&type=template&id=3069a346 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=template&id=3069a346");


/***/ }),

/***/ "./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Blogs_vue_vue_type_style_index_0_id_3069a346_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/Blogs.vue?vue&type=style&index=0&id=3069a346&lang=css");


/***/ }),

/***/ "./node_modules/@vueuse/head/dist/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/@vueuse/head/dist/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "createHead": () => (/* binding */ createHead),
/* harmony export */   "injectHead": () => (/* binding */ injectHead),
/* harmony export */   "renderHeadToString": () => (/* binding */ renderHeadToString),
/* harmony export */   "useHead": () => (/* binding */ useHead)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
// src/index.ts


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "renderPriority" || key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagDeduper = (tag) => {
  if (!["meta", "base", "script", "link"].includes(tag.tag)) {
    return false;
  }
  const { props, tag: tagName } = tag;
  if (tagName === "base") {
    return true;
  }
  if (tagName === "link" && props.rel === "canonical") {
    return { propValue: "canonical" };
  }
  if (props.charset) {
    return { propKey: "charset" };
  }
  const name = ["key", "id", "name", "property", "http-equiv"];
  for (const n of name) {
    let value = void 0;
    if (typeof props.getAttribute === "function" && props.hasAttribute(n)) {
      value = props.getAttribute(n);
    } else {
      value = props[n];
    }
    if (value !== void 0) {
      return { propValue: n };
    }
  }
  return false;
};
var injectHead = () => {
  const head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title ?? "");
  }
  return template((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: { key: "default", ...obj[key] } });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(item) });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => ({
    element: createElement(tag.tag, tag.props, document),
    body: tag.props.body ?? false
  }));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute(
    "content",
    "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length)
  );
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push((0,vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef)(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(objs));
        tags.forEach((tag) => {
          const dedupe = getTagDeduper(tag);
          if (dedupe) {
            let index = -1;
            for (let i = 0; i < deduped.length; i++) {
              const prev = deduped[i];
              if (prev.tag !== tag.tag) {
                continue;
              }
              if (dedupe === true) {
                index = i;
              } else if (dedupe.propValue && (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(prev.props[dedupe.propValue]) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(tag.props[dedupe.propValue])) {
                index = i;
              } else if (dedupe.propKey && prev.props[dedupe.propKey] && tag.props[dedupe.propKey]) {
                index = i;
              }
              if (index !== -1) {
                break;
              }
            }
            if (index !== -1) {
              deduped.splice(index, 1);
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(
              titleTemplate,
              tag.props.children
            );
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags.sort(sortTags)) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = typeof window !== "undefined";
var useHead = (obj) => {
  const head = injectHead();
  const headObj = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(obj);
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
      head.updateDOM();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  if (tag.props.renderPriority) {
    delete tag.props.renderPriority;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var sortTags = (aTag, bTag) => {
  const tagWeight = (tag) => {
    if (tag.props.renderPriority) {
      return tag.props.renderPriority;
    }
    switch (tag.tag) {
      case "base":
        return -1;
      case "meta":
        if (tag.props.charset) {
          return -2;
        }
        if (tag.props["http-equiv"] === "content-security-policy") {
          return 0;
        }
        return 10;
      default:
        return 10;
    }
  };
  return tagWeight(aTag) - tagWeight(bTag);
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags.sort(sortTags)) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs({
        ...htmlAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      });
    },
    get bodyAttrs() {
      return stringifyAttrs({
        ...bodyAttrs,
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      });
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
var addVNodeToHeadObj = (node, obj) => {
  const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
  if (typeof type !== "string" || !(type in obj))
    return;
  const props = {
    ...node.props,
    children: Array.isArray(node.children) ? node.children[0].children : node.children
  };
  if (Array.isArray(obj[type])) {
    ;
    obj[type].push(props);
  } else if (type === "title") {
    obj.title = props.children;
  } else {
    ;
    obj[type] = props;
  }
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const node of nodes) {
    if (typeof node.type === "symbol" && Array.isArray(node.children)) {
      for (const childNode of node.children) {
        addVNodeToHeadObj(childNode, obj);
      }
    } else {
      addVNodeToHeadObj(node, obj);
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});



/***/ })

}]);