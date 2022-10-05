(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:
/*!******************************************!*\
  !*** ./source/plugins/application/ui.ts ***!
  \******************************************/
/*! exports provided: setup */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 13);\n/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify */ 40);\n/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ 41);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ 42);\n/* harmony import */ var _views_Application_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/Application.vue */ 56);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ 47);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction setup(options, imports, register) {\n    let vuetify = new vuetify__WEBPACK_IMPORTED_MODULE_1___default.a({\n        theme: {\n            themes: {\n                light: {\n                    primary: \'#803b9c\',\n                    secondary: \'#470163\',\n                    accent: \'#9108f9\',\n                    error: \'#FF0000\',\n                },\n                dark: {\n                    primary: \'#236f24\',\n                    secondary: \'#32a187\',\n                    accent: \'#3CDEDE\',\n                    error: \'#FF1818\',\n                },\n            },\n        },\n        icons: {\n            iconfont: \'md\',\n        },\n    });\n    const routes = [];\n    vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]);\n    vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        font: \'mdi\',\n        iconfont: \'mdi\'\n    });\n    vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_3__["default"]);\n    let storeData = {\n        state: {\n            version: "1.0.0"\n        },\n        modules: {},\n        strict: "development" !== "production"\n    };\n    let store = new vuex__WEBPACK_IMPORTED_MODULE_3__["default"].Store(storeData);\n    let application = {\n        api: axios__WEBPACK_IMPORTED_MODULE_5___default.a.create(),\n        __no_hook_api: "do not hook the api field",\n        store,\n        // TODO add ui type\n        start(ui) {\n            routes.push({ path: "*", redirect: "/workspace" });\n            console.log(routes);\n            let router = new vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]({\n                routes\n            });\n            vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.ui = ui;\n            let vue = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({\n                el: \'#app\',\n                vuetify,\n                router,\n                store,\n                render: function (render) {\n                    return render(_views_Application_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);\n                }\n            });\n        },\n        registerStore(namespace, store) {\n            if (this.store) {\n                // TODO check if it is already registered\n                this.store.registerModule(namespace, store);\n            }\n            else {\n                this.error(\'Unable to register store module \' + namespace + \', store has not been already started\');\n            }\n        },\n        storeDispatch(action, obj) {\n            return this.store.dispatch(action, obj);\n        },\n        registerRoutes(newRoutes) {\n            routes.push(...newRoutes);\n        },\n        registerView(view) {\n            console.log(view.options.name);\n            vue__WEBPACK_IMPORTED_MODULE_0__["default"].component(view.options.name, view);\n        },\n        error(err) {\n            console.error(err);\n        }\n    };\n    register(null, {\n        application\n    });\n}\n\n\n//# sourceURL=webpack:///./source/plugins/application/ui.ts?')},49:
/*!***********************************************************************************!*\
  !*** ./source/plugins/application/views/Application.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--4!../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=script&lang=ts& */ 50);\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_4_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?')},50:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--4!./node_modules/vue-loader/lib??vue-loader-options!./source/plugins/application/views/Application.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ 13);\n\n/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({\n    name: "Application"\n}));\n\n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?./node_modules/ts-loader??ref--4!./node_modules/vue-loader/lib??vue-loader-options')},51:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--1-0!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./source/plugins/application/views/Application.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=style&index=0&lang=less& */ 59);\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ 46).default\nvar update = add(\"3b28d6ee\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?./node_modules/vue-style-loader??ref--1-0!./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options")},54:
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./source/plugins/application/views/Application.vue?vue&type=template&id=24f8defb& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("router-view")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options')},56:
/*!**********************************************************!*\
  !*** ./source/plugins/application/views/Application.vue ***!
  \**********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Application_vue_vue_type_template_id_24f8defb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application.vue?vue&type=template&id=24f8defb& */ 57);\n/* harmony import */ var _Application_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application.vue?vue&type=script&lang=ts& */ 49);\n/* empty/unused harmony star reexport *//* harmony import */ var _Application_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Application.vue?vue&type=style&index=0&lang=less& */ 58);\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 38);\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(\n  _Application_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _Application_vue_vue_type_template_id_24f8defb___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _Application_vue_vue_type_template_id_24f8defb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "source/plugins/application/views/Application.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?')},57:
/*!*****************************************************************************************!*\
  !*** ./source/plugins/application/views/Application.vue?vue&type=template&id=24f8defb& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_24f8defb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=template&id=24f8defb& */ 54);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_24f8defb___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_24f8defb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?')},58:
/*!********************************************************************************************!*\
  !*** ./source/plugins/application/views/Application.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************/
/*! no static exports found */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_1_0_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=style&index=0&lang=less& */ 51);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_1_0_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_1_0_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_1_0_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_1_0_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_1_0_node_modules_css_loader_dist_cjs_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?')},59:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options!./source/plugins/application/views/Application.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 2);\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../node_modules/@mdi/font/css/materialdesignicons.css */ 43);\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../node_modules/vuetify/dist/vuetify.min.css */ 44);\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css */ 45);\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\n// Module\nexports.push([module.i, "\\n", ""]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./source/plugins/application/views/Application.vue?./node_modules/css-loader/dist/cjs.js??ref--1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./node_modules/vue-loader/lib??vue-loader-options')}}]);