"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_frontend_visas_ProceedToApply_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../composables/general */ "./resources/js/composables/general.js");
/* harmony import */ var _composables_visas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../composables/visas */ "./resources/js/composables/visas.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ProceedToApply',
  props: {
    visa: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;

    var _useGeneral = (0,_composables_general__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        addFiles = _useGeneral.addFiles;

    var _useVisas = (0,_composables_visas__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        getVisaDetails = _useVisas.getVisaDetails,
        visa = _useVisas.visa;

    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    var maxSize = 102400; // 100KB in bytes

    var is_sending = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var application_forms = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: "",
      surname: "",
      email: "",
      phone: "",
      passport_no: "",
      travel_on: "",
      price: 0,
      passport_doc: null,
      national_id: null,
      client_photo: null,
      country: route.query.country,
      visa_type: route.query.visa_type
    }]);
    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("lang") || "en";
    var visa_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
              application_forms.value[0]["visa_type"] = visa_options.value[0]["visa_type"];
              console.log(application_forms.value[0]);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var validateSize = function validateSize(tag_id) {
      var fileInput = document.getElementById(tag_id);
      var fileSize = fileInput.files[0].size;

      if (fileSize > maxSize) {
        alert("File size must be less than 100KB");
      }
    };

    function onFileSelected(event, i, tag_id) {
      application_forms.value[i][tag_id] = event.target.files[0];
    }

    var submit = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                is_sending.value = true;
                application_forms.value.forEach(function (application) {
                  console.log(application.visa_type);
                  visa_options.value.forEach(function (type) {
                    if (application.visa_type == type.visa_type) {
                      application.price = type.price;
                    }
                  });
                });
                window.localStorage.setItem("forms", JSON.stringify(application_forms.value));
                router.push({
                  path: "payment"
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function submit() {
        return _ref3.apply(this, arguments);
      };
    }();

    var newForm = function newForm() {
      application_forms.value.push({
        name: "",
        surname: "",
        email: "",
        phone: "",
        passport_no: "",
        travel_on: "",
        price: 0,
        passport_doc: null,
        national_id: null,
        client_photo: null,
        country: route.query.country,
        visa_type: route.query.visa_type
      });
    };

    var removeForm = function removeForm(idx) {
      application_forms.value.splice(idx, 1);
    };

    var __returned__ = {
      addFiles: addFiles,
      getVisaDetails: getVisaDetails,
      visa: visa,
      props: props,
      route: route,
      router: router,
      maxSize: maxSize,

      get is_sending() {
        return is_sending;
      },

      set is_sending(v) {
        is_sending = v;
      },

      get application_forms() {
        return application_forms;
      },

      set application_forms(v) {
        application_forms = v;
      },

      get lang() {
        return lang;
      },

      set lang(v) {
        lang = v;
      },

      get visa_options() {
        return visa_options;
      },

      set visa_options(v) {
        visa_options = v;
      },

      validateSize: validateSize,
      onFileSelected: onFileSelected,
      submit: submit,
      newForm: newForm,
      removeForm: removeForm,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,

      get useGeneral() {
        return _composables_general__WEBPACK_IMPORTED_MODULE_1__["default"];
      },

      get useVisas() {
        return _composables_visas__WEBPACK_IMPORTED_MODULE_2__["default"];
      },

      get useRoute() {
        return vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute;
      },

      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-aebb3f34"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-28"
};
var _hoisted_2 = {
  "class": "text-main-indigo font-bold w-full text-center my-4"
};
var _hoisted_3 = ["onSubmit"];
var _hoisted_4 = {
  "class": "text-main-indigo font-bold"
};
var _hoisted_5 = {
  "class": "border"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-main-blue py-2 text-center uppercase text-white"
  }, " personal details ", -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  "class": "p-8"
};
var _hoisted_8 = {
  "class": "grid gap-2 sm:grid-cols-2"
};
var _hoisted_9 = {
  "class": "mt-1"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "title_en",
    "class": "block text-sm text-gray-800 font-bold"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Country of Residence "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-red-500"
  }, "*")], -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "mt-1"
};
var _hoisted_12 = ["onUpdate:modelValue"];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"Afghanistan\" data-v-aebb3f34> Afghanistan </option><option value=\"Albania\" data-v-aebb3f34>Albania</option><option value=\"Algeria\" data-v-aebb3f34>Algeria</option><option value=\"American Samoa\" data-v-aebb3f34> American Samoa </option><option value=\"Andorra\" data-v-aebb3f34>Andorra</option><option value=\"Angola\" data-v-aebb3f34>Angola</option><option value=\"Anguilla\" data-v-aebb3f34> Anguilla </option><option value=\"Antartica\" data-v-aebb3f34> Antarctica </option><option value=\"Antigua and Barbuda\" data-v-aebb3f34> Antigua and Barbuda </option><option value=\"Argentina\" data-v-aebb3f34> Argentina </option><option value=\"Armenia\" data-v-aebb3f34>Armenia</option><option value=\"Aruba\" data-v-aebb3f34>Aruba</option><option value=\"Australia\" data-v-aebb3f34> Australia </option><option value=\"Austria\" data-v-aebb3f34>Austria</option><option value=\"Azerbaijan\" data-v-aebb3f34> Azerbaijan </option><option value=\"Bahamas\" data-v-aebb3f34>Bahamas</option><option value=\"Bahrain\" data-v-aebb3f34>Bahrain</option><option value=\"Bangladesh\" data-v-aebb3f34> Bangladesh </option><option value=\"Barbados\" data-v-aebb3f34> Barbados </option><option value=\"Belarus\" data-v-aebb3f34>Belarus</option><option value=\"Belgium\" data-v-aebb3f34>Belgium</option><option value=\"Belize\" data-v-aebb3f34>Belize</option><option value=\"Benin\" data-v-aebb3f34>Benin</option><option value=\"Bermuda\" data-v-aebb3f34>Bermuda</option><option value=\"Bhutan\" data-v-aebb3f34>Bhutan</option><option value=\"Bolivia\" data-v-aebb3f34>Bolivia</option><option value=\"Bosnia and Herzegowina\" data-v-aebb3f34> Bosnia and Herzegowina </option><option value=\"Botswana\" data-v-aebb3f34> Botswana </option><option value=\"Bouvet Island\" data-v-aebb3f34> Bouvet Island </option><option value=\"Brazil\" data-v-aebb3f34>Brazil</option><option value=\"British Indian Ocean Territory\" data-v-aebb3f34> British Indian Ocean Territory </option><option value=\"Brunei Darussalam\" data-v-aebb3f34> Brunei Darussalam </option><option value=\"Bulgaria\" data-v-aebb3f34> Bulgaria </option><option value=\"Burkina Faso\" data-v-aebb3f34> Burkina Faso </option><option value=\"Burundi\" data-v-aebb3f34>Burundi</option><option value=\"Cambodia\" data-v-aebb3f34> Cambodia </option><option value=\"Cameroon\" data-v-aebb3f34> Cameroon </option><option value=\"Canada\" data-v-aebb3f34>Canada</option><option value=\"Cape Verde\" data-v-aebb3f34> Cape Verde </option><option value=\"Cayman Islands\" data-v-aebb3f34> Cayman Islands </option><option value=\"Central African Republic\" data-v-aebb3f34> Central African Republic </option><option value=\"Chad\" data-v-aebb3f34>Chad</option><option value=\"Chile\" data-v-aebb3f34>Chile</option><option value=\"China\" data-v-aebb3f34>China</option><option value=\"Christmas Island\" data-v-aebb3f34> Christmas Island </option><option value=\"Cocos Islands\" data-v-aebb3f34> Cocos (Keeling) Islands </option><option value=\"Colombia\" data-v-aebb3f34> Colombia </option><option value=\"Comoros\" data-v-aebb3f34>Comoros</option><option value=\"Congo\" data-v-aebb3f34>Congo</option><option value=\"Congo\" data-v-aebb3f34> Congo, the Democratic Republic of the </option><option value=\"Cook Islands\" data-v-aebb3f34> Cook Islands </option><option value=\"Costa Rica\" data-v-aebb3f34> Costa Rica </option><option value=\"Cota D&#39;Ivoire\" data-v-aebb3f34> Cote d&#39;Ivoire </option><option value=\"Croatia\" data-v-aebb3f34> Croatia (Hrvatska) </option><option value=\"Cuba\" data-v-aebb3f34>Cuba</option><option value=\"Cyprus\" data-v-aebb3f34>Cyprus</option><option value=\"Czech Republic\" data-v-aebb3f34> Czech Republic </option><option value=\"Denmark\" data-v-aebb3f34>Denmark</option><option value=\"Djibouti\" data-v-aebb3f34> Djibouti </option><option value=\"Dominica\" data-v-aebb3f34> Dominica </option><option value=\"Dominican Republic\" data-v-aebb3f34> Dominican Republic </option><option value=\"East Timor\" data-v-aebb3f34> East Timor </option><option value=\"Ecuador\" data-v-aebb3f34>Ecuador</option><option value=\"Egypt\" data-v-aebb3f34>Egypt</option><option value=\"El Salvador\" data-v-aebb3f34> El Salvador </option><option value=\"Equatorial Guinea\" data-v-aebb3f34> Equatorial Guinea </option><option value=\"Eritrea\" data-v-aebb3f34>Eritrea</option><option value=\"Estonia\" data-v-aebb3f34>Estonia</option><option value=\"Ethiopia\" data-v-aebb3f34> Ethiopia </option><option value=\"Falkland Islands\" data-v-aebb3f34> Falkland Islands (Malvinas) </option><option value=\"Faroe Islands\" data-v-aebb3f34> Faroe Islands </option><option value=\"Fiji\" data-v-aebb3f34>Fiji</option><option value=\"Finland\" data-v-aebb3f34>Finland</option><option value=\"France\" data-v-aebb3f34>France</option><option value=\"France Metropolitan\" data-v-aebb3f34> France, Metropolitan </option><option value=\"French Guiana\" data-v-aebb3f34> French Guiana </option><option value=\"French Polynesia\" data-v-aebb3f34> French Polynesia </option><option value=\"French Southern Territories\" data-v-aebb3f34> French Southern Territories </option><option value=\"Gabon\" data-v-aebb3f34>Gabon</option><option value=\"Gambia\" data-v-aebb3f34>Gambia</option><option value=\"Georgia\" data-v-aebb3f34>Georgia</option><option value=\"Germany\" data-v-aebb3f34>Germany</option><option value=\"Ghana\" data-v-aebb3f34>Ghana</option><option value=\"Gibraltar\" data-v-aebb3f34> Gibraltar </option><option value=\"Greece\" data-v-aebb3f34>Greece</option><option value=\"Greenland\" data-v-aebb3f34> Greenland </option><option value=\"Grenada\" data-v-aebb3f34>Grenada</option><option value=\"Guadeloupe\" data-v-aebb3f34> Guadeloupe </option><option value=\"Guam\" data-v-aebb3f34>Guam</option><option value=\"Guatemala\" data-v-aebb3f34> Guatemala </option><option value=\"Guinea\" data-v-aebb3f34>Guinea</option><option value=\"Guinea-Bissau\" data-v-aebb3f34> Guinea-Bissau </option><option value=\"Guyana\" data-v-aebb3f34>Guyana</option><option value=\"Haiti\" data-v-aebb3f34>Haiti</option><option value=\"Heard and McDonald Islands\" data-v-aebb3f34> Heard and Mc Donald Islands </option><option value=\"Holy See\" data-v-aebb3f34> Holy See (Vatican City State) </option><option value=\"Honduras\" data-v-aebb3f34> Honduras </option><option value=\"Hong Kong\" data-v-aebb3f34> Hong Kong </option><option value=\"Hungary\" data-v-aebb3f34>Hungary</option><option value=\"Iceland\" data-v-aebb3f34>Iceland</option><option value=\"India\" data-v-aebb3f34>India</option><option value=\"Indonesia\" data-v-aebb3f34> Indonesia </option><option value=\"Iran\" data-v-aebb3f34> Iran (Islamic Republic of) </option><option value=\"Iraq\" data-v-aebb3f34>Iraq</option><option value=\"Ireland\" data-v-aebb3f34>Ireland</option><option value=\"Israel\" data-v-aebb3f34>Israel</option><option value=\"Italy\" data-v-aebb3f34>Italy</option><option value=\"Jamaica\" data-v-aebb3f34>Jamaica</option><option value=\"Japan\" data-v-aebb3f34>Japan</option><option value=\"Jordan\" data-v-aebb3f34>Jordan</option><option value=\"Kazakhstan\" data-v-aebb3f34> Kazakhstan </option><option value=\"Kenya\" data-v-aebb3f34>Kenya</option><option value=\"Kiribati\" data-v-aebb3f34> Kiribati </option><option value=\"Democratic People&#39;s Republic of Korea\" data-v-aebb3f34> Korea, Democratic People&#39;s Republic of </option><option value=\"Korea\" data-v-aebb3f34> Korea, Republic of </option><option value=\"Kuwait\" data-v-aebb3f34>Kuwait</option><option value=\"Kyrgyzstan\" data-v-aebb3f34> Kyrgyzstan </option><option value=\"Lao\" data-v-aebb3f34> Lao People&#39;s Democratic Republic </option><option value=\"Latvia\" data-v-aebb3f34>Latvia</option><option value=\"Lebanon\" data-v-aebb3f34>Lebanon</option><option value=\"Lesotho\" data-v-aebb3f34>Lesotho</option><option value=\"Liberia\" data-v-aebb3f34>Liberia</option><option value=\"Libyan Arab Jamahiriya\" data-v-aebb3f34> Libyan Arab Jamahiriya </option><option value=\"Liechtenstein\" data-v-aebb3f34> Liechtenstein </option><option value=\"Lithuania\" data-v-aebb3f34> Lithuania </option><option value=\"Luxembourg\" data-v-aebb3f34> Luxembourg </option><option value=\"Macau\" data-v-aebb3f34>Macau</option><option value=\"Macedonia\" data-v-aebb3f34> Macedonia, The Former Yugoslav Republic of </option><option value=\"Madagascar\" data-v-aebb3f34> Madagascar </option><option value=\"Malawi\" data-v-aebb3f34>Malawi</option><option value=\"Malaysia\" data-v-aebb3f34> Malaysia </option><option value=\"Maldives\" data-v-aebb3f34> Maldives </option><option value=\"Mali\" data-v-aebb3f34>Mali</option><option value=\"Malta\" data-v-aebb3f34>Malta</option><option value=\"Marshall Islands\" data-v-aebb3f34> Marshall Islands </option><option value=\"Martinique\" data-v-aebb3f34> Martinique </option><option value=\"Mauritania\" data-v-aebb3f34> Mauritania </option><option value=\"Mauritius\" data-v-aebb3f34> Mauritius </option><option value=\"Mayotte\" data-v-aebb3f34>Mayotte</option><option value=\"Mexico\" data-v-aebb3f34>Mexico</option><option value=\"Micronesia\" data-v-aebb3f34> Micronesia, Federated States of </option><option value=\"Moldova\" data-v-aebb3f34> Moldova, Republic of </option><option value=\"Monaco\" data-v-aebb3f34>Monaco</option><option value=\"Mongolia\" data-v-aebb3f34> Mongolia </option><option value=\"Montserrat\" data-v-aebb3f34> Montserrat </option><option value=\"Morocco\" data-v-aebb3f34>Morocco</option><option value=\"Mozambique\" data-v-aebb3f34> Mozambique </option><option value=\"Myanmar\" data-v-aebb3f34>Myanmar</option><option value=\"Namibia\" data-v-aebb3f34>Namibia</option><option value=\"Nauru\" data-v-aebb3f34>Nauru</option><option value=\"Nepal\" data-v-aebb3f34>Nepal</option><option value=\"Netherlands\" data-v-aebb3f34> Netherlands </option><option value=\"Netherlands Antilles\" data-v-aebb3f34> Netherlands Antilles </option><option value=\"New Caledonia\" data-v-aebb3f34> New Caledonia </option><option value=\"New Zealand\" data-v-aebb3f34> New Zealand </option><option value=\"Nicaragua\" data-v-aebb3f34> Nicaragua </option><option value=\"Niger\" data-v-aebb3f34>Niger</option><option value=\"Nigeria\" data-v-aebb3f34>Nigeria</option><option value=\"Niue\" data-v-aebb3f34>Niue</option><option value=\"Norfolk Island\" data-v-aebb3f34> Norfolk Island </option><option value=\"Northern Mariana Islands\" data-v-aebb3f34> Northern Mariana Islands </option><option value=\"Norway\" data-v-aebb3f34>Norway</option><option value=\"Oman\" data-v-aebb3f34>Oman</option><option value=\"Pakistan\" data-v-aebb3f34> Pakistan </option><option value=\"Palau\" data-v-aebb3f34>Palau</option><option value=\"Panama\" data-v-aebb3f34>Panama</option><option value=\"Papua New Guinea\" data-v-aebb3f34> Papua New Guinea </option><option value=\"Paraguay\" data-v-aebb3f34> Paraguay </option><option value=\"Peru\" data-v-aebb3f34>Peru</option><option value=\"Philippines\" data-v-aebb3f34> Philippines </option><option value=\"Pitcairn\" data-v-aebb3f34> Pitcairn </option><option value=\"Poland\" data-v-aebb3f34>Poland</option><option value=\"Portugal\" data-v-aebb3f34> Portugal </option><option value=\"Puerto Rico\" data-v-aebb3f34> Puerto Rico </option><option value=\"Qatar\" data-v-aebb3f34>Qatar</option><option value=\"Reunion\" data-v-aebb3f34>Reunion</option><option value=\"Romania\" data-v-aebb3f34>Romania</option><option value=\"Russia\" data-v-aebb3f34> Russian Federation </option><option value=\"Rwanda\" data-v-aebb3f34>Rwanda</option><option value=\"Saint Kitts and Nevis\" data-v-aebb3f34> Saint Kitts and Nevis </option><option value=\"Saint LUCIA\" data-v-aebb3f34> Saint LUCIA </option><option value=\"Saint Vincent\" data-v-aebb3f34> Saint Vincent and the Grenadines </option><option value=\"Samoa\" data-v-aebb3f34>Samoa</option><option value=\"San Marino\" data-v-aebb3f34> San Marino </option><option value=\"Sao Tome and Principe\" data-v-aebb3f34> Sao Tome and Principe </option><option value=\"Saudi Arabia\" data-v-aebb3f34> Saudi Arabia </option><option value=\"Senegal\" data-v-aebb3f34>Senegal</option><option value=\"Seychelles\" data-v-aebb3f34> Seychelles </option><option value=\"Sierra\" data-v-aebb3f34> Sierra Leone </option><option value=\"Singapore\" data-v-aebb3f34> Singapore </option><option value=\"Slovakia\" data-v-aebb3f34> Slovakia (Slovak Republic) </option><option value=\"Slovenia\" data-v-aebb3f34> Slovenia </option><option value=\"Solomon Islands\" data-v-aebb3f34> Solomon Islands </option><option value=\"Somalia\" data-v-aebb3f34>Somalia</option><option value=\"South Africa\" data-v-aebb3f34> South Africa </option><option value=\"South Georgia\" data-v-aebb3f34> South Georgia and the South Sandwich Islands </option><option value=\"Span\" data-v-aebb3f34>Spain</option><option value=\"SriLanka\" data-v-aebb3f34> Sri Lanka </option><option value=\"St. Helena\" data-v-aebb3f34> St. Helena </option><option value=\"St. Pierre and Miguelon\" data-v-aebb3f34> St. Pierre and Miquelon </option><option value=\"Sudan\" data-v-aebb3f34>Sudan</option><option value=\"Suriname\" data-v-aebb3f34> Suriname </option><option value=\"Svalbard\" data-v-aebb3f34> Svalbard and Jan Mayen Islands </option><option value=\"Swaziland\" data-v-aebb3f34> Swaziland </option><option value=\"Sweden\" data-v-aebb3f34>Sweden</option><option value=\"Switzerland\" data-v-aebb3f34> Switzerland </option><option value=\"Syria\" data-v-aebb3f34> Syrian Arab Republic </option><option value=\"Taiwan\" data-v-aebb3f34> Taiwan, Province of China </option><option value=\"Tajikistan\" data-v-aebb3f34> Tajikistan </option><option value=\"Tanzania\" data-v-aebb3f34> Tanzania, United Republic of </option><option value=\"Thailand\" data-v-aebb3f34> Thailand </option><option value=\"Togo\" data-v-aebb3f34>Togo</option><option value=\"Tokelau\" data-v-aebb3f34>Tokelau</option><option value=\"Tonga\" data-v-aebb3f34>Tonga</option><option value=\"Trinidad and Tobago\" data-v-aebb3f34> Trinidad and Tobago </option><option value=\"Tunisia\" data-v-aebb3f34>Tunisia</option><option value=\"Turkey\" data-v-aebb3f34>Turkey</option><option value=\"Turkmenistan\" data-v-aebb3f34> Turkmenistan </option><option value=\"Turks and Caicos\" data-v-aebb3f34> Turks and Caicos Islands </option><option value=\"Tuvalu\" data-v-aebb3f34>Tuvalu</option><option value=\"Uganda\" data-v-aebb3f34>Uganda</option><option value=\"Ukraine\" data-v-aebb3f34>Ukraine</option><option value=\"United Arab Emirates\" data-v-aebb3f34> United Arab Emirates </option><option value=\"United Kingdom\" data-v-aebb3f34> United Kingdom </option><option value=\"United States\" data-v-aebb3f34> United States </option><option value=\"United States Minor Outlying Islands\" data-v-aebb3f34> United States Minor Outlying Islands </option><option value=\"Uruguay\" data-v-aebb3f34>Uruguay</option><option value=\"Uzbekistan\" data-v-aebb3f34> Uzbekistan </option><option value=\"Vanuatu\" data-v-aebb3f34>Vanuatu</option><option value=\"Venezuela\" data-v-aebb3f34> Venezuela </option><option value=\"Vietnam\" data-v-aebb3f34> Viet Nam </option><option value=\"Virgin Islands (British)\" data-v-aebb3f34> Virgin Islands (British) </option><option value=\"Virgin Islands (U.S)\" data-v-aebb3f34> Virgin Islands (U.S.) </option><option value=\"Wallis and Futana Islands\" data-v-aebb3f34> Wallis and Futuna Islands </option><option value=\"Western Sahara\" data-v-aebb3f34> Western Sahara </option><option value=\"Yemen\" data-v-aebb3f34>Yemen</option><option value=\"Serbia\" data-v-aebb3f34>Serbia</option><option value=\"Zambia\" data-v-aebb3f34>Zambia</option><option value=\"Zimbabwe\" data-v-aebb3f34> Zimbabwe </option>", 239);

var _hoisted_252 = [_hoisted_13];
var _hoisted_253 = {
  "class": "w-full mt-1"
};

var _hoisted_254 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "title_en",
    "class": "block text-sm text-gray-800 font-bold"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Types of Visas "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-red-500"
  }, "*")], -1
  /* HOISTED */
  );
});

var _hoisted_255 = {
  "class": "mt-1"
};
var _hoisted_256 = ["onUpdate:modelValue"];
var _hoisted_257 = ["value"];
var _hoisted_258 = {
  "class": ""
};

var _hoisted_259 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "name",
    "class": "mb-2 block text-sm font-medium text-gray-900"
  }, "Your Name", -1
  /* HOISTED */
  );
});

var _hoisted_260 = ["onUpdate:modelValue"];
var _hoisted_261 = {
  "class": ""
};

var _hoisted_262 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "surname",
    "class": "mb-2 block text-sm font-medium text-gray-900"
  }, "Surname", -1
  /* HOISTED */
  );
});

var _hoisted_263 = ["onUpdate:modelValue"];
var _hoisted_264 = {
  "class": ""
};

var _hoisted_265 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "email",
    "class": "mb-2 block text-sm font-medium text-gray-900"
  }, "Your email", -1
  /* HOISTED */
  );
});

var _hoisted_266 = ["onUpdate:modelValue"];
var _hoisted_267 = {
  "class": ""
};

var _hoisted_268 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "phone",
    "class": "mb-2 block text-sm font-medium text-gray-900"
  }, "Mobile / Whatsapp", -1
  /* HOISTED */
  );
});

var _hoisted_269 = ["onUpdate:modelValue"];
var _hoisted_270 = {
  "class": "border"
};

var _hoisted_271 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-main-blue py-2 text-center uppercase text-white"
  }, " passport and travel information ", -1
  /* HOISTED */
  );
});

var _hoisted_272 = {
  "class": "p-8"
};
var _hoisted_273 = {
  "class": "grid gap-2 sm:grid-cols-2"
};
var _hoisted_274 = {
  "class": ""
};

var _hoisted_275 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "passport_no",
    "class": "mb-2 block text-sm font-medium text-gray-900"
  }, "Passport No.", -1
  /* HOISTED */
  );
});

var _hoisted_276 = ["onUpdate:modelValue"];
var _hoisted_277 = {
  "class": ""
};

var _hoisted_278 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "travel_on",
    "class": "mb-2 block text-sm font-medium text-gray-900"
  }, "Travel On", -1
  /* HOISTED */
  );
});

var _hoisted_279 = ["onUpdate:modelValue"];
var _hoisted_280 = {
  "class": "border"
};

var _hoisted_281 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-main-blue py-2 text-center uppercase text-white"
  }, " upload documents ", -1
  /* HOISTED */
  );
});

var _hoisted_282 = {
  "class": "p-8"
};
var _hoisted_283 = {
  "class": "grid gap-2 sm:grid-cols-2"
};

var _hoisted_284 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "mb-2 block text-sm font-medium text-gray-900",
    "for": "passport_doc"
  }, "Passport", -1
  /* HOISTED */
  );
});

var _hoisted_285 = ["onChange"];

var _hoisted_286 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "mb-2 block text-sm font-medium text-gray-900",
    "for": "national_id"
  }, "National ID", -1
  /* HOISTED */
  );
});

var _hoisted_287 = ["onChange"];

var _hoisted_288 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": "mb-2 block text-sm font-medium text-gray-900",
    "for": "client_photo"
  }, "Photo", -1
  /* HOISTED */
  );
});

var _hoisted_289 = ["onChange"];
var _hoisted_290 = ["onClick"];

var _hoisted_291 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "class": "w-5 h-5 mr-2 -ml-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_292 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "class": "w-5 h-5 mr-2 -ml-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 6v12m6-6H6"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_293 = {
  key: 0,
  type: "submit",
  "class": "hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
};
var _hoisted_294 = {
  key: 1,
  type: "button",
  "class": "hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
};

var _hoisted_295 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"animation\" data-v-aebb3f34><div class=\"box\" id=\"box1\" data-v-aebb3f34></div><div class=\"box\" id=\"box2\" data-v-aebb3f34></div><div class=\"box\" id=\"box3\" data-v-aebb3f34></div><div class=\"box\" id=\"box4\" data-v-aebb3f34></div></div>", 1);

var _hoisted_296 = [_hoisted_295];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t($setup.props.visa.trim() + "-application-form")), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"]),
    "class": "mx-auto w-full max-w-6xl sm:px-4 xl:px-0 space-y-8"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.application_forms, function (application_form, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: i,
      "class": "space-y-4"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("person_" + (i + 1))), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.country = $event;
      },
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      required: ""
    }, _hoisted_252, 8
    /* PROPS */
    , _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, application_form.country]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_253, [_hoisted_254, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.visa_type = $event;
      },
      name: "",
      id: "",
      required: ""
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.visa_options, function (opt) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
        key: opt,
        value: opt.visa_type
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(opt["visa_type"]), 9
      /* TEXT, PROPS */
      , _hoisted_257);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 8
    /* PROPS */
    , _hoisted_256), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, application_form.visa_type]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_258, [_hoisted_259, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      id: "name",
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      required: "",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.name = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_260), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, application_form.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_261, [_hoisted_262, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      id: "surname",
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      required: "",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.surname = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_263), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, application_form.surname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_264, [_hoisted_265, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "email",
      id: "email",
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      required: "",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.email = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_266), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, application_form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_267, [_hoisted_268, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "tel",
      id: "phone",
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      required: "",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.phone = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_269), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, application_form.phone]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_270, [_hoisted_271, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_272, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_273, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_274, [_hoisted_275, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      id: "passport_no",
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      required: "",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.passport_no = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_276), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, application_form.passport_no]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_277, [_hoisted_278, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "date",
      id: "travel_on",
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      required: "",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return application_form.travel_on = $event;
      }
    }, null, 8
    /* PROPS */
    , _hoisted_279), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, application_form.travel_on]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_280, [_hoisted_281, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_282, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_283, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_284, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      id: "passport_doc",
      max: "1024",
      type: "file",
      onChange: function onChange($event) {
        return $setup.onFileSelected($event, i, 'passport_doc');
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_285)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_286, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      id: "national_id",
      type: "file",
      onChange: function onChange($event) {
        return $setup.onFileSelected($event, i, 'national_id');
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_287)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_288, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      "class": "block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500",
      id: "client_photo",
      type: "file",
      onChange: function onChange($event) {
        return $setup.onFileSelected($event, i, 'client_photo');
      }
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_289)])])])]), i > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      type: "button",
      "class": "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      onClick: function onClick($event) {
        return $setup.removeForm(i);
      }
    }, [_hoisted_291, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remove Form ")], 8
    /* PROPS */
    , _hoisted_290)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    onClick: $setup.newForm
  }, [_hoisted_292, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Application Form ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [!$setup.is_sending ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_293, " Submit and Proceed to Pay ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_294, _hoisted_296))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <router-link :to=\"`payment`\">Go to payment</router-link> ")], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_3)]);
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
              fd.append("sections", JSON.stringify(data.form.sections));
              fd.append("options", JSON.stringify(data.form.options));
              errors.value = "";
              _context7.prev = 6;
              _context7.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/visas", fd, {
                onUploadProgress: function onUploadProgress(progressEvent) {
                  percentage.value = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                }
              });

            case 9:
              _context7.next = 11;
              return router.push({
                name: "visas.index"
              });

            case 11:
              _context7.next = 16;
              break;

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](6);

              if (_context7.t0.response.status === 422) {
                errors.value = _context7.t0.response.data.errors;
              }

            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[6, 13]]);
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
              fd.append("sections", JSON.stringify(data.form.sections));
              fd.append("options", JSON.stringify(data.form.options));
              errors.value = "";
              _context8.prev = 8;
              _context8.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/visas/" + id, fd, {
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                onUploadProgress: function onUploadProgress(progressEvent) {
                  percentage.value = parseInt(Math.round(progressEvent.loaded / progressEvent.total * 100));
                }
              });

            case 11:
              _context8.next = 13;
              return router.push({
                name: "visas.index"
              });

            case 13:
              _context8.next = 18;
              break;

            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](8);

              if (_context8.t0.response.status === 422) {
                errors.value = _context8.t0.response.data.errors;
              }

            case 18:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[8, 15]]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#animation[data-v-aebb3f34] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.box[data-v-aebb3f34] {\n    width: 5px;\n    height: 5px;\n    margin: 2px;\n}\n.box[data-v-aebb3f34]:nth-child(1) {\n    background: white;\n    animation: balls-aebb3f34 1s linear infinite;\n}\n.box[data-v-aebb3f34]:nth-child(2) {\n    background: white;\n    animation: balls-aebb3f34 1s 0.1s linear infinite;\n}\n.box[data-v-aebb3f34]:nth-child(3) {\n    background: white;\n    animation: balls-aebb3f34 1s 0.2s linear infinite;\n}\n.box[data-v-aebb3f34]:nth-child(4) {\n    background: white;\n    animation: balls-aebb3f34 1s 0.4s linear infinite;\n}\n@keyframes balls-aebb3f34 {\n0% {\n        transform: sclaeY(1);\n}\n50% {\n        transform: scaleY(3);\n}\n100% {\n        transform: sclaeY(1);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_style_index_0_id_aebb3f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_style_index_0_id_aebb3f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_style_index_0_id_aebb3f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/frontend/visas/ProceedToApply.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/frontend/visas/ProceedToApply.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProceedToApply_vue_vue_type_template_id_aebb3f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true */ "./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true");
/* harmony import */ var _ProceedToApply_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProceedToApply.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _ProceedToApply_vue_vue_type_style_index_0_id_aebb3f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css */ "./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css");
/* harmony import */ var F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_tourexpect_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProceedToApply_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProceedToApply_vue_vue_type_template_id_aebb3f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-aebb3f34"],['__file',"resources/js/pages/frontend/visas/ProceedToApply.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProceedToApply.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_template_id_aebb3f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_template_id_aebb3f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=template&id=aebb3f34&scoped=true");


/***/ }),

/***/ "./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProceedToApply_vue_vue_type_style_index_0_id_aebb3f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/frontend/visas/ProceedToApply.vue?vue&type=style&index=0&id=aebb3f34&scoped=true&lang=css");


/***/ })

}]);