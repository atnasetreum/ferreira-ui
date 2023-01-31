"use strict";
exports.id = 401;
exports.ids = [401];
exports.modules = {

/***/ 9920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Copyright)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);



const Copyright = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
        variant: "body2",
        color: "text.secondary",
        align: "center",
        ...props,
        children: [
            "Copyright \xa9 ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                color: "inherit",
                target: "_blank",
                href: "https://www.google.com/search?q=miguel+ferreira&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjOp8SbnbT8AhU6NEQIHYh7B1oQ_AUoAXoECAEQAw&biw=1920&bih=975&dpr=1#imgrc=6nDBPXCQvl3kgM",
                children: "Miguel Luis Inc."
            }),
            " ",
            new Date().getFullYear(),
            "."
        ]
    });
};


/***/ }),

/***/ 8022:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SelectCiudades)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_4__]);
_utils_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SelectCiudades = ({ ciudad , setCiudad , entidad , municipio  })=>{
    const [ciudades, setCiudades] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (entidad && municipio && !ciudades.length) {
            _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .CiudadApi.getAll */ .H0.getAll(entidad, municipio).then(setCiudades);
        } else if (!entidad && !municipio && ciudades.length) {
            setCiudades([]);
        }
    }, [
        entidad,
        municipio,
        ciudades
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
        options: ciudades,
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...params,
                label: "Ciudad",
                autoComplete: "off"
            }),
        value: ciudad,
        onChange: (event, newValue)=>setCiudad(newValue)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SelectDrivers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_4__]);
_utils_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SelectDrivers({ value , onChange  }) {
    const [drivers, setDrivers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .UserApi.getDrivers */ .Wj.getDrivers().then(setDrivers);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
        disablePortal: true,
        id: "combo-box-demo-drivers",
        options: drivers,
        getOptionLabel: (opt)=>opt.name,
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...params,
                label: "Drivers",
                fullWidth: true
            }),
        value: value,
        onChange: (event, newValue)=>onChange(newValue)
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SelectEstados)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_4__]);
_utils_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SelectEstados = ({ entidad , setEntidad  })=>{
    const [entidades, setEntidades] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .EntidadApi.getAll */ .gZ.getAll().then(setEntidades);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
        options: entidades,
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...params,
                label: "Estado",
                autoComplete: "off"
            }),
        value: entidad,
        onChange: (event, newValue)=>setEntidad(newValue)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ SelectLogisticas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_4__]);
_utils_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SelectLogisticas = ({ value , onChange  })=>{
    const [logisticas, setLogisticas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .LogisticaApi.getAll */ .N4.getAll().then(setLogisticas);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
        disablePortal: true,
        id: "combo-box-demo-logisticas",
        options: logisticas,
        getOptionLabel: (opt)=>opt.name,
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...params,
                label: "Logisticas",
                fullWidth: true
            }),
        value: value,
        onChange: (event, newValue)=>onChange(newValue)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SelectMunicipios)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_4__]);
_utils_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SelectMunicipios = ({ municipio , setMunicipio , entidad  })=>{
    const [municipios, setMunicipios] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (entidad && !municipios.length) {
            _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .MunicipioApi.getAll */ .Lz.getAll(entidad).then(setMunicipios);
        } else if (!entidad && municipios.length) {
            setMunicipios([]);
        }
    }, [
        entidad,
        municipios
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
        options: municipios,
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...params,
                label: "Municipio",
                autoComplete: "off"
            }),
        value: municipio,
        onChange: (event, newValue)=>setMunicipio(newValue)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SelectPlacas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_4__]);
_utils_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SelectPlacas = ({ value , onChange  })=>{
    const [placas, setPlacas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .CamionetaApi.getAll */ .BC.getAll().then(setPlacas);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
        disablePortal: true,
        id: "combo-box-demo-placas",
        options: placas,
        getOptionLabel: (opt)=>`${opt.placa} - ${opt.logistica.name}`,
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...params,
                label: "Placas",
                fullWidth: true
            }),
        value: value,
        onChange: (event, newValue)=>onChange(newValue)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SelectSellers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_4__]);
_utils_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const SelectSellers = ({ label , value , onChange , type , idsDisabled  })=>{
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (type === "noParent") {
            _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .SellerApi.getAllNoParent */ .Fz.getAllNoParent().then(setOptions);
        } else {
            _utils_api__WEBPACK_IMPORTED_MODULE_4__/* .SellerApi.getAllBasicSeller */ .Fz.getAllBasicSeller().then(setOptions);
        }
    }, [
        type
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default()), {
        options: options,
        getOptionLabel: (option)=>`${option.uuid} - ${option.nombre}`,
        getOptionDisabled: (option)=>!!idsDisabled?.includes(option.id),
        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...params,
                label: label ?? "Sellers",
                autoComplete: "off"
            }),
        value: value,
        onChange: (event, newValue)=>onChange(newValue)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ TablePaginationActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3276);
/* harmony import */ var _mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7834);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7967);
/* harmony import */ var _mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_8__);









const TablePaginationActions = (props)=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { count , page , rowsPerPage , onPageChange  } = props;
    const handleFirstPageButtonClick = (event)=>{
        onPageChange(event, 0);
    };
    const handleBackButtonClick = (event)=>{
        onPageChange(event, page - 1);
    };
    const handleNextButtonClick = (event)=>{
        onPageChange(event, page + 1);
    };
    const handleLastPageButtonClick = (event)=>{
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
            flexShrink: 0,
            ml: 2.5
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                onClick: handleFirstPageButtonClick,
                disabled: page === 0,
                "aria-label": "first page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_8___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                onClick: handleBackButtonClick,
                disabled: page === 0,
                "aria-label": "previous page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                onClick: handleNextButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "next page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                onClick: handleLastPageButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "last page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_8___default()), {})
            })
        ]
    });
};


/***/ }),

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ StyledTableRow),
/* harmony export */   "Y": () => (/* binding */ StyledTableCell)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2__);



const StyledTableRow = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_2___default()))(({ theme  })=>({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0
        }
    }));
const StyledTableCell = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1___default()))(({ theme  })=>({
        [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__.tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
        },
        [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_1__.tableCellClasses.body}`]: {
            fontSize: 14
        }
    }));


/***/ }),

/***/ 9401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AF": () => (/* reexport safe */ _TableStyle__WEBPACK_IMPORTED_MODULE_5__.A),
/* harmony export */   "DA": () => (/* reexport safe */ _SelectPlacas__WEBPACK_IMPORTED_MODULE_9__.D),
/* harmony export */   "DY": () => (/* reexport safe */ _TablePaginationActions__WEBPACK_IMPORTED_MODULE_7__.D),
/* harmony export */   "E5": () => (/* reexport safe */ _SelectCiudades__WEBPACK_IMPORTED_MODULE_4__.E),
/* harmony export */   "EV": () => (/* reexport safe */ _SelectEstados__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "Yk": () => (/* reexport safe */ _TableStyle__WEBPACK_IMPORTED_MODULE_5__.Y),
/* harmony export */   "h1": () => (/* reexport safe */ _SelectSellers__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "tF": () => (/* reexport safe */ _SelectMunicipios__WEBPACK_IMPORTED_MODULE_3__.t),
/* harmony export */   "wZ": () => (/* reexport safe */ _Copyright__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "yO": () => (/* reexport safe */ _SelectLogisticas__WEBPACK_IMPORTED_MODULE_8__.y)
/* harmony export */ });
/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);
/* harmony import */ var _SelectSellers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4526);
/* harmony import */ var _SelectEstados__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
/* harmony import */ var _SelectMunicipios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6205);
/* harmony import */ var _SelectCiudades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8022);
/* harmony import */ var _TableStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9696);
/* harmony import */ var _SelectDrivers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8719);
/* harmony import */ var _TablePaginationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7613);
/* harmony import */ var _SelectLogisticas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4978);
/* harmony import */ var _SelectPlacas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7494);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SelectSellers__WEBPACK_IMPORTED_MODULE_1__, _SelectEstados__WEBPACK_IMPORTED_MODULE_2__, _SelectMunicipios__WEBPACK_IMPORTED_MODULE_3__, _SelectCiudades__WEBPACK_IMPORTED_MODULE_4__, _SelectDrivers__WEBPACK_IMPORTED_MODULE_6__, _SelectLogisticas__WEBPACK_IMPORTED_MODULE_8__, _SelectPlacas__WEBPACK_IMPORTED_MODULE_9__]);
([_SelectSellers__WEBPACK_IMPORTED_MODULE_1__, _SelectEstados__WEBPACK_IMPORTED_MODULE_2__, _SelectMunicipios__WEBPACK_IMPORTED_MODULE_3__, _SelectCiudades__WEBPACK_IMPORTED_MODULE_4__, _SelectDrivers__WEBPACK_IMPORTED_MODULE_6__, _SelectLogisticas__WEBPACK_IMPORTED_MODULE_8__, _SelectPlacas__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;