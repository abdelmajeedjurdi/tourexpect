"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_backend_packages_PackageCreate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProgressBar.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProgressBar.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ProgressBar',
  props: {
    percentage: Number
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var __returned__ = {
      get props() {
        return props;
      },

      set props(v) {
        v, _readOnlyError("props");
      },

      get ref() {
        return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SearchableDropdown',
  props: {
    options: Array,
    category_id: {
      type: String,
      "default": -1
    },
    component_id: {
      type: String,
      "default": "myDropdown"
    },
    component_placeholder: {
      type: String,
      "default": "Select Category"
    }
  },
  emits: ["selected"],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
        emit = _ref.emit;
    expose();
    var props = __props;
    var selected_option = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(props.category_id == -1 ? props.options.find(function (item) {
      return item.id == props.category_id;
    }) : props.options.find(function (item) {
      return item.id == props.category_id;
    })["name_en"]);
    var isListShow = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    function myFunction() {
      // document.getElementById(props.component_id).classList.toggle("show");
      isListShow.value = true;
    }

    function filterFunction() {
      var input, filter, ul, li, span, i, div, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById(props.component_id);
      span = div.getElementsByTagName("span");

      for (i = 0; i < span.length; i++) {
        txtValue = span[i].textContent || span[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          span[i].style.display = "";
        } else {
          span[i].style.display = "none";
        }
      }
    }

    var __returned__ = {
      props: props,
      emit: emit,

      get selected_option() {
        return selected_option;
      },

      set selected_option(v) {
        selected_option = v;
      },

      get isListShow() {
        return isListShow;
      },

      set isListShow(v) {
        isListShow = v;
      },

      myFunction: myFunction,
      filterFunction: filterFunction,

      get ref() {
        return _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref;
      },

      get onMounted() {
        return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_packages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../composables/packages */ "./resources/js/composables/packages.js");
/* harmony import */ var _composables_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../composables/categories */ "./resources/js/composables/categories.js");
/* harmony import */ var _composables_destinations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../composables/destinations */ "./resources/js/composables/destinations.js");
/* harmony import */ var _components_SearchableDropdown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/SearchableDropdown.vue */ "./resources/js/components/SearchableDropdown.vue");
/* harmony import */ var _components_ProgressBar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ProgressBar.vue */ "./resources/js/components/ProgressBar.vue");
/* harmony import */ var vue_upload_drop_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-upload-drop-images */ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue");
/* harmony import */ var _composables_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../composables/general */ "./resources/js/composables/general.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PackageCreate',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      category_ids: [],
      destination_ids: [],
      title_en: "",
      title_ar: "",
      address_ar: "",
      address_en: "",
      description_en: "",
      description_ar: "",
      image: "",
      itinerary: [],
      active: "",
      duration_en: "",
      duration_ar: "",
      max_number_of_people: "",
      include_en: "",
      include_ar: "",
      exclude_en: "",
      exclude_ar: "",
      source: "",
      options: [],
      highlights_ar: "",
      highlights_en: "",
      information_ar: "",
      information_en: "",
      policy_ar: "",
      policy_en: "",
      timing_and_transfer_ar: "",
      timing_and_transfer_en: "",
      notes_en: "",
      notes_ar: "",
      terms_and_conditions_en: "",
      terms_and_conditions_ar: "",
      is_from: true,
      banner_highlights: []
    });

    var _useGeneral = (0,_composables_general__WEBPACK_IMPORTED_MODULE_7__["default"])(),
        icons = _useGeneral.icons,
        getIcons = _useGeneral.getIcons;

    var isProgressing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var _usePackages = (0,_composables_packages__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        errors = _usePackages.errors,
        storePackage = _usePackages.storePackage,
        addGallery = _usePackages.addGallery,
        addFiles = _usePackages.addFiles,
        percentage = _usePackages.percentage;

    var _useCategories = (0,_composables_categories__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        categories = _useCategories.categories,
        getCategoriesOnSection = _useCategories.getCategoriesOnSection;

    var _useDestinations = (0,_composables_destinations__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        destinations = _useDestinations.destinations,
        getDestinations = _useDestinations.getDestinations;

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      getCategoriesOnSection("packages");
      getDestinations();
      getIcons();
    });

    var handleImages = function handleImages(images) {
      addGallery(images);
    };

    var handleFiles = function handleFiles(files) {
      addFiles(files);
    };

    var savePackage = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isProgressing.value = true;
                _context.next = 3;
                return storePackage({
                  form: form,
                  file: file
                });

              case 3:
                isProgressing.value = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function savePackage() {
        return _ref2.apply(this, arguments);
      };
    }();

    var imagePreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var file = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(null);

    function onFileSelected(event) {
      file = event.target.files[0];
      form.image = event.target.files[0].name;
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (event) {
        imagePreview.value = event.target.result;
      };
    }

    var selectCategory = function selectCategory(category_id) {
      for (var i in form.category_ids) {
        if (form.category_ids[i] == ctg) return;
      }

      form.category_ids.push(category_id);
    };

    var selectDestination = function selectDestination(destination_id) {
      form.destination_id = destination_id;
    };

    var banner_highlight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      title_en: "",
      title_ar: "",
      img: "1.svg"
    });

    var setBannerHighlight = function setBannerHighlight() {
      if (!is_editing.value) {
        form.banner_highlights.push(banner_highlight.value);
        banner_highlight.value = {
          title_en: "",
          title_ar: "",
          img: "1.svg"
        };
        selected_img.value = "1.svg";
      } else {
        is_editing.value = false;
        banner_highlight.value = {
          title_en: "",
          title_ar: "",
          img: "1.svg"
        };
        selected_img.value = "1.svg";
      }
    };

    var deleteRow = function deleteRow(banner_highlight) {
      form.banner_highlights.splice(banner_highlight, 1);
    };

    var is_editing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var editRow = function editRow(banner_highlight_id) {
      is_editing.value = true;
      banner_highlight.value = form.banner_highlights[banner_highlight_id];
      selected_img.value = form.banner_highlights[banner_highlight_id].img;
    };

    var openImgs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var selected_img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("1.svg");
    var highlight_imgs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([{
      id: 1,
      name: "1.svg"
    }, {
      id: 2,
      name: "2.svg"
    }, {
      id: 3,
      name: "3.svg"
    }]);

    var setHighlightImage = function setHighlightImage(img) {
      selected_img.value = img;
      banner_highlight.value.img = img;
    }; // ---------


    var package_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      title_en: "",
      title_ar: "",
      adult_price: null,
      child_price: null,
      infant_price: null,
      option_discount: null,
      option_discount_type: "percentage"
    });

    var setPackageOption = function setPackageOption() {
      if (!is_editing_option.value) {
        form.options.push(package_option.value);
        package_option.value = {
          title_en: "",
          title_ar: "",
          adult_price: null,
          child_price: null,
          infant_price: null,
          option_discount: null,
          option_discount_type: "percentage"
        };
        selected_img.value = "1.svg";
      } else {
        is_editing_option.value = false;
        package_option.value = {
          title_en: "",
          title_ar: "",
          adult_price: null,
          child_price: null,
          infant_price: null,
          option_discount: null,
          option_discount_type: "percentage"
        };
        selected_img.value = "1.svg";
      }
    };

    var deletePackageOption = function deletePackageOption(package_option) {
      form.options.splice(package_option, 1);
    };

    var is_editing_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var editPackageOption = function editPackageOption(option_id) {
      is_editing_option.value = true;
      package_option.value = form.options[option_id];
    }; // -------------------


    var destination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      title_en: "",
      title_ar: "",
      description_en: "",
      description_ar: ""
    });

    var setItinerary = function setItinerary() {
      if (!is_itinerary_editing.value) {
        form.itinerary.push(destination.value);
        destination.value = {
          title_en: "",
          title_ar: "",
          description_en: "",
          description_ar: ""
        };
      } else {
        is_itinerary_editing.value = false;
        destination.value = {
          title_en: "",
          title_ar: "",
          description_en: "",
          description_ar: ""
        };
      }
    };

    var deleteItineraryRow = function deleteItineraryRow(destination) {
      form.itinerary.splice(destination, 1);
    };

    var is_itinerary_editing = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var editItineraryRow = function editItineraryRow(destination_id) {
      is_itinerary_editing.value = true;
      destination.value = form.itinerary[destination_id];
    };

    var opened_destination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(-1);
    var __returned__ = {
      form: form,
      icons: icons,
      getIcons: getIcons,

      get isProgressing() {
        return isProgressing;
      },

      set isProgressing(v) {
        isProgressing = v;
      },

      errors: errors,
      storePackage: storePackage,
      addGallery: addGallery,
      addFiles: addFiles,
      percentage: percentage,
      categories: categories,
      getCategoriesOnSection: getCategoriesOnSection,
      destinations: destinations,
      getDestinations: getDestinations,
      handleImages: handleImages,
      handleFiles: handleFiles,
      savePackage: savePackage,

      get imagePreview() {
        return imagePreview;
      },

      set imagePreview(v) {
        imagePreview = v;
      },

      get file() {
        return file;
      },

      set file(v) {
        file = v;
      },

      onFileSelected: onFileSelected,
      selectCategory: selectCategory,
      selectDestination: selectDestination,

      get banner_highlight() {
        return banner_highlight;
      },

      set banner_highlight(v) {
        banner_highlight = v;
      },

      setBannerHighlight: setBannerHighlight,
      deleteRow: deleteRow,

      get is_editing() {
        return is_editing;
      },

      set is_editing(v) {
        is_editing = v;
      },

      editRow: editRow,

      get openImgs() {
        return openImgs;
      },

      set openImgs(v) {
        openImgs = v;
      },

      get selected_img() {
        return selected_img;
      },

      set selected_img(v) {
        selected_img = v;
      },

      get highlight_imgs() {
        return highlight_imgs;
      },

      set highlight_imgs(v) {
        highlight_imgs = v;
      },

      setHighlightImage: setHighlightImage,

      get package_option() {
        return package_option;
      },

      set package_option(v) {
        package_option = v;
      },

      setPackageOption: setPackageOption,
      deletePackageOption: deletePackageOption,

      get is_editing_option() {
        return is_editing_option;
      },

      set is_editing_option(v) {
        is_editing_option = v;
      },

      editPackageOption: editPackageOption,

      get destination() {
        return destination;
      },

      set destination(v) {
        destination = v;
      },

      setItinerary: setItinerary,
      deleteItineraryRow: deleteItineraryRow,

      get is_itinerary_editing() {
        return is_itinerary_editing;
      },

      set is_itinerary_editing(v) {
        is_itinerary_editing = v;
      },

      editItineraryRow: editItineraryRow,

      get opened_destination() {
        return opened_destination;
      },

      set opened_destination(v) {
        opened_destination = v;
      },

      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,

      get usePackages() {
        return _composables_packages__WEBPACK_IMPORTED_MODULE_1__["default"];
      },

      get useCategories() {
        return _composables_categories__WEBPACK_IMPORTED_MODULE_2__["default"];
      },

      get useDestinations() {
        return _composables_destinations__WEBPACK_IMPORTED_MODULE_3__["default"];
      },

      SearchableDropdown: _components_SearchableDropdown_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      ProgressBar: _components_ProgressBar_vue__WEBPACK_IMPORTED_MODULE_5__["default"],

      get UploadImages() {
        return vue_upload_drop_images__WEBPACK_IMPORTED_MODULE_6__["default"];
      },

      get useGeneral() {
        return _composables_general__WEBPACK_IMPORTED_MODULE_7__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": ""
};
var _hoisted_2 = {
  "class": "p-10 w-1/2 mx-auto max-w-full bg-white shadow rounded"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-gray-700 text-center"
}, " Please Wait, it might take some time ")], -1
/* HOISTED */
);

var _hoisted_4 = ["aria-valuenow"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Define the width model within parent div "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Light mode "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Regular with text version "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-gray-200 rounded h-6 mt-5",
    role: "progressbar",
    "aria-valuenow": $props.percentage,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-green-400 rounded h-6 text-center text-white text-sm transition",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width: ".concat($props.percentage, "%; transition: width 2s;"))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.percentage + "%"), 5
  /* TEXT, STYLE */
  )], 8
  /* PROPS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" End Regular with text version ")])])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=template&id=5ae6f544":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=template&id=5ae6f544 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "dropdown"
};
var _hoisted_2 = ["id"];
var _hoisted_3 = ["onClick"];
var _hoisted_4 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "rounded py-2 bg-gray-100 dropdown-toggle w-64 dark:bg-gray-800",
    type: "button",
    id: "dropdownMenuButton1",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false",
    onClick: $setup.myFunction
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.selected_option == null ? $props.component_placeholder : $setup.selected_option), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    id: $props.component_id + '-temp',
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dropdown-menu dark:dropdown-menu-dark", $setup.isListShow == true ? 'show' : 'hidden']),
    "aria-labelledby": "dropdownMenuButton1"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "dropdown-item border border-gray-500 w-1/2",
    type: "text",
    autocomplete: "off",
    placeholder: "Search..",
    id: "myInput",
    onKeyup: _cache[0] || (_cache[0] = function ($event) {
      return $setup.filterFunction();
    })
  }, null, 32
  /* HYDRATE_EVENTS */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, function (option) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: option.id,
      onClick: function onClick($event) {
        return $setup.selected_option = option.name_en;
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: function onClick($event) {
        return _ctx.$emit('selected', option.id);
      },
      "class": "dropdown-item dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer text-gray-200"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option["name_en"]), 9
    /* TEXT, PROPS */
    , _hoisted_4)], 8
    /* PROPS */
    , _hoisted_3);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 10
  /* CLASS, PROPS */
  , _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=template&id=4ab46f24":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=template&id=4ab46f24 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 1,
  "class": "-ml-6 -mt-6 w-full pt-52 fixed bg-black bg-opacity-50 z-20",
  style: {
    "height": "100%"
  }
};
var _hoisted_3 = {
  "class": "flex"
};
var _hoisted_4 = ["onSubmit"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Package Create", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "lg:flex justify-between space-x-4"
};
var _hoisted_7 = {
  "class": "space-y-4 rounded-md w-full"
};
var _hoisted_8 = {
  "class": "flex justify-between"
};
var _hoisted_9 = {
  "class": "w-full me-2"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Title", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "mt-1"
};
var _hoisted_12 = {
  "class": "w-full"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Title", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "mt-1"
};
var _hoisted_15 = {
  "class": "flex justify-between"
};
var _hoisted_16 = {
  "class": "w-full me-2"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "address_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Address", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "mt-1"
};
var _hoisted_19 = {
  "class": "w-full"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "address_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Address", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "mt-1"
};
var _hoisted_22 = {
  "class": "flex justify-between"
};
var _hoisted_23 = {
  "class": "w-full me-2"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "description_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Description", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "mt-1"
};
var _hoisted_26 = {
  "class": "w-full"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "description_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Description", -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "mt-1"
};
var _hoisted_29 = {
  "class": "flex justify-between"
};
var _hoisted_30 = {
  "class": "space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Banner Highlights", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "flex justify-between"
};
var _hoisted_33 = {
  "class": "w-full me-2"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Title", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "mt-1"
};
var _hoisted_36 = {
  "class": "w-full"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Title", -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "mt-1"
};
var _hoisted_39 = {
  "class": "dropdown mt-4"
};
var _hoisted_40 = ["src"];

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "class": "w-10 text-gray-700 dark:text-gray-200"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
})], -1
/* HOISTED */
);

var _hoisted_42 = ["onClick"];
var _hoisted_43 = ["src"];

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
})], -1
/* HOISTED */
);

var _hoisted_45 = [_hoisted_44];

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M5 13l4 4L19 7"
})], -1
/* HOISTED */
);

var _hoisted_47 = [_hoisted_46];
var _hoisted_48 = {
  "class": "w-full rounded items-center p-1 bg-gray-400 text-black flex"
};
var _hoisted_49 = {
  "class": "flex w-full justify-between"
};
var _hoisted_50 = {
  "class": ""
};
var _hoisted_51 = ["src"];
var _hoisted_52 = {
  "class": "flex"
};
var _hoisted_53 = ["onClick"];

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6 text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
})], -1
/* HOISTED */
);

var _hoisted_55 = [_hoisted_54];
var _hoisted_56 = ["onClick"];

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 text-red-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
})], -1
/* HOISTED */
);

var _hoisted_58 = [_hoisted_57];
var _hoisted_59 = {
  "class": "flex justify-between"
};
var _hoisted_60 = {
  "class": "space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0"
};
var _hoisted_61 = {
  "class": "flex justify-between"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Options", -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "flex items-center"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "is_from",
  "class": "py-2 cursor-pointer text-sm font-medium text-gray-200 mx-2 dark:text-gray-300"
}, "Is From?", -1
/* HOISTED */
);

var _hoisted_65 = {
  "class": "flex justify-between"
};
var _hoisted_66 = {
  "class": "w-1/4"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Title", -1
/* HOISTED */
);

var _hoisted_68 = {
  "class": "mt-1"
};
var _hoisted_69 = {
  "class": "w-1/4 me-2"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Title", -1
/* HOISTED */
);

var _hoisted_71 = {
  "class": "mt-1"
};
var _hoisted_72 = {
  "class": "flex justify-between w-1/2"
};
var _hoisted_73 = {
  "class": "w-full"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "adult_price",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Adult Price", -1
/* HOISTED */
);

var _hoisted_75 = {
  "class": "mt-1"
};
var _hoisted_76 = {
  "class": "w-full"
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "child_price",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Child Price", -1
/* HOISTED */
);

var _hoisted_78 = {
  "class": "mt-1"
};
var _hoisted_79 = {
  "class": "w-full"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "infant_price",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Infant Price", -1
/* HOISTED */
);

var _hoisted_81 = {
  "class": "mt-1"
};
var _hoisted_82 = {
  "class": "w-full"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "option_discount",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, " Discount", -1
/* HOISTED */
);

var _hoisted_84 = {
  "class": "mt-1 flex"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  "class": "",
  value: "percentage"
}, " % ", -1
/* HOISTED */
);

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  "class": "py-4",
  value: "amount"
}, " $ ", -1
/* HOISTED */
);

var _hoisted_87 = [_hoisted_85, _hoisted_86];

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
})], -1
/* HOISTED */
);

var _hoisted_89 = [_hoisted_88];

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M5 13l4 4L19 7"
})], -1
/* HOISTED */
);

var _hoisted_91 = [_hoisted_90];
var _hoisted_92 = {
  "class": "w-full rounded items-center p-1 bg-gray-400 text-black flex"
};
var _hoisted_93 = {
  "class": "flex w-full justify-between"
};
var _hoisted_94 = {
  "class": ""
};
var _hoisted_95 = {
  "class": "flex mx-2"
};
var _hoisted_96 = ["onClick"];

var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6 text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
})], -1
/* HOISTED */
);

var _hoisted_98 = [_hoisted_97];
var _hoisted_99 = ["onClick"];

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 text-red-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
})], -1
/* HOISTED */
);

var _hoisted_101 = [_hoisted_100];
var _hoisted_102 = {
  "class": "flex justify-between"
};
var _hoisted_103 = {
  "class": "space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0"
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Itinerary", -1
/* HOISTED */
);

var _hoisted_105 = {
  "class": "flex justify-between"
};
var _hoisted_106 = {
  "class": "w-full me-2"
};
var _hoisted_107 = {
  "class": "mt-1"
};
var _hoisted_108 = {
  "class": "mt-1"
};
var _hoisted_109 = {
  "class": "w-full"
};
var _hoisted_110 = {
  "class": "mt-1"
};
var _hoisted_111 = {
  "class": "mt-1"
};

var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
})], -1
/* HOISTED */
);

var _hoisted_113 = [_hoisted_112];

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M5 13l4 4L19 7"
})], -1
/* HOISTED */
);

var _hoisted_115 = [_hoisted_114];
var _hoisted_116 = {
  "class": "w-full rounded items-center p-1 bg-gray-400 text-black flex"
};
var _hoisted_117 = {
  "class": "mb-auto h-6 w-6 rounded-full text-center mr-2 border-2 border-blue-600 text-blue-600 items-center text-sm"
};
var _hoisted_118 = ["onClick"];
var _hoisted_119 = {
  "class": "w-full"
};
var _hoisted_120 = {
  "class": "w-full text-right"
};
var _hoisted_121 = {
  "class": "flex mb-auto"
};
var _hoisted_122 = ["onClick"];

var _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 w-6 text-blue-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
})], -1
/* HOISTED */
);

var _hoisted_124 = [_hoisted_123];
var _hoisted_125 = ["onClick"];

var _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "h-6 text-red-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
})], -1
/* HOISTED */
);

var _hoisted_127 = [_hoisted_126];
var _hoisted_128 = {
  "class": "flex justify-between"
};
var _hoisted_129 = {
  "class": "w-full me-2"
};

var _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "duration_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Duration", -1
/* HOISTED */
);

var _hoisted_131 = {
  "class": "mt-1"
};
var _hoisted_132 = {
  "class": "w-full"
};

var _hoisted_133 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "duration_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Duration", -1
/* HOISTED */
);

var _hoisted_134 = {
  "class": "mt-1"
};
var _hoisted_135 = {
  "class": "flex justify-between"
};
var _hoisted_136 = {
  "class": "w-full me-2"
};

var _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "include_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Include", -1
/* HOISTED */
);

var _hoisted_138 = {
  "class": "mt-1"
};
var _hoisted_139 = {
  "class": "w-full"
};

var _hoisted_140 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "include_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Include", -1
/* HOISTED */
);

var _hoisted_141 = {
  "class": "mt-1"
};
var _hoisted_142 = {
  "class": "flex justify-between"
};
var _hoisted_143 = {
  "class": "w-full me-2"
};

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "exclude_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Exclude", -1
/* HOISTED */
);

var _hoisted_145 = {
  "class": "mt-1"
};
var _hoisted_146 = {
  "class": "w-full"
};

var _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "exclude_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Exclude", -1
/* HOISTED */
);

var _hoisted_148 = {
  "class": "mt-1"
};
var _hoisted_149 = {
  "class": "mt-2"
};

var _hoisted_150 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Gallery", -1
/* HOISTED */
);

var _hoisted_151 = {
  "class": "flex justify-between"
};
var _hoisted_152 = {
  "class": "w-full me-2"
};

var _hoisted_153 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "highlights_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Highlights", -1
/* HOISTED */
);

var _hoisted_154 = {
  "class": "mt-1"
};
var _hoisted_155 = {
  "class": "w-full"
};

var _hoisted_156 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "highlights_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Highlights", -1
/* HOISTED */
);

var _hoisted_157 = {
  "class": "mt-1"
};
var _hoisted_158 = {
  "class": "flex justify-between"
};
var _hoisted_159 = {
  "class": "w-full me-2"
};

var _hoisted_160 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "information_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Information", -1
/* HOISTED */
);

var _hoisted_161 = {
  "class": "mt-1"
};
var _hoisted_162 = {
  "class": "w-full"
};

var _hoisted_163 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "information_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Information", -1
/* HOISTED */
);

var _hoisted_164 = {
  "class": "mt-1"
};
var _hoisted_165 = {
  "class": "flex justify-between"
};
var _hoisted_166 = {
  "class": "w-full me-2"
};

var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "policy_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Booking Policy", -1
/* HOISTED */
);

var _hoisted_168 = {
  "class": "mt-1"
};
var _hoisted_169 = {
  "class": "w-full"
};

var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "policy_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Booking Policy", -1
/* HOISTED */
);

var _hoisted_171 = {
  "class": "mt-1"
};
var _hoisted_172 = {
  "class": "flex justify-between"
};
var _hoisted_173 = {
  "class": "w-full me-2"
};

var _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "timing_and_transfer_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Timing and Transfer", -1
/* HOISTED */
);

var _hoisted_175 = {
  "class": "mt-1"
};
var _hoisted_176 = {
  "class": "w-full"
};

var _hoisted_177 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "timing_and_transfer_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Timing and Transfer", -1
/* HOISTED */
);

var _hoisted_178 = {
  "class": "mt-1"
};
var _hoisted_179 = {
  "class": "flex justify-between"
};
var _hoisted_180 = {
  "class": "w-full me-2"
};

var _hoisted_181 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "terms_and_conditions_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Terms and Conditions", -1
/* HOISTED */
);

var _hoisted_182 = {
  "class": "mt-1"
};
var _hoisted_183 = {
  "class": "w-full"
};

var _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "terms_and_conditions_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Terms and Conditions Policy", -1
/* HOISTED */
);

var _hoisted_185 = {
  "class": "mt-1"
};
var _hoisted_186 = {
  "class": "flex justify-between"
};
var _hoisted_187 = {
  "class": "w-full me-2"
};

var _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "notes_en",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "English Notes", -1
/* HOISTED */
);

var _hoisted_189 = {
  "class": "mt-1"
};
var _hoisted_190 = {
  "class": "w-full"
};

var _hoisted_191 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "notes_ar",
  "class": "block text-sm font-medium text-gray-700 dark:text-gray-200"
}, "Arabic Notes", -1
/* HOISTED */
);

var _hoisted_192 = {
  "class": "mt-1"
};

var _hoisted_193 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
}, " Create ", -1
/* HOISTED */
);

var _hoisted_194 = {
  "class": "ml-3 bg-blue-400 dark:bg-gray-600 rounded h-screen w-96 text-center px-4 top-5",
  style: {
    "height": "112vh"
  }
};
var _hoisted_195 = {
  "class": "border-b border-gray-200 py-6"
};

var _hoisted_196 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "max_number_of_people",
  "class": "block font-medium w-full text-left text-gray-700 dark:text-gray-200 mb-2"
}, " Categories", -1
/* HOISTED */
);

var _hoisted_197 = {
  id: "filter-section-1 "
};
var _hoisted_198 = {
  "class": "space-y-4 h-28 overflow-y-scroll"
};
var _hoisted_199 = ["id", "name", "value"];
var _hoisted_200 = ["for"];
var _hoisted_201 = {
  "class": "border-b border-gray-200 py-6"
};

var _hoisted_202 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "max_number_of_people",
  "class": "block font-medium w-full text-left text-gray-700 dark:text-gray-200 mb-2"
}, " Destinations", -1
/* HOISTED */
);

var _hoisted_203 = {
  id: "filter-section-1 "
};
var _hoisted_204 = {
  "class": "space-y-4 h-28 overflow-y-scroll"
};
var _hoisted_205 = ["id", "name", "value"];
var _hoisted_206 = ["for"];
var _hoisted_207 = {
  "class": "w-full me-2 mt-2"
};

var _hoisted_208 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "max_number_of_people",
  "class": "block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200"
}, " Max number of people", -1
/* HOISTED */
);

var _hoisted_209 = {
  "class": "mt-1"
};
var _hoisted_210 = {
  "class": "w-full me-2 mt-2"
};

var _hoisted_211 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "max_number_of_people",
  "class": "block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200"
}, " Source", -1
/* HOISTED */
);

var _hoisted_212 = {
  "class": "mt-1"
};
var _hoisted_213 = {
  key: 0,
  "class": "flex w-full mt-2"
};
var _hoisted_214 = ["src"];
var _hoisted_215 = {
  "class": "flex flex-col mt-2"
};

var _hoisted_216 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "image",
  "class": "w-100 flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "class": "w-12 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "my-auto text-gray-200"
}, "Select thumbnail")], -1
/* HOISTED */
);

var _hoisted_217 = {
  "class": "flex items-center rounded border border-gray-600 w-full mx-auto mt-2 px-2"
};

var _hoisted_218 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "active",
  "class": "py-2 text-sm font-medium text-gray-200 mx-2 dark:text-gray-300"
}, "Active", -1
/* HOISTED */
);

var _hoisted_219 = {
  "class": "w-full text-left mt-4"
};
var _hoisted_220 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$setup.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.errors, function (v, k) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: k,
      "class": "bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(v, function (error) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", {
        key: error,
        "class": "text-sm"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(error), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.isProgressing && $setup.percentage < 100 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProgressBar"], {
    percentage: $setup.percentage
  }, null, 8
  /* PROPS */
  , ["percentage"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "space-y-6 w-full",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.savePackage, ["prevent"])
  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "title_en",
    id: "title_en",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.title_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.title_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    dir: "rtl",
    type: "text",
    name: "title_ar",
    id: "title_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.title_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.title_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "address_en",
    id: "address_en",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.address_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.address_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    dir: "rtl",
    type: "text",
    name: "address_ar",
    id: "address_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.address_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.address_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "description_en",
    id: "description_en",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.description_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.description_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    name: "description_ar",
    id: "description_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.description_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.description_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Banner Highlights "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "title_en",
    id: "title_en",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.banner_highlight.title_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.banner_highlight.title_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    dir: "rtl",
    type: "text",
    name: "title_ar",
    id: "title_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.banner_highlight.title_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.banner_highlight.title_ar]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "rounded bg-gray-100 bg-no-repeat py-2 px-4 dark:bg-gray-800 flex items-center",
    type: "button",
    id: "dropdownMenuButton1",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false",
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $setup.openImgs = true;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "mr-2 h-6 w-6 rounded-full",
    src: "/images/icons/".concat($setup.selected_img),
    alt: "Avatar image"
  }, null, 8
  /* PROPS */
  , _hoisted_40), _hoisted_41]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    id: "component_id",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dropdown-menu dark:dropdown-menu-dark", $setup.openImgs == true ? 'show' : 'hidden']),
    "aria-labelledby": "dropdownMenuButton1"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.icons, function (img) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: img.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: function onClick($event) {
        return $setup.setHighlightImage(img.image);
      },
      "class": "dropdown-item dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer text-gray-200"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "h-6",
      src: '/images/icons/' + img.image,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_43)], 8
    /* PROPS */
    , _hoisted_42)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )])])]), !$setup.is_editing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300",
    onClick: $setup.setBannerHighlight
  }, _hoisted_45)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300",
    onClick: $setup.setBannerHighlight
  }, _hoisted_47)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.banner_highlights, function (ban_highlight, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "rounded",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ban_highlight.title_en), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ban_highlight.title_ar), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "h-6 mx-2",
      src: '/images/icons/' + ban_highlight.img,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_51), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "cursor-pointer rotate-90",
      onClick: function onClick($event) {
        return $setup.editRow(i);
      }
    }, _hoisted_55, 8
    /* PROPS */
    , _hoisted_53), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "cursor-pointer rotate-90",
      onClick: function onClick($event) {
        return $setup.deleteRow(i);
      }
    }, _hoisted_58, 8
    /* PROPS */
    , _hoisted_56)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" package options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "is_from",
    type: "checkbox",
    value: "",
    name: "bordered-checkbox",
    "class": "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.form.is_from = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.is_from]]), _hoisted_64])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "title_en",
    id: "title_en",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.package_option.title_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.package_option.title_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    dir: "rtl",
    type: "text",
    name: "title_ar",
    id: "title_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.package_option.title_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.package_option.title_ar]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" prices "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    name: "adult_price",
    id: "adult_price",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.package_option.adult_price = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.package_option.adult_price]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    name: "child_price",
    id: "child_price",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.package_option.child_price = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.package_option.child_price]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    name: "infant_price",
    id: "infant_price",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.package_option.infant_price = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.package_option.infant_price]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    name: "option_discount",
    id: "option_discount",
    "class": "block w-16 rounded-l-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.package_option.option_discount = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.package_option.option_discount]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "discount_type",
    id: "discount_type",
    "class": "w-20 dark:bg-gray-700 rounded-r-md text-gray-700 dark:text-gray-200",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.package_option.option_discount_type = $event;
    })
  }, _hoisted_87, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.package_option.option_discount_type]])])])])]), !$setup.is_editing_option ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300",
    onClick: $setup.setPackageOption
  }, _hoisted_89)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300",
    onClick: $setup.setPackageOption
  }, _hoisted_91)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.options, function (option, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "rounded",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.title_en), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.title_ar), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.adult_price), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.child_price), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.infant_price), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.option_discount + " " + (option.option_discount_type[0] == "a" ? "$" : "% ")), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "cursor-pointer rotate-90",
      onClick: function onClick($event) {
        return $setup.editPackageOption(i);
      }
    }, _hoisted_98, 8
    /* PROPS */
    , _hoisted_96), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "cursor-pointer rotate-90",
      onClick: function onClick($event) {
        return $setup.deletePackageOption(i);
      }
    }, _hoisted_101, 8
    /* PROPS */
    , _hoisted_99)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [_hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "destination_title_en",
    id: "destination_title_en",
    placeholder: "English Title",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.destination.title_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.destination.title_en]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "3",
    type: "text",
    name: "destination_include_en",
    id: "destination_include_en",
    placeholder: "English Description",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.destination.description_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.destination.description_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    dir: "rtl",
    type: "text",
    name: "destination_title_ar",
    id: "destination_title_ar",
    placeholder: "Arabic Title",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.destination.title_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.destination.title_ar]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "3",
    type: "text",
    name: "desc_ar",
    id: "desc_ar",
    dir: "rtl",
    placeholder: "Arabic Description",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.destination.description_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.destination.description_ar]])])])]), !$setup.is_itinerary_editing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300",
    onClick: $setup.setItinerary
  }, _hoisted_113)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300",
    onClick: $setup.setItinerary
  }, _hoisted_115)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.itinerary, function (destination, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "rounded",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_117, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "flex w-full justify-between cursor-pointer",
      onClick: function onClick($event) {
        return $setup.opened_destination != i ? $setup.opened_destination = i : $setup.opened_destination = -1;
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(destination.title_en) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "w-full bg-gray-300 p-2 rounded mr-1"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(destination.description_en), 513
    /* TEXT, NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.opened_destination == i]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(destination.title_ar) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "w-full bg-gray-300 p-2 text-right rounded ml-1"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(destination.description_ar), 513
    /* TEXT, NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.opened_destination == i]])])], 8
    /* PROPS */
    , _hoisted_118), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "cursor-pointer rotate-90",
      onClick: function onClick($event) {
        return $setup.editItineraryRow(i);
      }
    }, _hoisted_124, 8
    /* PROPS */
    , _hoisted_122), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "cursor-pointer rotate-90",
      onClick: function onClick($event) {
        return $setup.deleteItineraryRow(i);
      }
    }, _hoisted_127, 8
    /* PROPS */
    , _hoisted_125)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_129, [_hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "duration_en",
    id: "duration_en",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $setup.form.duration_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.duration_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [_hoisted_133, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    dir: "rtl",
    type: "text",
    name: "duration_ar",
    id: "duration_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $setup.form.duration_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.duration_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [_hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_138, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "include_en",
    id: "include_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $setup.form.include_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.include_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [_hoisted_140, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "include_ar",
    id: "include_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $setup.form.include_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.include_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [_hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "exclude_en",
    id: "exclude_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $setup.form.exclude_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.exclude_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [_hoisted_147, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "exclude_ar",
    id: "exclude_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $setup.form.exclude_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.exclude_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [_hoisted_150, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["UploadImages"], {
    onChanged: $setup.handleImages
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, [_hoisted_153, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "highlights_en",
    id: "highlights_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $setup.form.highlights_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.highlights_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [_hoisted_156, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "highlights_ar",
    id: "highlights_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $setup.form.highlights_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.highlights_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [_hoisted_160, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_161, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "information_en",
    id: "information_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
      return $setup.form.information_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.information_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [_hoisted_163, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_164, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "information_ar",
    id: "information_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
      return $setup.form.information_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.information_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [_hoisted_167, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_168, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "policy_en",
    id: "policy_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
      return $setup.form.policy_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.policy_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [_hoisted_170, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "policy_ar",
    id: "policy_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $setup.form.policy_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.policy_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_173, [_hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "timing_and_transfer_en",
    id: "timing_and_transfer_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
      return $setup.form.timing_and_transfer_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.timing_and_transfer_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [_hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_178, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "timing_and_transfer_ar",
    id: "timing_and_transfer_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
      return $setup.form.timing_and_transfer_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.timing_and_transfer_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_180, [_hoisted_181, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "terms_and_conditions_en",
    id: "terms_and_conditions_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
      return $setup.form.terms_and_conditions_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.terms_and_conditions_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [_hoisted_184, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "terms_and_conditions_ar",
    id: "terms_and_conditions_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
      return $setup.form.terms_and_conditions_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.terms_and_conditions_ar]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_186, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, [_hoisted_188, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_189, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    rows: "10",
    type: "text",
    name: "notes_en",
    id: "notes_en",
    placeholder: "Separate it by lines followed by --",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
      return $setup.form.notes_en = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.notes_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, [_hoisted_191, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_192, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    dir: "rtl",
    rows: "10",
    type: "text",
    placeholder: "Separate it by lines followed by --",
    name: "notes_ar",
    id: "notes_ar",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[38] || (_cache[38] = function ($event) {
      return $setup.form.notes_ar = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.notes_ar]])])])])])]), _hoisted_193], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_194, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" categories filter "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_195, [_hoisted_196, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_198, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "flex items-center",
      key: category.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: category['name_en'],
      name: category['name_en'],
      value: category.id,
      type: "checkbox",
      "onUpdate:modelValue": _cache[39] || (_cache[39] = function ($event) {
        return $setup.form.category_ids = $event;
      }),
      "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    }, null, 8
    /* PROPS */
    , _hoisted_199), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.category_ids]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": category['name_en'],
      "class": "ml-3 text-sm text-white"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category["name_en"]), 9
    /* TEXT, PROPS */
    , _hoisted_200)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [_hoisted_202, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_204, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.destinations, function (destination) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "flex items-center",
      key: destination.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: destination['name_en'],
      name: destination['name_en'],
      value: destination.id,
      type: "checkbox",
      "onUpdate:modelValue": _cache[40] || (_cache[40] = function ($event) {
        return $setup.form.destination_ids = $event;
      }),
      "class": "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
    }, null, 8
    /* PROPS */
    , _hoisted_205), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.destination_ids]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": destination['name_en'],
      "class": "ml-3 text-sm text-white"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(destination["name_en"]), 9
    /* TEXT, PROPS */
    , _hoisted_206)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_207, [_hoisted_208, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_209, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    name: "max_number_of_people",
    id: "max_number_of_people",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[41] || (_cache[41] = function ($event) {
      return $setup.form.max_number_of_people = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.max_number_of_people]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_210, [_hoisted_211, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "source",
    id: "source",
    "class": "block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800",
    "onUpdate:modelValue": _cache[42] || (_cache[42] = function ($event) {
      return $setup.form.source = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.source]])])]), $setup.imagePreview ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.imagePreview,
    alt: "",
    "class": "figure-img img-fluid rounded",
    style: {
      "max-height": "100px"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_214)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_215, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none hidden",
    onChange: $setup.onFileSelected,
    type: "file",
    id: "image",
    accept: "image/*"
  }, null, 32
  /* HYDRATE_EVENTS */
  ), _hoisted_216]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_217, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "active",
    type: "checkbox",
    value: "",
    name: "bordered-checkbox",
    "class": "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2",
    "onUpdate:modelValue": _cache[43] || (_cache[43] = function ($event) {
      return $setup.form.active = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.active]]), _hoisted_218]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_219, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.savePackage, ["prevent"]),
    "class": "inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
  }, " Save ", 8
  /* PROPS */
  , _hoisted_220)])])])]);
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

  var duplicateCountry = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/country/duplicate/" + id);

            case 2:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function duplicateCountry(_x9) {
      return _ref11.apply(this, arguments);
    };
  }();

  var getCountry = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/countries/" + id);

            case 2:
              response = _context12.sent;
              country.value = response.data;

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function getCountry(_x10) {
      return _ref12.apply(this, arguments);
    };
  }();

  var storeCountry = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              fd = new FormData();
              fd.append("name_en", data.form.name_en);
              fd.append("name_ar", data.form.name_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("country_img", data.form.image);
              fd.append("image", data.file);
              errors.value = "";
              _context13.prev = 8;
              _context13.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/countries", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {// uploadPercentage = parseInt(
                  //     Math.round(
                  //         (progressEvent.loaded / progressEvent.total) * 100
                  //     )
                  // );
                }
              });

            case 11:
              _context13.next = 13;
              return router.push({
                name: "countries.index"
              });

            case 13:
              _context13.next = 18;
              break;

            case 15:
              _context13.prev = 15;
              _context13.t0 = _context13["catch"](8);

              if (_context13.t0.response.status === 422) {
                errors.value = _context13.t0.response.data.errors;
              }

            case 18:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[8, 15]]);
    }));

    return function storeCountry(_x11) {
      return _ref13.apply(this, arguments);
    };
  }();

  var updateCountry = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(id, data) {
      var fd;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              fd = new FormData();
              fd.append("_method", "patch");
              fd.append("destination", 'flag');
              fd.append("name_en", data.form.name_en);
              fd.append("name_ar", data.form.name_ar);
              fd.append("description_en", data.form.description_en);
              fd.append("description_ar", data.form.description_ar);
              fd.append("country_img", data.form.image);
              fd.append("new_image", data.file);
              errors.value = "";
              _context14.prev = 10;
              _context14.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/countries/" + id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 13:
              _context14.next = 15;
              return router.push({
                name: "countries.index"
              });

            case 15:
              _context14.next = 20;
              break;

            case 17:
              _context14.prev = 17;
              _context14.t0 = _context14["catch"](10);

              if (_context14.t0.response.status === 422) {
                errors.value = _context14.t0.response.data.errors;
              }

            case 20:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[10, 17]]);
    }));

    return function updateCountry(_x12, _x13) {
      return _ref14.apply(this, arguments);
    };
  }();

  var destroyCountry = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(id) {
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/countries/" + id);

            case 2:
              getCountries();

            case 3:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function destroyCountry(_x14) {
      return _ref15.apply(this, arguments);
    };
  }();

  var trendingDestinations = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var response;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/trending-destinations");

            case 2:
              response = _context16.sent;
              return _context16.abrupt("return", response.data);

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    return function trendingDestinations() {
      return _ref16.apply(this, arguments);
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
    trendingDestinations: trendingDestinations,
    duplicateCountry: duplicateCountry
  };
}

/***/ }),

/***/ "./resources/js/composables/packages.js":
/*!**********************************************!*\
  !*** ./resources/js/composables/packages.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePackages)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function usePackages() {
  var packages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var single_package = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
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

  var getPackages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/packages?page=".concat(page));

            case 2:
              response = _context.sent;
              packages.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getPackages(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getAllPacks = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/all-packs?page=".concat(page));

            case 2:
              response = _context2.sent;
              packages.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getAllPacks(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getFilteredPacks = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(filter) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/filtered-packs?d=".concat(JSON.stringify(filter.destinations), "&c=").concat(JSON.stringify(filter.categories), "&page=").concat(filter.page));

            case 2:
              response = _context3.sent;
              packages.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getFilteredPacks(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getDestinationPacks = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(page, destination) {
      var subdestination,
          response,
          _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              subdestination = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : null;
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/destination-packs?page=".concat(page, "&destination=").concat(destination, "&subdestination=").concat(subdestination));

            case 3:
              response = _context4.sent;
              packages.value = response.data.data;
              pages.value = response.data.meta;
              alter_pages.value['current_page'] = response.data['current_page'];
              alter_pages.value['last_page'] = response.data['last_page'];
              alter_pages.value['from'] = response.data['from'];
              alter_pages.value['links'] = response.data['links'];
              alter_pages.value['to'] = response.data['to'];
              alter_pages.value['total'] = response.data['total'];
              alter_pages.value['path'] = response.data['path'];

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getDestinationPacks(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getPackage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/packages/" + id);

            case 2:
              response = _context5.sent;
              single_package.value = response.data.data;
              single_package.value['banner_highlights'] = JSON.parse(single_package.value['banner_highlights']);
              single_package.value['options'] = JSON.parse(single_package.value['options']);
              single_package.value['itinerary'] = JSON.parse(single_package.value['itinerary']);
              single_package.value['category_ids'] = JSON.parse(single_package.value['category_ids']);
              single_package.value['destination_ids'] = JSON.parse(single_package.value['destination_ids']);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getPackage(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  var getPackageDetails = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(slug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/single_package/" + slug);

            case 2:
              response = _context6.sent;
              single_package.value = response.data.data;
              single_package.value['banner_highlights'] = JSON.parse(single_package.value['banner_highlights']);
              single_package.value['options'] = JSON.parse(single_package.value['options']);
              single_package.value['itinerary'] = JSON.parse(single_package.value['itinerary']);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getPackageDetails(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  var storePackage = /*#__PURE__*/function () {
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
              fd.append("package_img", data.form.image);
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
              fd.append("terms_and_conditions_en", data.form.terms_and_conditions_en);
              fd.append("terms_and_conditions_ar", data.form.terms_and_conditions_ar);
              fd.append("banner_highlights", JSON.stringify(data.form.banner_highlights));
              fd.append("options", JSON.stringify(data.form.options));
              fd.append("itinerary", JSON.stringify(data.form.itinerary));
              fd.append("is_from", data.form.is_from);
              fd.append("image", data.file);
              fd.append("properties", JSON.stringify(data.properties));
              errors.value = "";
              _context7.prev = 37;
              _context7.next = 40;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/packages", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {
                  percentage.value = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                }
              });

            case 40:
              _context7.next = 42;
              return router.push({
                name: "packages.index"
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

    return function storePackage(_x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  var updatePackage = /*#__PURE__*/function () {
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
              fd.append("terms_and_conditions_en", data.form.terms_and_conditions_en);
              fd.append("terms_and_conditions_ar", data.form.terms_and_conditions_ar);
              fd.append("is_from", data.form.is_from);
              fd.append("banner_highlights", JSON.stringify(data.form.banner_highlights));
              fd.append("options", JSON.stringify(data.form.options));
              fd.append("package_img", data.form.thumbnail);
              fd.append("new_image", data.file);
              fd.append("properties", JSON.stringify(data.properties));
              errors.value = "";
              _context8.prev = 38;
              _context8.next = 41;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/packages/" + id, fd, {
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
                name: "packages.index"
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

    return function updatePackage(_x9, _x10) {
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

    return function deleteProperty(_x11) {
      return _ref9.apply(this, arguments);
    };
  }();

  var destroyPackage = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/packages/" + id);

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function destroyPackage(_x12) {
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

    return function addGallery(_x13) {
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

    return function addFiles(_x14) {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/delete-package-image/" + id);

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function destroyImage(_x15) {
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

    return function destroyFile(_x16) {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/single_package/duplicate/" + id);

            case 2:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function duplicate(_x17) {
      return _ref15.apply(this, arguments);
    };
  }();

  return {
    packages: packages,
    duplicate: duplicate,
    single_package: single_package,
    errors: errors,
    getPackages: getPackages,
    getPackage: getPackage,
    storePackage: storePackage,
    updatePackage: updatePackage,
    destroyPackage: destroyPackage,
    deleteProperty: deleteProperty,
    addGallery: addGallery,
    addFiles: addFiles,
    getPackageDetails: getPackageDetails,
    destroyImage: destroyImage,
    destroyFile: destroyFile,
    percentage: percentage,
    pages: pages,
    getAllPacks: getAllPacks,
    getDestinationPacks: getDestinationPacks,
    getFilteredPacks: getFilteredPacks
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-69bb59a3] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #f7fafc;\r\n  border: 0.5px solid #a3a8b1;\r\n  border-radius: 10px;\r\n  padding: 30px;\r\n  position: relative;\n}\n.drop[data-v-69bb59a3] {\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  background-color: #f4f6ff;\r\n  left: 0;\r\n  border: 3px dashed #a3a8b1;\n}\n.error[data-v-69bb59a3] {\r\n  text-align: center;\r\n  color: red;\r\n  font-size: 15px;\n}\n.beforeUpload[data-v-69bb59a3] {\r\n  position: relative;\r\n  text-align: center;\n}\n.beforeUpload input[data-v-69bb59a3] {\r\n  width: 100%;\r\n  margin: auto;\r\n  height: 100%;\r\n  opacity: 0;\r\n  position: absolute;\r\n  background: red;\r\n  display: block;\n}\n.beforeUpload input[data-v-69bb59a3]:hover {\r\n  cursor: pointer;\n}\n.beforeUpload .icon[data-v-69bb59a3] {\r\n  width: 150px;\r\n  margin: auto;\r\n  display: block;\n}\n.imgsPreview .imageHolder[data-v-69bb59a3] {\r\n  width: 150px;\r\n  height: 150px;\r\n  background: #fff;\r\n  position: relative;\r\n  border-radius: 10px;\r\n  margin: 5px 5px;\r\n  display: inline-block;\n}\n.imgsPreview .imageHolder img[data-v-69bb59a3] {\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width: 100%;\r\n  height: 100%;\n}\n.imgsPreview .imageHolder .delete[data-v-69bb59a3] {\r\n  position: absolute;\r\n  top: 4px;\r\n  right: 4px;\r\n  width: 29px;\r\n  height: 29px;\r\n  color: #fff;\r\n  background: red;\r\n  border-radius: 50%;\n}\n.imgsPreview .imageHolder .delete[data-v-69bb59a3]:hover {\r\n  cursor: pointer;\n}\n.imgsPreview .imageHolder .delete .icon[data-v-69bb59a3] {\r\n  width: 66%;\r\n  height: 66%;\r\n  display: block;\r\n  margin: 4px auto;\n}\n.imgsPreview .imageHolder .plus[data-v-69bb59a3] {\r\n  color: #2d3748;\r\n  background: #f7fafc;\r\n  border-radius: 50%;\r\n  font-size: 21pt;\r\n  height: 30px;\r\n  width: 30px;\r\n  text-align: center;\r\n  border: 1px dashed;\r\n  line-height: 23px;\r\n  position: absolute;\r\n  right: -42px;\r\n  bottom: 43%;\n}\n.plus[data-v-69bb59a3]:hover {\r\n  cursor: pointer;\n}\n.clearButton[data-v-69bb59a3] {\r\n  color: #2d3748;\r\n  position: absolute;\r\n  top: 7px;\r\n  right: 7px;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#myInput {\n  border-color: rgb(75, 85, 99) !important;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_style_index_0_id_69bb59a3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_style_index_0_id_69bb59a3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_style_index_0_id_69bb59a3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_style_index_0_id_5ae6f544_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_style_index_0_id_5ae6f544_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_style_index_0_id_5ae6f544_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue":
/*!*****************************************************************************!*\
  !*** ./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_upload_drop_images_vue_vue_type_template_id_69bb59a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true */ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true");
/* harmony import */ var _vue_upload_drop_images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-upload-drop-images.vue?vue&type=script&lang=js */ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_upload_drop_images_vue_vue_type_style_index_0_id_69bb59a3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css */ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_vue_upload_drop_images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_vue_upload_drop_images_vue_vue_type_template_id_69bb59a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-69bb59a3"],['__file',"node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VueUploadImages", // vue component name
  data() {
    return {
      error: "",
      files: [],
      dropped: 0,
      Imgs: [],
    };
  },
  props: {
    max: Number,
    uploadMsg: String,
    maxError: String,
    fileError: String,
    clearAll: String,
  },
  methods: {
    dragOver() {
      this.dropped = 2;
    },
    dragLeave() {},
    drop(e) {
      let status = true;
      let files = Array.from(e.dataTransfer.files)
      if (e && files) {
        files.forEach((file) => {
          if (file.type.startsWith("image") === false) status = false;
        });
        if (status == true) {
          if (
            this.$props.max &&
            files.length + this.files.length > this.$props.max
          ) {
            this.error = this.$props.maxError
              ? this.$props.maxError
              : `Maximum files is` + this.$props.max;
          } else {
            this.files.push(...files);
            this.previewImgs();
          }
        } else {
          this.error = this.$props.fileError
            ? this.$props.fileError
            : `Unsupported file type`;
        }
      }
      this.dropped = 0;
    },
    append() {
      this.$refs.uploadInput.click();
    },
    readAsDataURL(file) {
      return new Promise(function (resolve, reject) {
        let fr = new FileReader();
        fr.onload = function () {
          resolve(fr.result);
        };
        fr.onerror = function () {
          reject(fr);
        };
        fr.readAsDataURL(file);
      });
    },
    deleteImg(index) {
      this.Imgs.splice(index, 1);
      this.files.splice(index, 1);
      this.$emit("changed", this.files);
      this.$refs.uploadInput.value = null;
    },
    previewImgs(event) {
      if (
        this.$props.max &&
        event &&
        event.currentTarget.files.length + this.files.length > this.$props.max
      ) {
        this.error = this.$props.maxError
          ? this.$props.maxError
          : `Maximum files is` + this.$props.max;
        return;
      }
      if (this.dropped == 0) this.files.push(...event.currentTarget.files);
      this.error = "";
      this.$emit("changed", this.files);
      let readers = [];
      if (!this.files.length) return;
      for (let i = 0; i < this.files.length; i++) {
        readers.push(this.readAsDataURL(this.files[i]));
      }
      Promise.all(readers).then((values) => {
        this.Imgs = values;
      });
    },
    reset() {
      this.$refs.uploadInput.value = null;
      this.Imgs = [];
      this.files = [];
      this.$emit("changed", this.files);
    },
  },
});


/***/ }),

/***/ "./resources/js/components/ProgressBar.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_d4a6a2ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=d4a6a2ea */ "./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea");
/* harmony import */ var _ProgressBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/ProgressBar.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProgressBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProgressBar_vue_vue_type_template_id_d4a6a2ea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ProgressBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/SearchableDropdown.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/SearchableDropdown.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchableDropdown_vue_vue_type_template_id_5ae6f544__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchableDropdown.vue?vue&type=template&id=5ae6f544 */ "./resources/js/components/SearchableDropdown.vue?vue&type=template&id=5ae6f544");
/* harmony import */ var _SearchableDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchableDropdown.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/SearchableDropdown.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _SearchableDropdown_vue_vue_type_style_index_0_id_5ae6f544_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css */ "./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_SearchableDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SearchableDropdown_vue_vue_type_template_id_5ae6f544__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/SearchableDropdown.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/backend/packages/PackageCreate.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/backend/packages/PackageCreate.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PackageCreate_vue_vue_type_template_id_4ab46f24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PackageCreate.vue?vue&type=template&id=4ab46f24 */ "./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=template&id=4ab46f24");
/* harmony import */ var _PackageCreate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageCreate.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PackageCreate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PackageCreate_vue_vue_type_template_id_4ab46f24__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/backend/packages/PackageCreate.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressBar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProgressBar.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProgressBar.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/SearchableDropdown.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/SearchableDropdown.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchableDropdown.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PackageCreate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PackageCreate_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PackageCreate.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressBar_vue_vue_type_template_id_d4a6a2ea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProgressBar_vue_vue_type_template_id_d4a6a2ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProgressBar.vue?vue&type=template&id=d4a6a2ea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea");


/***/ }),

/***/ "./resources/js/components/SearchableDropdown.vue?vue&type=template&id=5ae6f544":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/SearchableDropdown.vue?vue&type=template&id=5ae6f544 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_template_id_5ae6f544__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_template_id_5ae6f544__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchableDropdown.vue?vue&type=template&id=5ae6f544 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=template&id=5ae6f544");


/***/ }),

/***/ "./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=template&id=4ab46f24":
/*!*********************************************************************************************!*\
  !*** ./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=template&id=4ab46f24 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PackageCreate_vue_vue_type_template_id_4ab46f24__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PackageCreate_vue_vue_type_template_id_4ab46f24__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PackageCreate.vue?vue&type=template&id=4ab46f24 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/backend/packages/PackageCreate.vue?vue&type=template&id=4ab46f24");


/***/ }),

/***/ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_style_index_0_id_69bb59a3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=style&index=0&id=69bb59a3&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SearchableDropdown_vue_vue_type_style_index_0_id_5ae6f544_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/SearchableDropdown.vue?vue&type=style&index=0&id=5ae6f544&lang=css");


/***/ }),

/***/ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./vue-upload-drop-images.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_template_id_69bb59a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_vue_upload_drop_images_vue_vue_type_template_id_69bb59a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue?vue&type=template&id=69bb59a3&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-69bb59a3"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "drop" }
const _hoisted_2 = { class: "beforeUpload" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" data-v-69bb59a3><title data-v-69bb59a3>Upload Image</title><g id=\"Upload_Image\" data-name=\"Upload Image\" data-v-69bb59a3><g id=\"_Group_\" data-name=\"&lt;Group&gt;\" data-v-69bb59a3><g id=\"_Group_2\" data-name=\"&lt;Group&gt;\" data-v-69bb59a3><g id=\"_Group_3\" data-name=\"&lt;Group&gt;\" data-v-69bb59a3><circle id=\"_Path_\" data-name=\"&lt;Path&gt;\" cx=\"18.5\" cy=\"16.5\" r=\"5\" style=\"fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round;\" data-v-69bb59a3></circle></g><polyline id=\"_Path_2\" data-name=\"&lt;Path&gt;\" points=\"16.5 15.5 18.5 13.5 20.5 15.5\" style=\"fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round;\" data-v-69bb59a3></polyline><line id=\"_Path_3\" data-name=\"&lt;Path&gt;\" x1=\"18.5\" y1=\"13.5\" x2=\"18.5\" y2=\"19.5\" style=\"fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round;\" data-v-69bb59a3></line></g><g id=\"_Group_4\" data-name=\"&lt;Group&gt;\" data-v-69bb59a3><polyline id=\"_Path_4\" data-name=\"&lt;Path&gt;\" points=\"0.6 15.42 6 10.02 8.98 13\" style=\"fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round;\" data-v-69bb59a3></polyline><polyline id=\"_Path_5\" data-name=\"&lt;Path&gt;\" points=\"17.16 11.68 12.5 7.02 7.77 11.79\" style=\"fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round;\" data-v-69bb59a3></polyline><circle id=\"_Path_6\" data-name=\"&lt;Path&gt;\" cx=\"8\" cy=\"6.02\" r=\"1.5\" style=\"fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round;\" data-v-69bb59a3></circle><path id=\"_Path_7\" data-name=\"&lt;Path&gt;\" d=\"M19.5,11.6V4A1.5,1.5,0,0,0,18,2.5H2A1.5,1.5,0,0,0,.5,4V15A1.5,1.5,0,0,0,2,16.5H13.5\" style=\"fill:none;stroke:#303c42;stroke-linecap:round;stroke-linejoin:round;\" data-v-69bb59a3></path></g></g></g></svg>", 1)
const _hoisted_4 = { class: "mainMessage" }
const _hoisted_5 = { class: "imgsPreview" }
const _hoisted_6 = ["src"]
const _hoisted_7 = ["onClick"]
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  class: "icon",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })
], -1 /* HOISTED */))
const _hoisted_9 = [
  _hoisted_8
]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "container",
    onDragover: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.dragOver && $options.dragOver(...args)), ["prevent"])),
    onDragleave: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.dragLeave && $options.dragLeave(...args)), ["prevent"])),
    onDrop: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.drop($event)), ["prevent"]))
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, null, 512 /* NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.dropped == 2]
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Error Message "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "error" }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.error), 513 /* TEXT, NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.error]
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" To inform user how to upload image "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        style: {"z-index":"1"},
        accept: "image/*",
        ref: "uploadInput",
        onChange: _cache[0] || (_cache[0] = (...args) => ($options.previewImgs && $options.previewImgs(...args))),
        multiple: ""
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */),
      _hoisted_3,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.uploadMsg ? $props.uploadMsg : "Click to upload or drop your images here"), 1 /* TEXT */)
    ], 512 /* NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.Imgs.length == 0]
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        class: "clearButton",
        onClick: _cache[1] || (_cache[1] = (...args) => ($options.reset && $options.reset(...args)))
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.clearAll ? $props.clearAll : "clear All"), 1 /* TEXT */),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.Imgs, (img, i) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          class: "imageHolder",
          key: i
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", { src: img }, null, 8 /* PROPS */, _hoisted_6),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            class: "delete",
            style: {"color":"white"},
            onClick: $event => ($options.deleteImg(--i))
          }, _hoisted_9, 8 /* PROPS */, _hoisted_7),
          (++i == $data.Imgs.length)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                class: "plus",
                onClick: _cache[2] || (_cache[2] = (...args) => ($options.append && $options.append(...args)))
              }, "+"))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 512 /* NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.Imgs.length > 0]
    ])
  ], 32 /* HYDRATE_EVENTS */))
}

/***/ })

}]);