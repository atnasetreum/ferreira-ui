"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 2923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2737);









// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return {
        id,
        date,
        name,
        shipTo,
        paymentMethod,
        amount
    };
}
const rows = [
    createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", "VISA ⠀•••• 3719", 312.44),
    createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK", "VISA ⠀•••• 2574", 866.99),
    createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "MC ⠀•••• 1253", 100.81),
    createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "AMEX ⠀•••• 2000", 654.39),
    createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ", "VISA ⠀•••• 5919", 212.79)
];
function preventDefault(event) {
    event.preventDefault();
}
function Orders() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: "Recolecciones programadas? y echas? 15%"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default()), {
                size: "small",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    children: "Date"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    children: "Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    children: "Ship To"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    children: "Payment Method"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    align: "right",
                                    children: "Sale Amount"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_4___default()), {
                        children: rows.map((row)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        children: row.date
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        children: row.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        children: row.shipTo
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        children: row.paymentMethod
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        align: "right",
                                        children: `$${row.amount}`
                                    })
                                ]
                            }, row.id))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "primary",
                href: "#",
                onClick: preventDefault,
                sx: {
                    mt: 3
                },
                children: "See more orders"
            })
        ]
    });
}


/***/ }),

/***/ 2737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);



function Title(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "h2",
        variant: "h6",
        color: "primary",
        gutterBottom: true,
        children: props.children
    });
}


/***/ })

};
;