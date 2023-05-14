"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_frontend_visas_PassportVisa_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BaseSection.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BaseSection.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'BaseSection',
  props: {
    section_description: String,
    section_title: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("lang") || "en";
    var __returned__ = {
      props: props,

      get lang() {
        return lang;
      },

      set lang(v) {
        lang = v;
      },

      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../composables/general */ "./resources/js/composables/general.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Inquire',
  props: {
    type: String,
    item_name: String,
    url: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;

    var _useGeneral = (0,_composables_general__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        inquire = _useGeneral.inquire;

    var is_sending = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var inquiry_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      name: "",
      phone: "",
      message: "",
      email: "",
      url: props.url,
      type: props.type,
      item_name: props.item_name
    });

    var sendInquiry = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                is_sending.value = true;
                _context.next = 3;
                return inquire(inquiry_form.value);

              case 3:
                res = _context.sent;
                inquiry_form.value = {
                  name: "",
                  phone: "",
                  message: "",
                  email: "",
                  url: props.url,
                  type: props.type,
                  item_name: props.item_name
                };
                is_sending.value = res.status ? false : true;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function sendInquiry() {
        return _ref2.apply(this, arguments);
      };
    }();

    var __returned__ = {
      inquire: inquire,
      props: props,

      get is_sending() {
        return is_sending;
      },

      set is_sending(v) {
        is_sending = v;
      },

      get inquiry_form() {
        return inquiry_form;
      },

      set inquiry_form(v) {
        inquiry_form = v;
      },

      sendInquiry: sendInquiry,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,

      get useGeneral() {
        return _composables_general__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ListSection.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ListSection.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ListSection',
  props: {
    section_list: String,
    section_title: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("lang") || "en";
    var __returned__ = {
      props: props,

      get lang() {
        return lang;
      },

      set lang(v) {
        lang = v;
      },

      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _composables_visas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../composables/visas */ "./resources/js/composables/visas.js");
/* harmony import */ var _components_ListSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ListSection.vue */ "./resources/js/components/ListSection.vue");
/* harmony import */ var _components_BaseSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/BaseSection.vue */ "./resources/js/components/BaseSection.vue");
/* harmony import */ var _components_Inquire_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Inquire.vue */ "./resources/js/components/Inquire.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../router */ "./resources/js/router/index.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PassportVisa',
  props: {
    passport: String,
    visa: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;

    var _useVisas = (0,_composables_visas__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        getVisaDetails = _useVisas.getVisaDetails,
        visa = _useVisas.visa;

    var url = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.ref)((0,vue_router__WEBPACK_IMPORTED_MODULE_6__.useRoute)());
    var visa_options = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.ref)([]);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_7__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getVisaDetails(props.visa);

            case 2:
              visa.value.options.forEach(function (element) {
                visa_options.value.push({
                  visa_type: element["visa_type_" + lang] + " (Adults)",
                  price: element["adult_price"]
                });
                visa_options.value.push({
                  visa_type: element["visa_type_" + lang] + " (Children)",
                  price: element["child_price"]
                });
              });
              application_form.value["visa_type"] = visa_options.value[0]["visa_type"];
              console.log(application_form.value);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    var application_form = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.ref)({
      country: "Iraq",
      visa_type: ""
    });
    var lang = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_7__.inject)("lang") || "en";

    var proceedToApply = function proceedToApply() {
      _router__WEBPACK_IMPORTED_MODULE_4__["default"].push({
        path: "".concat(props.visa, "/proceed-to-apply"),
        query: application_form.value
      });
    };

    var __returned__ = {
      getVisaDetails: getVisaDetails,
      visa: visa,
      props: props,
      url: url,

      get visa_options() {
        return visa_options;
      },

      set visa_options(v) {
        visa_options = v;
      },

      get application_form() {
        return application_form;
      },

      set application_form(v) {
        application_form = v;
      },

      get lang() {
        return lang;
      },

      set lang(v) {
        lang = v;
      },

      proceedToApply: proceedToApply,

      get onMounted() {
        return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_7__.onMounted;
      },

      get inject() {
        return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_7__.inject;
      },

      get ref() {
        return _vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.ref;
      },

      get useVisas() {
        return _composables_visas__WEBPACK_IMPORTED_MODULE_0__["default"];
      },

      ListSection: _components_ListSection_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      BaseSection: _components_BaseSection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      Inquire: _components_Inquire_vue__WEBPACK_IMPORTED_MODULE_3__["default"],

      get router() {
        return _router__WEBPACK_IMPORTED_MODULE_4__["default"];
      },

      get useRoute() {
        return vue_router__WEBPACK_IMPORTED_MODULE_6__.useRoute;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BaseSection.vue?vue&type=template&id=cd7b388e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BaseSection.vue?vue&type=template&id=cd7b388e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-2"
};
var _hoisted_2 = {
  "class": "text-main-indigo font-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t($props.section_title)), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.section_description.split('\n'), function (p) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", {
      key: p,
      "class": "text-lg"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(p), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=template&id=47a5a198&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=template&id=47a5a198&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-47a5a198"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "mx-auto w-full max-w-[550px]"
};
var _hoisted_2 = ["onSubmit"];
var _hoisted_3 = ["placeholder"];
var _hoisted_4 = ["placeholder"];
var _hoisted_5 = ["placeholder"];
var _hoisted_6 = ["placeholder"];
var _hoisted_7 = {
  key: 0,
  type: "submit",
  "class": "hover:shadow-form rounded-full bg-main-orange h-10 w-full text-base font-semibold text-white outline-none"
};
var _hoisted_8 = {
  key: 1,
  type: "button",
  "class": "hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-full text-base font-semibold text-white outline-none cursor-not-allowed"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"animation\" data-v-47a5a198><div class=\"box\" id=\"box1\" data-v-47a5a198></div><div class=\"box\" id=\"box2\" data-v-47a5a198></div><div class=\"box\" id=\"box3\" data-v-47a5a198></div><div class=\"box\" id=\"box4\" data-v-47a5a198></div></div>", 1);

var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" component "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "space-y-2",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.sendInquiry, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "name",
    id: "name",
    "class": "block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500",
    placeholder: _ctx.$t('your_name') + '*',
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.inquiry_form.name = $event;
    }),
    required: ""
  }, null, 8
  /* PROPS */
  , _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.inquiry_form.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "tel",
    id: "phone",
    "class": "block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500",
    placeholder: _ctx.$t('your_phone') + '*',
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.inquiry_form.phone = $event;
    }),
    required: ""
  }, null, 8
  /* PROPS */
  , _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.inquiry_form.phone]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    id: "email",
    "class": "block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500",
    placeholder: _ctx.$t('your_email') + '*',
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.inquiry_form.email = $event;
    }),
    required: ""
  }, null, 8
  /* PROPS */
  , _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.inquiry_form.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "message",
    "class": "block w-full border border-gray-300 rounded-full p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500",
    placeholder: _ctx.$t('your_message') + '*',
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.inquiry_form.message = $event;
    }),
    required: ""
  }, null, 8
  /* PROPS */
  , _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.inquiry_form.message]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [!$setup.is_sending ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("inquire_now")), 1
  /* TEXT */
  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_8, _hoisted_10))])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_2)])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ListSection.vue?vue&type=template&id=c3a8f068":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ListSection.vue?vue&type=template&id=c3a8f068 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-main-indigo font-bold px-2"
};
var _hoisted_2 = {
  style: {
    "list-style-image": "url('/images/tour-o.svg')"
  },
  "class": "text-black px-10 text-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t($props.section_title)), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.section_list.split('\n--'), function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=template&id=5e076418":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=template&id=5e076418 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": ""
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative overflow-hidden w-full block md:flex items-center bg-no-repeat bg-cover bg-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/visa_application_banner.jpg",
  alt: "Visa Application",
  "class": "w-full"
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "px-2 sm:px-4 xl:px-0 md:flex w-full max-w-6xl mx-auto my-10 justify-between space-x-0 sm:space-x-2"
};
var _hoisted_4 = {
  "class": "w-full md:w-3/4 rounded p-2"
};
var _hoisted_5 = {
  "class": "relative overflow-x-auto shadow-md sm:rounded-lg mt-4"
};
var _hoisted_6 = {
  "class": "text-main-indigo font-bold"
};
var _hoisted_7 = {
  "class": "w-full text-xs text-left text-gray-500"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "text-xs text-gray-700 uppercase bg-main-orange"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, " No. of Entries "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, " en Validity "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, " En Processing Time "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, " Adult Price "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  "class": "px-6 py-3"
}, " Child Price ")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  scope: "row",
  "class": "px-6 py-4"
};
var _hoisted_10 = {
  "class": "px-6 py-4"
};
var _hoisted_11 = {
  "class": "px-6 py-4"
};
var _hoisted_12 = {
  "class": "px-6 py-4"
};
var _hoisted_13 = {
  "class": "px-6 py-4"
};
var _hoisted_14 = {
  "class": "px-6 py-4"
};
var _hoisted_15 = {
  "class": "w-full md:w-1/4 mx-auto"
};
var _hoisted_16 = {
  "class": ""
};
var _hoisted_17 = {
  "class": "border-2 border-gray-500"
};
var _hoisted_18 = {
  "class": "border-b-2 border-gray-500 bg-main-blue py-2 text-center text-xl text-white"
};
var _hoisted_19 = {
  "class": "p-3"
};
var _hoisted_20 = {
  "class": "mt-1"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_en",
  "class": "block text-sm text-gray-800 font-bold"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Country of Residence "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-red-500"
}, "*")], -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "mt-1"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"Afghanistan\"> Afghanistan </option><option value=\"Albania\"> Albania </option><option value=\"Algeria\"> Algeria </option><option value=\"American Samoa\"> American Samoa </option><option value=\"Andorra\"> Andorra </option><option value=\"Angola\"> Angola </option><option value=\"Anguilla\"> Anguilla </option><option value=\"Antartica\"> Antarctica </option><option value=\"Antigua and Barbuda\"> Antigua and Barbuda </option><option value=\"Argentina\"> Argentina </option><option value=\"Armenia\"> Armenia </option><option value=\"Aruba\">Aruba</option><option value=\"Australia\"> Australia </option><option value=\"Austria\"> Austria </option><option value=\"Azerbaijan\"> Azerbaijan </option><option value=\"Bahamas\"> Bahamas </option><option value=\"Bahrain\"> Bahrain </option><option value=\"Bangladesh\"> Bangladesh </option><option value=\"Barbados\"> Barbados </option><option value=\"Belarus\"> Belarus </option><option value=\"Belgium\"> Belgium </option><option value=\"Belize\"> Belize </option><option value=\"Benin\">Benin</option><option value=\"Bermuda\"> Bermuda </option><option value=\"Bhutan\"> Bhutan </option><option value=\"Bolivia\"> Bolivia </option><option value=\"Bosnia and Herzegowina\"> Bosnia and Herzegowina </option><option value=\"Botswana\"> Botswana </option><option value=\"Bouvet Island\"> Bouvet Island </option><option value=\"Brazil\"> Brazil </option><option value=\"British Indian Ocean Territory\"> British Indian Ocean Territory </option><option value=\"Brunei Darussalam\"> Brunei Darussalam </option><option value=\"Bulgaria\"> Bulgaria </option><option value=\"Burkina Faso\"> Burkina Faso </option><option value=\"Burundi\"> Burundi </option><option value=\"Cambodia\"> Cambodia </option><option value=\"Cameroon\"> Cameroon </option><option value=\"Canada\"> Canada </option><option value=\"Cape Verde\"> Cape Verde </option><option value=\"Cayman Islands\"> Cayman Islands </option><option value=\"Central African Republic\"> Central African Republic </option><option value=\"Chad\">Chad</option><option value=\"Chile\">Chile</option><option value=\"China\">China</option><option value=\"Christmas Island\"> Christmas Island </option><option value=\"Cocos Islands\"> Cocos (Keeling) Islands </option><option value=\"Colombia\"> Colombia </option><option value=\"Comoros\"> Comoros </option><option value=\"Congo\">Congo</option><option value=\"Congo\"> Congo, the Democratic Republic of the </option><option value=\"Cook Islands\"> Cook Islands </option><option value=\"Costa Rica\"> Costa Rica </option><option value=\"Cota D&#39;Ivoire\"> Cote d&#39;Ivoire </option><option value=\"Croatia\"> Croatia (Hrvatska) </option><option value=\"Cuba\">Cuba</option><option value=\"Cyprus\"> Cyprus </option><option value=\"Czech Republic\"> Czech Republic </option><option value=\"Denmark\"> Denmark </option><option value=\"Djibouti\"> Djibouti </option><option value=\"Dominica\"> Dominica </option><option value=\"Dominican Republic\"> Dominican Republic </option><option value=\"East Timor\"> East Timor </option><option value=\"Ecuador\"> Ecuador </option><option value=\"Egypt\">Egypt</option><option value=\"El Salvador\"> El Salvador </option><option value=\"Equatorial Guinea\"> Equatorial Guinea </option><option value=\"Eritrea\"> Eritrea </option><option value=\"Estonia\"> Estonia </option><option value=\"Ethiopia\"> Ethiopia </option><option value=\"Falkland Islands\"> Falkland Islands (Malvinas) </option><option value=\"Faroe Islands\"> Faroe Islands </option><option value=\"Fiji\">Fiji</option><option value=\"Finland\"> Finland </option><option value=\"France\"> France </option><option value=\"France Metropolitan\"> France, Metropolitan </option><option value=\"French Guiana\"> French Guiana </option><option value=\"French Polynesia\"> French Polynesia </option><option value=\"French Southern Territories\"> French Southern Territories </option><option value=\"Gabon\">Gabon</option><option value=\"Gambia\"> Gambia </option><option value=\"Georgia\"> Georgia </option><option value=\"Germany\"> Germany </option><option value=\"Ghana\">Ghana</option><option value=\"Gibraltar\"> Gibraltar </option><option value=\"Greece\"> Greece </option><option value=\"Greenland\"> Greenland </option><option value=\"Grenada\"> Grenada </option><option value=\"Guadeloupe\"> Guadeloupe </option><option value=\"Guam\">Guam</option><option value=\"Guatemala\"> Guatemala </option><option value=\"Guinea\"> Guinea </option><option value=\"Guinea-Bissau\"> Guinea-Bissau </option><option value=\"Guyana\"> Guyana </option><option value=\"Haiti\">Haiti</option><option value=\"Heard and McDonald Islands\"> Heard and Mc Donald Islands </option><option value=\"Holy See\"> Holy See (Vatican City State) </option><option value=\"Honduras\"> Honduras </option><option value=\"Hong Kong\"> Hong Kong </option><option value=\"Hungary\"> Hungary </option><option value=\"Iceland\"> Iceland </option><option value=\"India\">India</option><option value=\"Indonesia\"> Indonesia </option><option value=\"Iran\"> Iran (Islamic Republic of) </option><option value=\"Iraq\">Iraq</option><option value=\"Ireland\"> Ireland </option><option value=\"Israel\"> Israel </option><option value=\"Italy\">Italy</option><option value=\"Jamaica\"> Jamaica </option><option value=\"Japan\">Japan</option><option value=\"Jordan\"> Jordan </option><option value=\"Kazakhstan\"> Kazakhstan </option><option value=\"Kenya\">Kenya</option><option value=\"Kiribati\"> Kiribati </option><option value=\"Democratic People&#39;s Republic of Korea\"> Korea, Democratic People&#39;s Republic of </option><option value=\"Korea\"> Korea, Republic of </option><option value=\"Kuwait\"> Kuwait </option><option value=\"Kyrgyzstan\"> Kyrgyzstan </option><option value=\"Lao\"> Lao People&#39;s Democratic Republic </option><option value=\"Latvia\"> Latvia </option><option value=\"Lebanon\"> Lebanon </option><option value=\"Lesotho\"> Lesotho </option><option value=\"Liberia\"> Liberia </option><option value=\"Libyan Arab Jamahiriya\"> Libyan Arab Jamahiriya </option><option value=\"Liechtenstein\"> Liechtenstein </option><option value=\"Lithuania\"> Lithuania </option><option value=\"Luxembourg\"> Luxembourg </option><option value=\"Macau\">Macau</option><option value=\"Macedonia\"> Macedonia, The Former Yugoslav Republic of </option><option value=\"Madagascar\"> Madagascar </option><option value=\"Malawi\"> Malawi </option><option value=\"Malaysia\"> Malaysia </option><option value=\"Maldives\"> Maldives </option><option value=\"Mali\">Mali</option><option value=\"Malta\">Malta</option><option value=\"Marshall Islands\"> Marshall Islands </option><option value=\"Martinique\"> Martinique </option><option value=\"Mauritania\"> Mauritania </option><option value=\"Mauritius\"> Mauritius </option><option value=\"Mayotte\"> Mayotte </option><option value=\"Mexico\"> Mexico </option><option value=\"Micronesia\"> Micronesia, Federated States of </option><option value=\"Moldova\"> Moldova, Republic of </option><option value=\"Monaco\"> Monaco </option><option value=\"Mongolia\"> Mongolia </option><option value=\"Montserrat\"> Montserrat </option><option value=\"Morocco\"> Morocco </option><option value=\"Mozambique\"> Mozambique </option><option value=\"Myanmar\"> Myanmar </option><option value=\"Namibia\"> Namibia </option><option value=\"Nauru\">Nauru</option><option value=\"Nepal\">Nepal</option><option value=\"Netherlands\"> Netherlands </option><option value=\"Netherlands Antilles\"> Netherlands Antilles </option><option value=\"New Caledonia\"> New Caledonia </option><option value=\"New Zealand\"> New Zealand </option><option value=\"Nicaragua\"> Nicaragua </option><option value=\"Niger\">Niger</option><option value=\"Nigeria\"> Nigeria </option><option value=\"Niue\">Niue</option><option value=\"Norfolk Island\"> Norfolk Island </option><option value=\"Northern Mariana Islands\"> Northern Mariana Islands </option><option value=\"Norway\"> Norway </option><option value=\"Oman\">Oman</option><option value=\"Pakistan\"> Pakistan </option><option value=\"Palau\">Palau</option><option value=\"Panama\"> Panama </option><option value=\"Papua New Guinea\"> Papua New Guinea </option><option value=\"Paraguay\"> Paraguay </option><option value=\"Peru\">Peru</option><option value=\"Philippines\"> Philippines </option><option value=\"Pitcairn\"> Pitcairn </option><option value=\"Poland\"> Poland </option><option value=\"Portugal\"> Portugal </option><option value=\"Puerto Rico\"> Puerto Rico </option><option value=\"Qatar\">Qatar</option><option value=\"Reunion\"> Reunion </option><option value=\"Romania\"> Romania </option><option value=\"Russia\"> Russian Federation </option><option value=\"Rwanda\"> Rwanda </option><option value=\"Saint Kitts and Nevis\"> Saint Kitts and Nevis </option><option value=\"Saint LUCIA\"> Saint LUCIA </option><option value=\"Saint Vincent\"> Saint Vincent and the Grenadines </option><option value=\"Samoa\">Samoa</option><option value=\"San Marino\"> San Marino </option><option value=\"Sao Tome and Principe\"> Sao Tome and Principe </option><option value=\"Saudi Arabia\"> Saudi Arabia </option><option value=\"Senegal\"> Senegal </option><option value=\"Seychelles\"> Seychelles </option><option value=\"Sierra\"> Sierra Leone </option><option value=\"Singapore\"> Singapore </option><option value=\"Slovakia\"> Slovakia (Slovak Republic) </option><option value=\"Slovenia\"> Slovenia </option><option value=\"Solomon Islands\"> Solomon Islands </option><option value=\"Somalia\"> Somalia </option><option value=\"South Africa\"> South Africa </option><option value=\"South Georgia\"> South Georgia and the South Sandwich Islands </option><option value=\"Span\">Spain</option><option value=\"SriLanka\"> Sri Lanka </option><option value=\"St. Helena\"> St. Helena </option><option value=\"St. Pierre and Miguelon\"> St. Pierre and Miquelon </option><option value=\"Sudan\">Sudan</option><option value=\"Suriname\"> Suriname </option><option value=\"Svalbard\"> Svalbard and Jan Mayen Islands </option><option value=\"Swaziland\"> Swaziland </option><option value=\"Sweden\"> Sweden </option><option value=\"Switzerland\"> Switzerland </option><option value=\"Syria\"> Syrian Arab Republic </option><option value=\"Taiwan\"> Taiwan, Province of China </option><option value=\"Tajikistan\"> Tajikistan </option><option value=\"Tanzania\"> Tanzania, United Republic of </option><option value=\"Thailand\"> Thailand </option><option value=\"Togo\">Togo</option><option value=\"Tokelau\"> Tokelau </option><option value=\"Tonga\">Tonga</option><option value=\"Trinidad and Tobago\"> Trinidad and Tobago </option><option value=\"Tunisia\"> Tunisia </option><option value=\"Turkey\"> Turkey </option><option value=\"Turkmenistan\"> Turkmenistan </option><option value=\"Turks and Caicos\"> Turks and Caicos Islands </option><option value=\"Tuvalu\"> Tuvalu </option><option value=\"Uganda\"> Uganda </option><option value=\"Ukraine\"> Ukraine </option><option value=\"United Arab Emirates\"> United Arab Emirates </option><option value=\"United Kingdom\"> United Kingdom </option><option value=\"United States\"> United States </option><option value=\"United States Minor Outlying Islands\"> United States Minor Outlying Islands </option><option value=\"Uruguay\"> Uruguay </option><option value=\"Uzbekistan\"> Uzbekistan </option><option value=\"Vanuatu\"> Vanuatu </option><option value=\"Venezuela\"> Venezuela </option><option value=\"Vietnam\"> Viet Nam </option><option value=\"Virgin Islands (British)\"> Virgin Islands (British) </option><option value=\"Virgin Islands (U.S)\"> Virgin Islands (U.S.) </option><option value=\"Wallis and Futana Islands\"> Wallis and Futuna Islands </option><option value=\"Western Sahara\"> Western Sahara </option><option value=\"Yemen\">Yemen</option><option value=\"Serbia\"> Serbia </option><option value=\"Zambia\"> Zambia </option><option value=\"Zimbabwe\"> Zimbabwe </option>", 239);

var _hoisted_262 = [_hoisted_23];
var _hoisted_263 = {
  "class": "w-full mt-1"
};

var _hoisted_264 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "title_en",
  "class": "block text-sm text-gray-800 font-bold"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Types of Visas "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-red-500"
}, "*")], -1
/* HOISTED */
);

var _hoisted_265 = {
  "class": "mt-1"
};
var _hoisted_266 = ["value"];
var _hoisted_267 = {
  type: "submit",
  "class": "bg-main-orange px-8 py-2 rounded-full text-white mt-4 w-full"
};
var _hoisted_268 = {
  "class": "border-2 border-gray-500 mt-4"
};
var _hoisted_269 = {
  "class": "border-b-2 border-gray-500 bg-main-blue py-2 text-center text-xl text-white"
};
var _hoisted_270 = {
  "class": "p-3"
};
var _hoisted_271 = ["href"];

var _hoisted_272 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/whatsapp.svg",
  alt: "whatsapp",
  "class": "h-6"
}, null, -1
/* HOISTED */
);

var _hoisted_273 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-28"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.visa['sections'], function (section) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: section
    }, [section.is_bullet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ListSection"], {
      key: 0,
      "class": "",
      section_list: section['section_text_' + $setup.lang],
      section_title: section['section_title_' + $setup.lang]
    }, null, 8
    /* PROPS */
    , ["section_list", "section_title"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BaseSection"], {
      key: 1,
      "class": "",
      section_description: section['section_text_' + $setup.lang],
      section_title: section['section_title_' + $setup.lang]
    }, null, 8
    /* PROPS */
    , ["section_description", "section_title"]))]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.visa["title_" + $setup.lang]), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.visa.options, function (option, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      "class": "border-b",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(option["visa_type_" + $setup.lang])), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(option.no_of_entries)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option["visa_validity_" + $setup.lang]), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option["processing_time_" + $setup.lang]), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.adult_price + "$"), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.child_price + "$"), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("apply_to_visa")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.proceedToApply();
    }, ["prevent"])),
    "class": ""
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.application_form.country = $event;
    }),
    "class": "w-full",
    required: ""
  }, _hoisted_262, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.application_form.country]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_263, [_hoisted_264, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_265, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "w-full",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.application_form.visa_type = $event;
    }),
    name: "",
    id: "",
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.visa_options, function (opt) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: opt,
      value: opt.visa_type
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt["visa_type"]), 9
    /* TEXT, PROPS */
    , _hoisted_266);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.application_form.visa_type]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_267, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("proceed_to_apply")), 1
  /* TEXT */
  )], 32
  /* HYDRATE_EVENTS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 1111111111111111111111111111111111 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_268, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_269, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("inquiry")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_270, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Inquire"], {
    type: "visa",
    item_name: $setup.visa.title_en,
    url: 'https://tourexpect.com' + $setup.url.path
  }, null, 8
  /* PROPS */
  , ["item_name", "url"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: 'https://wa.me/+9647509882000/?text=' + 'https://tourexpect.com' + $setup.router.currentRoute.value.fullPath + "\n I want to ask about this",
    target: "_blank",
    "class": "flex bg-green-400 text-white rounded-full items-center py-2 px-4 space-x-2 mx-auto mt-4"
  }, [_hoisted_272, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("whatsapp_text")), 1
  /* TEXT */
  )], 8
  /* PROPS */
  , _hoisted_271)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 "), _hoisted_273], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/composables/visas.js":
/*!*******************************************!*\
  !*** ./resources/js/composables/visas.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useVisas)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useVisas() {
  var visas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  var visa = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
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

  var getVisas = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/visas?page=".concat(page));

            case 2:
              response = _context.sent;
              visas.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getVisas(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getAllVisas = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/all-visas?page=".concat(page));

            case 2:
              response = _context2.sent;
              visas.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getAllVisas(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getFilteredVisas = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(filter) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/filtered-visas?d=".concat(JSON.stringify(filter.destinations), "&c=").concat(JSON.stringify(filter.categories), "&page=").concat(filter.page));

            case 2:
              response = _context3.sent;
              visas.value = response.data.data;
              pages.value = response.data.meta;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getFilteredVisas(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getDestinationVisas = /*#__PURE__*/function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/destination-visas?page=".concat(page, "&destination=").concat(destination, "&subdestination=").concat(subdestination));

            case 3:
              response = _context4.sent;
              visas.value = response.data.data;
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

    return function getDestinationVisas(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getVisa = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/visas/" + id);

            case 2:
              response = _context5.sent;
              visa.value = response.data.data;
              visa.value['sections'] = JSON.parse(visa.value['sections']);
              visa.value['options'] = JSON.parse(visa.value['options']);
              visa.value['country_passport_ids'] = JSON.parse(visa.value['country_passport_ids']);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getVisa(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  var getVisaDetails = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(slug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/visa/" + slug);

            case 2:
              response = _context6.sent;
              visa.value = response.data.data;
              visa.value['sections'] = JSON.parse(visa.value['sections']);
              visa.value['options'] = JSON.parse(visa.value['options']);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getVisaDetails(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  var storeVisa = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              fd.append("country_passport_ids", JSON.stringify(data.form.country_passport_ids));
              fd.append("title_en", data.form.title_en);
              fd.append("title_ar", data.form.title_ar);
              fd.append("active", data.form.active);
              fd.append("sections", JSON.stringify(data.form.sections));
              fd.append("options", JSON.stringify(data.form.options));
              fd.append("image", data.file);
              errors.value = "";
              _context7.prev = 8;
              _context7.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/visas", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {
                  percentage.value = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                }
              });

            case 11:
              _context7.next = 13;
              return router.push({
                name: "visas.index"
              });

            case 13:
              _context7.next = 18;
              break;

            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](8);

              if (_context7.t0.response.status === 422) {
                errors.value = _context7.t0.response.data.errors;
              }

            case 18:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[8, 15]]);
    }));

    return function storeVisa(_x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  var updateVisa = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id, data) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              ;
              fd.append("_method", "patch");
              fd.append("country_passport_ids", JSON.stringify(data.form.country_passport_ids));
              fd.append("title_en", data.form.title_en);
              fd.append("title_ar", data.form.title_ar);
              fd.append("active", data.form.active);
              fd.append("sections", JSON.stringify(data.form.sections));
              fd.append("options", JSON.stringify(data.form.options));
              fd.append("visa_img", data.form.image);
              fd.append("new_image", data.file);
              errors.value = "";
              _context8.prev = 11;
              _context8.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/visas/" + id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                onUploadProgress: function onUploadProgress(progressEvent) {
                  percentage.value = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                }
              });

            case 14:
              _context8.next = 16;
              return router.push({
                name: "visas.index"
              });

            case 16:
              _context8.next = 21;
              break;

            case 18:
              _context8.prev = 18;
              _context8.t0 = _context8["catch"](11);

              if (_context8.t0.response.status === 422) {
                errors.value = _context8.t0.response.data.errors;
              }

            case 21:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[11, 18]]);
    }));

    return function updateVisa(_x9, _x10) {
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

  var destroyVisa = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/visas/" + id);

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function destroyVisa(_x12) {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]("/api/delete-visa-image/" + id);

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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/visa/duplicate/" + id);

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
    visas: visas,
    duplicate: duplicate,
    visa: visa,
    errors: errors,
    getVisas: getVisas,
    getVisa: getVisa,
    storeVisa: storeVisa,
    updateVisa: updateVisa,
    destroyVisa: destroyVisa,
    deleteProperty: deleteProperty,
    addGallery: addGallery,
    addFiles: addFiles,
    getVisaDetails: getVisaDetails,
    destroyImage: destroyImage,
    destroyFile: destroyFile,
    percentage: percentage,
    pages: pages,
    getAllVisas: getAllVisas,
    getDestinationVisas: getDestinationVisas,
    getFilteredVisas: getFilteredVisas
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#animation[data-v-47a5a198] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.box[data-v-47a5a198] {\n    width: 5px;\n    height: 5px;\n    margin: 2px;\n}\n.box[data-v-47a5a198]:nth-child(1) {\n    background: white;\n    animation: balls-47a5a198 1s linear infinite;\n}\n.box[data-v-47a5a198]:nth-child(2) {\n    background: white;\n    animation: balls-47a5a198 1s 0.1s linear infinite;\n}\n.box[data-v-47a5a198]:nth-child(3) {\n    background: white;\n    animation: balls-47a5a198 1s 0.2s linear infinite;\n}\n.box[data-v-47a5a198]:nth-child(4) {\n    background: white;\n    animation: balls-47a5a198 1s 0.4s linear infinite;\n}\n@keyframes balls-47a5a198 {\n0% {\n        transform: sclaeY(1);\n}\n50% {\n        transform: scaleY(3);\n}\n100% {\n        transform: sclaeY(1);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_style_index_0_id_47a5a198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_style_index_0_id_47a5a198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_style_index_0_id_47a5a198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/BaseSection.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/BaseSection.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseSection_vue_vue_type_template_id_cd7b388e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseSection.vue?vue&type=template&id=cd7b388e */ "./resources/js/components/BaseSection.vue?vue&type=template&id=cd7b388e");
/* harmony import */ var _BaseSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSection.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/BaseSection.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BaseSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseSection_vue_vue_type_template_id_cd7b388e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/BaseSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Inquire.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Inquire.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inquire_vue_vue_type_template_id_47a5a198_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inquire.vue?vue&type=template&id=47a5a198&scoped=true */ "./resources/js/components/Inquire.vue?vue&type=template&id=47a5a198&scoped=true");
/* harmony import */ var _Inquire_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inquire.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Inquire.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Inquire_vue_vue_type_style_index_0_id_47a5a198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css */ "./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Inquire_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Inquire_vue_vue_type_template_id_47a5a198_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-47a5a198"],['__file',"resources/js/components/Inquire.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ListSection.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ListSection.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListSection_vue_vue_type_template_id_c3a8f068__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListSection.vue?vue&type=template&id=c3a8f068 */ "./resources/js/components/ListSection.vue?vue&type=template&id=c3a8f068");
/* harmony import */ var _ListSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListSection.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/ListSection.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ListSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ListSection_vue_vue_type_template_id_c3a8f068__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ListSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/frontend/visas/PassportVisa.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/frontend/visas/PassportVisa.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PassportVisa_vue_vue_type_template_id_5e076418__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PassportVisa.vue?vue&type=template&id=5e076418 */ "./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=template&id=5e076418");
/* harmony import */ var _PassportVisa_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PassportVisa.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PassportVisa_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PassportVisa_vue_vue_type_template_id_5e076418__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/frontend/visas/PassportVisa.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/BaseSection.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/BaseSection.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseSection.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BaseSection.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Inquire.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Inquire.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Inquire.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ListSection.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ListSection.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListSection_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListSection.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ListSection.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PassportVisa_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PassportVisa_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PassportVisa.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/BaseSection.vue?vue&type=template&id=cd7b388e":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/BaseSection.vue?vue&type=template&id=cd7b388e ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseSection_vue_vue_type_template_id_cd7b388e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BaseSection_vue_vue_type_template_id_cd7b388e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BaseSection.vue?vue&type=template&id=cd7b388e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/BaseSection.vue?vue&type=template&id=cd7b388e");


/***/ }),

/***/ "./resources/js/components/Inquire.vue?vue&type=template&id=47a5a198&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Inquire.vue?vue&type=template&id=47a5a198&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_template_id_47a5a198_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_template_id_47a5a198_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Inquire.vue?vue&type=template&id=47a5a198&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=template&id=47a5a198&scoped=true");


/***/ }),

/***/ "./resources/js/components/ListSection.vue?vue&type=template&id=c3a8f068":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ListSection.vue?vue&type=template&id=c3a8f068 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListSection_vue_vue_type_template_id_c3a8f068__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ListSection_vue_vue_type_template_id_c3a8f068__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ListSection.vue?vue&type=template&id=c3a8f068 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ListSection.vue?vue&type=template&id=c3a8f068");


/***/ }),

/***/ "./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=template&id=5e076418":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=template&id=5e076418 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PassportVisa_vue_vue_type_template_id_5e076418__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PassportVisa_vue_vue_type_template_id_5e076418__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PassportVisa.vue?vue&type=template&id=5e076418 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/PassportVisa.vue?vue&type=template&id=5e076418");


/***/ }),

/***/ "./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Inquire_vue_vue_type_style_index_0_id_47a5a198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Inquire.vue?vue&type=style&index=0&id=47a5a198&scoped=true&lang=css");


/***/ })

}]);