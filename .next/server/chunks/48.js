"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 1459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a8": () => (/* binding */ formatDateDynamic),
/* harmony export */   "j5": () => (/* binding */ stringToDate),
/* harmony export */   "jH": () => (/* binding */ formatTimeStamp),
/* harmony export */   "p6": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8678);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_1__);


const formatTimeStamp = (date)=>moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("LLLL a");
const formatDate = (date)=>moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("LL");
const stringToDate = (dateStr)=>{
    const [year, month, day] = dateStr.split("-");
    return new Date(Number(year), Number(month) - 1, Number(day));
};
const formatDateDynamic = (date, format)=>moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);


/***/ }),

/***/ 7279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ createUrlImage)
/* harmony export */ });
const createUrlImage = (img, folder = "sellers")=>{
    return `${"https://api.transportesferreira.com"}/static/images/${folder}/${img}`;
};


/***/ })

};
;