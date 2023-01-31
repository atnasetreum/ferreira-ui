"use strict";
exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* reexport safe */ _useNotify__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "m": () => (/* reexport safe */ _useFilters__WEBPACK_IMPORTED_MODULE_1__.m)
/* harmony export */ });
/* harmony import */ var _useNotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7889);
/* harmony import */ var _useFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1957);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useNotify__WEBPACK_IMPORTED_MODULE_0__]);
_useNotify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useFilters)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFilters = function(initialState) {
    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
    const [querystring, setQuerystring] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let params = "";
        for(const key in filters){
            const value = filters[key];
            if (value) {
                params = params === "" ? `?${key}=${value}` : params + `&${key}=${value}`;
            }
        }
        setQuerystring(params);
    }, [
        filters
    ]);
    return {
        filters,
        setFilters,
        querystring
    };
};


/***/ }),

/***/ 7889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useNotify)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useNotify = ()=>{
    const notify = (msg, type)=>{
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast)(msg, {
            hideProgressBar: false,
            autoClose: 2000,
            type: type ?? "warning",
            position: "top-right"
        });
    };
    return {
        notify
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;