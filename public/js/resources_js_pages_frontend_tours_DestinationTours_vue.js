"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_frontend_tours_DestinationTours_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagenation.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagenation.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Pagenation',
  props: {
    pages: Array
  },
  emits: ["selected"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    var page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(page, function () {
      emit('selected', page.value);
    });
    var __returned__ = {
      props: props,
      page: page,
      emit: emit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tour.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tour.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Tour',
  props: {
    tour: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("lang") || "en";
    var __returned__ = {
      props: props,
      lang: lang,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_tours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../composables/tours */ "./resources/js/composables/tours.js");
/* harmony import */ var _components_Pagenation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Pagenation.vue */ "./resources/js/components/Pagenation.vue");
/* harmony import */ var _components_Tour_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Tour.vue */ "./resources/js/components/Tour.vue");
/* harmony import */ var _composables_destinations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../composables/destinations */ "./resources/js/composables/destinations.js");
/* harmony import */ var _composables_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../composables/categories */ "./resources/js/composables/categories.js");
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-meta */ "./node_modules/vue-meta/dist/vue-meta.esm-browser.min.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'DestinationTours',
  props: {
    destination: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;

    var _useTours = (0,_composables_tours__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        getFilteredTours = _useTours.getFilteredTours,
        tours = _useTours.tours,
        pages = _useTours.pages;

    var _useDestinations = (0,_composables_destinations__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        getDestinationsOnCountry = _useDestinations.getDestinationsOnCountry,
        countries = _useDestinations.countries;

    var _useCategories = (0,_composables_categories__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        getCategoriesOnSection = _useCategories.getCategoriesOnSection,
        categories = _useCategories.categories;

    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("lang") || "en";

    var _useI18n = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_6__.useI18n)(),
        t = _useI18n.t;

    (0,vue_meta__WEBPACK_IMPORTED_MODULE_7__.useMeta)({
      title: "".concat(t(props.destination + "_tours")),
      htmlAttrs: {
        lang: "en",
        amp: true
      } // meta: [
      //     { name: "description", content: description },
      //     //   { name: 'keywords', content: keywords },
      //     //   { name: 'robots', content: 'index, follow' },
      // ],
      // link: [
      //   { rel: 'canonical', href: canonical },
      // ],

    });
    var currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getFilteredTours(filter.value);
              getCategoriesOnSection("tours");
              _context.next = 4;
              return getDestinationsOnCountry();

            case 4:
              currentCountryItems();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var showFilter = function showFilter() {
      if (document.getElementById("filter").style.display == "block") document.getElementById("filter").style.display = "none";else document.getElementById("filter").style.display = "block";
    };

    var active_country = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("0");
    var filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      destinations: [],
      categories: [],
      page: 1
    });

    var changePage = function changePage(page) {
      filter.value.page = page;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(filter.value, function () {
      getFilteredTours(filter.value);
    });
    var active_countries = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      id: false
    });

    var filterCountries = function filterCountries(id, provinces) {
      if (active_countries[id]) {
        for (var x in provinces) {
          if (!filter.value.destinations.includes(provinces[x]["id"])) filter.value.destinations.push(provinces[x]["id"]);
        }
      } else {
        for (var _x in provinces) {
          var index = filter.value.destinations.indexOf(provinces[_x]["id"]);
          filter.value.destinations.splice(index, 1);
        }
      }
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props, function () {
      filter.value = {
        destinations: [],
        categories: [],
        page: 1
      };

      for (var member in active_countries) {
        delete active_countries[member];
      }

      currentCountryItems();
    });
    var mobileFiltersOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var currentCountryItems2 = function currentCountryItems2() {
      for (var i = 0; i < countries.value.length; i++) {
        if (countries.value[i]["slug"].trim() == props.destination.trim()) {
          active_countries[countries.value[i]["id"]] = true;
          filterCountries(countries.value[i]["id"], countries.value[i]["items"]);
          break;
        }
      }
    };

    var currentCountryItems = function currentCountryItems() {
      for (var i in countries.value) {
        if (countries.value[i]["slug"].trim() == props.destination.trim()) {
          var c = countries.value[i]["items"];

          for (var j in c) {
            filter.value.destinations.push(countries.value[i]["items"][j]["id"]);
          }

          getFilteredTours(filter.value);
          break;
        }
      }
    };

    var __returned__ = {
      getFilteredTours: getFilteredTours,
      tours: tours,
      pages: pages,
      getDestinationsOnCountry: getDestinationsOnCountry,
      countries: countries,
      getCategoriesOnSection: getCategoriesOnSection,
      categories: categories,
      lang: lang,
      t: t,
      currentPage: currentPage,
      props: props,
      showFilter: showFilter,
      active_country: active_country,
      filter: filter,
      changePage: changePage,
      active_countries: active_countries,
      filterCountries: filterCountries,
      mobileFiltersOpen: mobileFiltersOpen,
      currentCountryItems2: currentCountryItems2,
      currentCountryItems: currentCountryItems,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      useTours: _composables_tours__WEBPACK_IMPORTED_MODULE_1__["default"],
      Pagenation: _components_Pagenation_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      TourVue: _components_Tour_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      useDestinations: _composables_destinations__WEBPACK_IMPORTED_MODULE_4__["default"],
      useCategories: _composables_categories__WEBPACK_IMPORTED_MODULE_5__["default"],
      useMeta: vue_meta__WEBPACK_IMPORTED_MODULE_7__.useMeta,
      useI18n: vue_i18n__WEBPACK_IMPORTED_MODULE_6__.useI18n
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagenation.vue?vue&type=template&id=4096bc41":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagenation.vue?vue&type=template&id=4096bc41 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "w-full text-center"
};
var _hoisted_2 = {
  "aria-label": "Page navigation example"
};
var _hoisted_3 = {
  "class": "inline-flex items-center -space-x-px"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "block py-2 px-3 ml-0 leading-tight text-gray-500 rounded-l-lg hover:text-blue-500 dark:hover:text-blue-500 dark:text-gray-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Previous"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "aria-hidden": "true",
  "class": "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
})])], -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = ["onClick"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "block py-2 px-3 leading-tight text-gray-500 rounded-r-lg dark:hover:text-blue-500 hover:text-blue-500 dark:text-gray-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Next"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "aria-hidden": "true",
  "class": "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
})])], -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.pages !== undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [$props.pages['current_page'] != 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.page = $props.pages['current_page'] - 1;
    }),
    "class": "cursor-pointer"
  }, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.pages['links'], function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      onClick: function onClick($event) {
        return $setup.page = link.label;
      },
      "class": "cursor-pointer"
    }, [!isNaN(link.label) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["py-2 px-3 leading-tight hover:text-blue-500 dark:hover:text-blue-500", link.active ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(link.label), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_6);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), $props.pages['current_page'] != $props.pages['last_page'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.page = $props.pages['current_page'] + 1;
    }),
    "class": "cursor-pointer"
  }, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tour.vue?vue&type=template&id=7390f543":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tour.vue?vue&type=template&id=7390f543 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10"
};
var _hoisted_2 = {
  "class": "relative"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "bg-gradient-to-t from-gray-900 absolute flex justify-between bottom-0 left-0 right-0 px-2 pb-1"
};
var _hoisted_5 = {
  "class": "overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white"
};
var _hoisted_6 = {
  "class": ""
};
var _hoisted_7 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "class": "h-5",
  style: {
    "margin": "-3px"
  }
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_8, _hoisted_9];
var _hoisted_11 = {
  "class": "ms-1"
};
var _hoisted_12 = {
  "class": "overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "class": "w-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
})])], -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "h-72 relative"
};
var _hoisted_15 = {
  "class": "items-center border-b mb-2 h-16 flex px-2"
};
var _hoisted_16 = {
  "class": "text-lg text-black font-bold"
};
var _hoisted_17 = {
  "class": "overflow-hidden text-base text-body-color leading-relaxed text-gray-700 px-2"
};
var _hoisted_18 = {
  key: 0,
  "class": "grid gap-0 grid-cols-2"
};
var _hoisted_19 = {
  key: 0,
  "class": "flex space-x-1"
};
var _hoisted_20 = ["src"];
var _hoisted_21 = {
  "class": "flex items-center text-black text-xs font-bold"
};
var _hoisted_22 = {
  "class": "border-t bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
};
var _hoisted_23 = {
  "class": "px-4 h-8 bg-yellow-600 text-white rounded-full mx-auto w-full"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'tours-details',
      params: {
        slug: $props.tour.slug,
        lang: $setup.lang == 'ar' ? 'ar' : ''
      }
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: '/images/tours/' + $props.tour.thumbnail,
        alt: "image",
        "class": "w-full h-56 object-cover"
      }, null, 8
      /* PROPS */
      , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, _hoisted_10))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tour["address_" + $setup.lang]), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tour["duration_" + $setup.lang]), 1
      /* TEXT */
      )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tour["title_" + $setup.lang].substring(0, 50) + ($props.tour["title_" + $setup.lang].length > 50 ? "..." : "")), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [$props.tour['banner_highlights'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(JSON.parse($props.tour['banner_highlights']), function (highlight, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: highlight,
          "class": "flex h-12"
        }, [i < 6 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: '/images/icons/' + highlight['img'],
          "class": "w-5",
          style: {
            "fill": "orange"
          },
          alt: ""
        }, null, 8
        /* PROPS */
        , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(highlight["title_" + $setup.lang]), 1
        /* TEXT */
        )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("book_now")), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=template&id=490a5985":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=template&id=490a5985 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "relative z-40 lg:hidden",
  role: "dialog",
  "aria-modal": "true"
};
var _hoisted_3 = {
  "class": "fixed inset-0 z-40 flex"
};
var _hoisted_4 = {
  "class": "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
};
var _hoisted_5 = {
  "class": "flex items-center justify-between px-4"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-lg font-medium text-gray-900"
}, " Filters ", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Close menu", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-4 border-t border-gray-200"
};
var _hoisted_10 = {
  "class": "border-t border-gray-200 px-4 py-6"
};
var _hoisted_11 = {
  "class": "-my-3 flow-root"
};
var _hoisted_12 = {
  type: "button",
  "class": "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500",
  "aria-controls": "filter-section-mobile-1",
  "aria-expanded": "false"
};
var _hoisted_13 = {
  "class": "font-medium text-gray-900"
};
var _hoisted_14 = {
  "class": "pt-6",
  id: "filter-section-1"
};
var _hoisted_15 = {
  "class": "space-y-4"
};
var _hoisted_16 = ["id", "name", "value"];
var _hoisted_17 = ["for"];
var _hoisted_18 = {
  "class": "border-t border-gray-200 px-4 py-6"
};
var _hoisted_19 = {
  "class": "-my-3 flow-root"
};
var _hoisted_20 = {
  type: "button",
  "class": "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500",
  "aria-controls": "filter-section-mobile-1",
  "aria-expanded": "false"
};
var _hoisted_21 = {
  "class": "font-medium text-gray-900"
};
var _hoisted_22 = {
  "class": "pt-6",
  id: "filter-section-1"
};
var _hoisted_23 = {
  "class": "space-y-4"
};
var _hoisted_24 = {
  "class": "flex items-center mb-1"
};
var _hoisted_25 = ["id", "name", "value", "onUpdate:modelValue", "onChange"];
var _hoisted_26 = ["for"];
var _hoisted_27 = ["id", "name", "value"];
var _hoisted_28 = ["for"];
var _hoisted_29 = {
  "class": "mx-auto max-w-7xl"
};
var _hoisted_30 = {
  "class": "flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6"
};
var _hoisted_31 = {
  "class": "text-4xl font-bold tracking-tight text-gray-900"
};
var _hoisted_32 = {
  "class": "flex items-center"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Filters", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "h-5 w-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_35 = {
  "aria-labelledby": "products-heading",
  "class": "pt-6 pb-24"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  id: "products-heading",
  "class": "sr-only"
}, "Products", -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"
};
var _hoisted_38 = {
  "class": "hidden lg:block"
};
var _hoisted_39 = {
  "class": "border-b border-gray-200 py-6"
};
var _hoisted_40 = {
  "class": "-my-3 flow-root"
};
var _hoisted_41 = {
  type: "button",
  "class": "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500",
  "aria-controls": "filter-section-1",
  "aria-expanded": "false"
};
var _hoisted_42 = {
  "class": "font-medium text-gray-900"
};
var _hoisted_43 = {
  "class": "pt-6",
  id: "filter-section-1"
};
var _hoisted_44 = {
  "class": "space-y-4"
};
var _hoisted_45 = ["id", "name", "value"];
var _hoisted_46 = ["for"];
var _hoisted_47 = {
  "class": "border-b border-gray-200 py-6"
};
var _hoisted_48 = {
  "class": "-my-3 flow-root"
};
var _hoisted_49 = {
  type: "button",
  "class": "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500",
  "aria-controls": "filter-section-1",
  "aria-expanded": "false"
};
var _hoisted_50 = {
  "class": "font-medium text-gray-900"
};
var _hoisted_51 = {
  "class": "pt-6",
  id: "filter-section-1"
};
var _hoisted_52 = {
  "class": "space-y-4"
};
var _hoisted_53 = {
  "class": "flex items-center mb-1"
};
var _hoisted_54 = ["id", "name", "value", "onUpdate:modelValue", "onChange"];
var _hoisted_55 = ["for"];
var _hoisted_56 = ["id", "name", "value"];
var _hoisted_57 = ["for"];
var _hoisted_58 = {
  "class": "lg:col-span-3"
};
var _hoisted_59 = {
  "class": "w-full px-4"
};
var _hoisted_60 = {
  style: {
    "min-height": "80vh"
  },
  "class": "grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.mobileFiltersOpen = false;
    }),
    type: "button",
    "class": "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
  }, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: outline/x-mark "), _hoisted_8])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filters "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expand/collapse section button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("categories")), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filter section, show/hide based on section state. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "flex items-center",
      key: category.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: category['name_en'],
      name: category['name_en'],
      value: category.id,
      type: "checkbox",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return $setup.filter.categories = $event;
      }),
      "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    }, null, 8
    /* PROPS */
    , _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.filter.categories]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": category['name_en'],
      "class": "mx-2 text-sm text-gray-600"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category["name_" + $setup.lang]), 9
    /* TEXT, PROPS */
    , _hoisted_17)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expand/collapse section button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("destinations")), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filter section, show/hide based on section state. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.countries, function (country) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: country.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: country['name_en'],
      name: country['name_en'],
      value: country.id,
      type: "checkbox",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.active_countries[country.id] = $event;
      },
      onChange: function onChange($event) {
        return $setup.filterCountries(country.id, country.items);
      },
      "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_25), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.active_countries[country.id]]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": country['name_en'],
      "class": "mx-2 text-sm text-gray-600"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(country["name_" + $setup.lang]), 9
    /* TEXT, PROPS */
    , _hoisted_26)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Towns filter "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(country['items'], function (province) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        "class": "flex items-center mx-2",
        key: province.id
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: province['name_en'],
        name: province['name_en'],
        value: province.id,
        type: "checkbox",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.filter.destinations = $event;
        }),
        "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      }, null, 8
      /* PROPS */
      , _hoisted_27), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.filter.destinations]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": province['name_en'],
        "class": "mx-2 text-sm text-gray-600"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(province["name_" + $setup.lang]), 9
      /* TEXT, PROPS */
      , _hoisted_28)]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])])], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.mobileFiltersOpen]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("tours")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.mobileFiltersOpen = true;
    }),
    type: "button",
    "class": "-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
  }, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: mini/funnel "), _hoisted_34])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filters "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" categories filter "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expand/collapse section button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("categories")), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filter section, show/hide based on section state. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "flex items-center",
      key: category.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: category['name_en'],
      name: category['name_en'],
      value: category.id,
      type: "checkbox",
      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
        return $setup.filter.categories = $event;
      }),
      "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    }, null, 8
    /* PROPS */
    , _hoisted_45), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.filter.categories]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": category['name_en'],
      "class": "mx-2 text-sm text-gray-600"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category["name_" + $setup.lang]), 9
    /* TEXT, PROPS */
    , _hoisted_46)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" destinations filter "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Expand/collapse section button "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("destinations")), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Filter section, show/hide based on section state. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.countries, function (country) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: country.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: country['name_en'],
      name: country['name_en'],
      value: country.id,
      type: "checkbox",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $setup.active_countries[country.id] = $event;
      },
      onChange: function onChange($event) {
        return $setup.filterCountries(country.id, country.items);
      },
      "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_54), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.active_countries[country.id]]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": country['name_en'],
      "class": "mx-2 text-sm text-gray-600"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(country["name_" + $setup.lang]), 9
    /* TEXT, PROPS */
    , _hoisted_55)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Towns filter "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(country['items'], function (province) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        "class": "flex items-center mx-2",
        key: province.id
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        id: province['name_en'],
        name: province['name_en'],
        value: province.id,
        type: "checkbox",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $setup.filter.destinations = $event;
        }),
        "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      }, null, 8
      /* PROPS */
      , _hoisted_56), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.filter.destinations]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "for": province['name_en'],
        "class": "mx-2 text-sm text-gray-600"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(province["name_" + $setup.lang]), 9
      /* TEXT, PROPS */
      , _hoisted_57)]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product grid "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Replace with your content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tours, function (t) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: t.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TourVue"], {
      tour: t
    }, null, 8
    /* PROPS */
    , ["tour"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" pagenation "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Pagenation"], {
    onSelected: _cache[6] || (_cache[6] = function ($event) {
      return $setup.changePage($event);
    }),
    pages: $setup.pages
  }, null, 8
  /* PROPS */
  , ["pages"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end of pagenation ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /End replace ")])])])])]);
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/destinations?page=".concat(page));

            case 2:
              response = _context.sent;
              destinations.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getDestinations(_x) {
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

    return function getDestination(_x2) {
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

    return function getDestinationDetails(_x3) {
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

    return function storeDestination(_x4) {
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

    return function updateDestination(_x5, _x6) {
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

    return function deleteProperty(_x7) {
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

    return function destroyDestination(_x8) {
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

    return function duplicate(_x9) {
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

    return function getCountry(_x10) {
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

    return function storeCountry(_x11) {
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

    return function updateCountry(_x12) {
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

    return function destroyCountry(_x13) {
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

/***/ "./resources/js/composables/tours.js":
/*!*******************************************!*\
  !*** ./resources/js/composables/tours.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTours)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useTours() {
  var tours = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var tour = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
  var pages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var alter_pages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
    current_page: null,
    from: null,
    last_page: null,
    links: [],
    path: null,
    per_page: null,
    to: null,
    total: null
  });
  var percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  var fd = new FormData();

  var getTours = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/tours?page=".concat(page));

            case 2:
              response = _context.sent;
              tours.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getTours(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getAllTours = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/all-tours?page=".concat(page));

            case 2:
              response = _context2.sent;
              tours.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getAllTours(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getFilteredTours = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(filter) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/filtered-tours?d=".concat(JSON.stringify(filter.destinations), "&c=").concat(JSON.stringify(filter.categories), "&page=").concat(filter.page));

            case 2:
              response = _context3.sent;
              tours.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getFilteredTours(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getDestinationTours = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/destination-tours");

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response.data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getDestinationTours() {
      return _ref4.apply(this, arguments);
    };
  }();

  var getTour = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/tours/" + id);

            case 2:
              response = _context5.sent;
              tour.value = response.data.data;
              tour.value['banner_highlights'] = JSON.parse(tour.value['banner_highlights']);
              tour.value['options'] = JSON.parse(tour.value['options']);
              tour.value['itinerary'] = JSON.parse(tour.value['itinerary']);
              tour.value['category_ids'] = JSON.parse(tour.value['category_ids']);
              tour.value['destination_ids'] = JSON.parse(tour.value['destination_ids']);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getTour(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  var getTourDetails = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(slug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/tour/" + slug);

            case 2:
              response = _context6.sent;
              tour.value = response.data.data;
              tour.value['banner_highlights'] = JSON.parse(tour.value['banner_highlights']);
              tour.value['options'] = JSON.parse(tour.value['options']);
              tour.value['itinerary'] = JSON.parse(tour.value['itinerary']);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getTourDetails(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  var storeTour = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              fd.append("category_ids", JSON.stringify(data.form.category_ids));
              fd.append("destination_ids", JSON.stringify(data.form.destination_ids));
              fd.append("title_en", data.form.title_en);
              fd.append("title_ar", data.form.title_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("tour_img", data.form.image);
              fd.append("address_ar", data.form.address_ar);
              fd.append("address_en", data.form.address_en);
              fd.append("active", data.form.active);
              fd.append("duration_en", data.form.duration_en);
              fd.append("duration_ar", data.form.duration_ar);
              fd.append("max_number_of_people", data.form.max_number_of_people);
              fd.append("include_en", data.form.include_en);
              fd.append("include_ar", data.form.include_ar);
              fd.append("exclude_en", data.form.exclude_en);
              fd.append("exclude_ar", data.form.exclude_ar);
              fd.append("source", data.form.source);
              fd.append("highlights_ar", data.form.highlights_ar);
              fd.append("highlights_en", data.form.highlights_en);
              fd.append("information_ar", data.form.information_ar);
              fd.append("information_en", data.form.information_en);
              fd.append("policy_ar", data.form.policy_ar);
              fd.append("policy_en", data.form.policy_en);
              fd.append("timing_and_transfer_ar", data.form.timing_and_transfer_ar);
              fd.append("timing_and_transfer_en", data.form.timing_and_transfer_en);
              fd.append("notes_en", data.form.notes_en);
              fd.append("notes_ar", data.form.notes_ar);
              fd.append("terms_and_bullet_sections_en", data.form.terms_and_bullet_sections_en);
              fd.append("terms_and_bullet_sections_ar", data.form.terms_and_bullet_sections_ar);
              fd.append("banner_highlights", JSON.stringify(data.form.banner_highlights));
              fd.append("options", JSON.stringify(data.form.options));
              fd.append("itinerary", JSON.stringify(data.form.itinerary));
              fd.append("is_from", data.form.is_from);
              fd.append("image", data.file);
              fd.append("properties", JSON.stringify(data.properties));
              errors.value = "";
              _context7.prev = 37;
              _context7.next = 40;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/tours", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {
                  percentage.value = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                }
              });

            case 40:
              _context7.next = 42;
              return router.push({
                name: "tours.index"
              });

            case 42:
              _context7.next = 47;
              break;

            case 44:
              _context7.prev = 44;
              _context7.t0 = _context7["catch"](37);

              if (_context7.t0.response.status === 422) {
                errors.value = _context7.t0.response.data.errors;
              }

            case 47:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[37, 44]]);
    }));

    return function storeTour(_x6) {
      return _ref7.apply(this, arguments);
    };
  }();

  var updateTour = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id, data) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              fd.append("_method", "patch");
              fd.append("category_ids", JSON.stringify(data.form.category_ids));
              fd.append("destination_ids", JSON.stringify(data.form.destination_ids));
              fd.append("title_en", data.form.title_en);
              fd.append("title_ar", data.form.title_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("address_ar", data.form.address_ar);
              fd.append("address_en", data.form.address_en);
              fd.append("itinerary", JSON.stringify(data.form.itinerary));
              fd.append("active", data.form.active);
              fd.append("duration_en", data.form.duration_en);
              fd.append("duration_ar", data.form.duration_ar);
              fd.append("max_number_of_people", data.form.max_number_of_people);
              fd.append("include_en", data.form.include_en);
              fd.append("include_ar", data.form.include_ar);
              fd.append("exclude_en", data.form.exclude_en);
              fd.append("exclude_ar", data.form.exclude_ar);
              fd.append("source", data.form.source);
              fd.append("highlights_ar", data.form.highlights_ar);
              fd.append("highlights_en", data.form.highlights_en);
              fd.append("information_ar", data.form.information_ar);
              fd.append("information_en", data.form.information_en);
              fd.append("policy_ar", data.form.policy_ar);
              fd.append("policy_en", data.form.policy_en);
              fd.append("timing_and_transfer_ar", data.form.timing_and_transfer_ar);
              fd.append("timing_and_transfer_en", data.form.timing_and_transfer_en);
              fd.append("notes_en", data.form.notes_en);
              fd.append("notes_ar", data.form.notes_ar);
              fd.append("terms_and_bullet_sections_en", data.form.terms_and_bullet_sections_en);
              fd.append("terms_and_bullet_sections_ar", data.form.terms_and_bullet_sections_ar);
              fd.append("is_from", data.form.is_from);
              fd.append("banner_highlights", JSON.stringify(data.form.banner_highlights));
              fd.append("options", JSON.stringify(data.form.options));
              fd.append("tour_img", data.form.thumbnail);
              fd.append("new_image", data.file);
              fd.append("properties", JSON.stringify(data.properties));
              errors.value = "";
              _context8.prev = 38;
              _context8.next = 41;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/tours/" + id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                onUploadProgress: function onUploadProgress(progressEvent) {
                  percentage.value = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                }
              });

            case 41:
              _context8.next = 43;
              return router.push({
                name: "tours.index"
              });

            case 43:
              _context8.next = 48;
              break;

            case 45:
              _context8.prev = 45;
              _context8.t0 = _context8["catch"](38);

              if (_context8.t0.response.status === 422) {
                errors.value = _context8.t0.response.data.errors;
              }

            case 48:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[38, 45]]);
    }));

    return function updateTour(_x7, _x8) {
      return _ref8.apply(this, arguments);
    };
  }();

  var deleteProperty = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/cat-property/" + id);

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function deleteProperty(_x9) {
      return _ref9.apply(this, arguments);
    };
  }();

  var destroyTour = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/tours/" + id);

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function destroyTour(_x10) {
      return _ref10.apply(this, arguments);
    };
  }();

  var addGallery = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(images) {
      var i, file;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              for (i = 0; i < images.length; i++) {
                file = images[i];
                fd.append("images[" + i + "]", file);
              }

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function addGallery(_x11) {
      return _ref11.apply(this, arguments);
    };
  }();

  var addFiles = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(files) {
      var i, file;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              for (i = 0; i < files.length; i++) {
                file = files[i];
                fd.append("files[" + i + "]", file);
              }

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function addFiles(_x12) {
      return _ref12.apply(this, arguments);
    };
  }();

  var destroyImage = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(id) {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/delete-tour-image/" + id);

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function destroyImage(_x13) {
      return _ref13.apply(this, arguments);
    };
  }();

  var destroyFile = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(id) {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/delete-file/" + id);

            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function destroyFile(_x14) {
      return _ref14.apply(this, arguments);
    };
  }();

  var duplicate = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(id) {
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/tour/duplicate/" + id);

            case 2:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function duplicate(_x15) {
      return _ref15.apply(this, arguments);
    };
  }();

  return {
    tours: tours,
    duplicate: duplicate,
    tour: tour,
    errors: errors,
    getTours: getTours,
    getTour: getTour,
    storeTour: storeTour,
    updateTour: updateTour,
    destroyTour: destroyTour,
    deleteProperty: deleteProperty,
    addGallery: addGallery,
    addFiles: addFiles,
    getTourDetails: getTourDetails,
    destroyImage: destroyImage,
    destroyFile: destroyFile,
    percentage: percentage,
    pages: pages,
    getAllTours: getAllTours,
    getDestinationTours: getDestinationTours,
    getFilteredTours: getFilteredTours
  };
}

/***/ }),

/***/ "./resources/js/components/Pagenation.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Pagenation.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagenation_vue_vue_type_template_id_4096bc41__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagenation.vue?vue&type=template&id=4096bc41 */ "./resources/js/components/Pagenation.vue?vue&type=template&id=4096bc41");
/* harmony import */ var _Pagenation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagenation.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Pagenation.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagenation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagenation_vue_vue_type_template_id_4096bc41__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Pagenation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Tour.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Tour.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tour_vue_vue_type_template_id_7390f543__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tour.vue?vue&type=template&id=7390f543 */ "./resources/js/components/Tour.vue?vue&type=template&id=7390f543");
/* harmony import */ var _Tour_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tour.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Tour.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tour_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tour_vue_vue_type_template_id_7390f543__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Tour.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/frontend/tours/DestinationTours.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/frontend/tours/DestinationTours.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DestinationTours_vue_vue_type_template_id_490a5985__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DestinationTours.vue?vue&type=template&id=490a5985 */ "./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=template&id=490a5985");
/* harmony import */ var _DestinationTours_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DestinationTours.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DestinationTours_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DestinationTours_vue_vue_type_template_id_490a5985__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/frontend/tours/DestinationTours.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Pagenation.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Pagenation.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagenation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagenation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagenation.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagenation.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Tour.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Tour.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tour_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tour_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tour.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tour.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DestinationTours_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DestinationTours_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DestinationTours.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Pagenation.vue?vue&type=template&id=4096bc41":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Pagenation.vue?vue&type=template&id=4096bc41 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagenation_vue_vue_type_template_id_4096bc41__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagenation_vue_vue_type_template_id_4096bc41__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagenation.vue?vue&type=template&id=4096bc41 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagenation.vue?vue&type=template&id=4096bc41");


/***/ }),

/***/ "./resources/js/components/Tour.vue?vue&type=template&id=7390f543":
/*!************************************************************************!*\
  !*** ./resources/js/components/Tour.vue?vue&type=template&id=7390f543 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tour_vue_vue_type_template_id_7390f543__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tour_vue_vue_type_template_id_7390f543__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tour.vue?vue&type=template&id=7390f543 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tour.vue?vue&type=template&id=7390f543");


/***/ }),

/***/ "./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=template&id=490a5985":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=template&id=490a5985 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DestinationTours_vue_vue_type_template_id_490a5985__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DestinationTours_vue_vue_type_template_id_490a5985__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DestinationTours.vue?vue&type=template&id=490a5985 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/tours/DestinationTours.vue?vue&type=template&id=490a5985");


/***/ })

}]);