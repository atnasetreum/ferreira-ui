"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 7888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 8503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3435);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2316);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2686);
/* harmony import */ var _store_slices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6157);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__, _utils_api__WEBPACK_IMPORTED_MODULE_3__]);
([___WEBPACK_IMPORTED_MODULE_2__, _utils_api__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const AUTH_INITIAL_STATE = {
    isLoggedIn: false,
    user: undefined
};
const AuthProvider = ({ children  })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(___WEBPACK_IMPORTED_MODULE_2__/* .authReducer */ .dX, AUTH_INITIAL_STATE);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatchRedux = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkToken();
    }, []);
    const existApp = ()=>{
        dispatch({
            type: "[Auth] - Logout"
        });
        dispatchRedux((0,_store_slices__WEBPACK_IMPORTED_MODULE_7__/* .setTables */ .fU)([]));
        localStorage.removeItem("token");
        if (router.pathname !== "/") {
            window.location.replace("/");
        }
    };
    const checkToken = async ()=>{
        setLoading(true);
        try {
            const data = await _utils_api__WEBPACK_IMPORTED_MODULE_3__/* .AuthApi.validateToken */ .z9.validateToken();
            localStorage.setItem("token", data.token);
            dispatch({
                type: "[Auth] - Login",
                payload: data
            });
            setTimeout(()=>setLoading(false), 2000);
            if (router.pathname === "/") {
                router.push("/dashboard");
            }
        } catch (error) {
            setLoading(false);
            existApp();
        }
    };
    const loginUser = async (id, password)=>{
        try {
            const data = await _utils_api__WEBPACK_IMPORTED_MODULE_3__/* .AuthApi.login */ .z9.login({
                id,
                password
            });
            localStorage.setItem("token", data.token);
            dispatch({
                type: "[Auth] - Login",
                payload: data
            });
            return {
                userSession: data,
                isLoggedIn: true
            };
        } catch (error) {
            return {
                userSession: {},
                isLoggedIn: false
            };
        }
    };
    const logoutUser = ()=>{
        existApp();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__/* .AuthContext.Provider */ .Vo.Provider, {
        value: {
            ...state,
            loginUser,
            logoutUser
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Backdrop, {
                sx: {
                    color: "#fff",
                    zIndex: (theme)=>theme.zIndex.drawer + 1
                },
                open: loading,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {
                    color: "inherit"
                })
            }),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ authReducer)
/* harmony export */ });
const authReducer = (state, action)=>{
    switch(action.type){
        case "[Auth] - Login":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case "[Auth] - Logout":
            return {
                ...state,
                isLoggedIn: false,
                user: undefined
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 3435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* reexport safe */ _AuthProvider__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   "Vo": () => (/* reexport safe */ _AuthContext__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "dX": () => (/* reexport safe */ _authReducer__WEBPACK_IMPORTED_MODULE_2__.d)
/* harmony export */ });
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7888);
/* harmony import */ var _AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8503);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3486);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthProvider__WEBPACK_IMPORTED_MODULE_1__]);
_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* unused harmony export useAppSelector */
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = (/* unused pure expression or super */ null && (useSelector));


/***/ }),

/***/ 6157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fU": () => (/* reexport safe */ _table_slice__WEBPACK_IMPORTED_MODULE_0__.fU)
/* harmony export */ });
/* harmony import */ var _table_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5579);



/***/ }),

/***/ 5579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fU": () => (/* binding */ setTables)
/* harmony export */ });
/* unused harmony exports tableSlice, updateTable, selectTables */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [];
const tableSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "tables",
    initialState,
    reducers: {
        setTables: (state, action)=>state = action.payload,
        updateTable: (state, action)=>{
            const newTable = action.payload;
            const foundIndex = state.findIndex((table)=>table.id === newTable.id);
            state[foundIndex] = newTable;
            return state;
        }
    }
});
const { setTables , updateTable  } = tableSlice.actions;
const selectTables = (state)=>state.tables;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableSlice.reducer);


/***/ }),

/***/ 8271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ AuthApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/auth";
async function login(payload) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post(`${basePath}/login`, payload);
    return data;
}
async function validateToken() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}/validate-token`);
    return data;
}
const AuthApi = {
    login,
    validateToken
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://api.transportesferreira.com"
});
api.interceptors.request.use(function(config) {
    const token = localStorage.getItem("token") || "";
    const headers = {
        ...config.headers
    };
    headers["x-app-key"] = "nHWL2WJYa5XVpKo";
    headers["authorization"] = `Bearer ${token}`;
    config.headers = headers;
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
api.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ CamionetaApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/cars";
async function getAll() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}`);
    return data;
}
async function create(formData) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post(`${basePath}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return data;
}
async function update(id, formData) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.patch */ .h.patch(`${basePath}/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return data;
}
async function remove(id) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api["delete"] */ .h["delete"](`${basePath}/${id}`);
    return data;
}
const CamionetaApi = {
    getAll,
    create,
    update,
    remove
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ CiudadApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/inegi/localidades";
async function getAll(entidad, municipio) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}?entidad=${entidad}&municipio=${municipio}`);
    return data.map((localidad)=>localidad.localidad);
}
const CiudadApi = {
    getAll
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ EntidadApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/inegi/entidades";
async function getAll() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}`);
    return data.map((entidad)=>entidad.entidad);
}
const EntidadApi = {
    getAll
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BC": () => (/* reexport safe */ _camioneta_api__WEBPACK_IMPORTED_MODULE_10__.B),
/* harmony export */   "Fz": () => (/* reexport safe */ _seller_api__WEBPACK_IMPORTED_MODULE_6__.F),
/* harmony export */   "H0": () => (/* reexport safe */ _ciudad_api__WEBPACK_IMPORTED_MODULE_5__.H),
/* harmony export */   "HQ": () => (/* reexport safe */ _userType_api__WEBPACK_IMPORTED_MODULE_7__.H),
/* harmony export */   "Lz": () => (/* reexport safe */ _municipio_api__WEBPACK_IMPORTED_MODULE_4__.L),
/* harmony export */   "N4": () => (/* reexport safe */ _logistica_api__WEBPACK_IMPORTED_MODULE_9__.N),
/* harmony export */   "Wj": () => (/* reexport safe */ _user_api__WEBPACK_IMPORTED_MODULE_1__.W),
/* harmony export */   "gZ": () => (/* reexport safe */ _entidad_api__WEBPACK_IMPORTED_MODULE_3__.g),
/* harmony export */   "pg": () => (/* reexport safe */ _route_api__WEBPACK_IMPORTED_MODULE_8__.p),
/* harmony export */   "z9": () => (/* reexport safe */ _auth_api__WEBPACK_IMPORTED_MODULE_2__.z)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
/* harmony import */ var _user_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9013);
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8271);
/* harmony import */ var _entidad_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3688);
/* harmony import */ var _municipio_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9476);
/* harmony import */ var _ciudad_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(438);
/* harmony import */ var _seller_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3883);
/* harmony import */ var _userType_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2125);
/* harmony import */ var _route_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2518);
/* harmony import */ var _logistica_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8502);
/* harmony import */ var _camioneta_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__, _user_api__WEBPACK_IMPORTED_MODULE_1__, _auth_api__WEBPACK_IMPORTED_MODULE_2__, _entidad_api__WEBPACK_IMPORTED_MODULE_3__, _municipio_api__WEBPACK_IMPORTED_MODULE_4__, _ciudad_api__WEBPACK_IMPORTED_MODULE_5__, _seller_api__WEBPACK_IMPORTED_MODULE_6__, _userType_api__WEBPACK_IMPORTED_MODULE_7__, _route_api__WEBPACK_IMPORTED_MODULE_8__, _logistica_api__WEBPACK_IMPORTED_MODULE_9__, _camioneta_api__WEBPACK_IMPORTED_MODULE_10__]);
([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__, _user_api__WEBPACK_IMPORTED_MODULE_1__, _auth_api__WEBPACK_IMPORTED_MODULE_2__, _entidad_api__WEBPACK_IMPORTED_MODULE_3__, _municipio_api__WEBPACK_IMPORTED_MODULE_4__, _ciudad_api__WEBPACK_IMPORTED_MODULE_5__, _seller_api__WEBPACK_IMPORTED_MODULE_6__, _userType_api__WEBPACK_IMPORTED_MODULE_7__, _route_api__WEBPACK_IMPORTED_MODULE_8__, _logistica_api__WEBPACK_IMPORTED_MODULE_9__, _camioneta_api__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ LogisticaApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/logistics";
async function getAll() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}`);
    return data;
}
async function create(name) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post(`${basePath}`, {
        name
    });
    return data;
}
async function update(id, name) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.patch */ .h.patch(`${basePath}/${id}`, {
        name
    });
    return data;
}
async function remove(id) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api["delete"] */ .h["delete"](`${basePath}/${id}`);
    return data;
}
const LogisticaApi = {
    getAll,
    create,
    update,
    remove
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ MunicipioApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/inegi/municipios";
async function getAll(entidad) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}?entidad=${entidad}`);
    return data.map((municipio)=>municipio.municipio);
}
const MunicipioApi = {
    getAll
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ RouteApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/routes";
async function getAll(filters) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}`, {
        params: filters
    });
    return data;
}
async function create(payload) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post(`${basePath}`, payload);
    return data;
}
async function update(id, payload) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.patch */ .h.patch(`${basePath}/${id}`, payload);
    return data;
}
async function remove(id) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api["delete"] */ .h["delete"](`${basePath}/${id}`);
    return data;
}
async function getDataReport(params) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}/reportes`, {
        params
    });
    return data;
}
const RouteApi = {
    getAll,
    create,
    update,
    remove,
    getDataReport
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ SellerApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/sellers";
async function getAll(params) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}${params}`);
    return data;
}
async function getAllNoParent() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}/no-parent`);
    return data;
}
async function getAllBasicSeller() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}/basic`);
    return data;
}
async function create(formData) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post(`${basePath}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return data;
}
async function update(idSeller, formData) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.patch */ .h.patch(`${basePath}/${idSeller}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return data;
}
async function remove(id) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api["delete"] */ .h["delete"](`${basePath}/${id}`);
    return data;
}
const SellerApi = {
    getAll,
    create,
    update,
    getAllNoParent,
    getAllBasicSeller,
    remove
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ UserApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/users";
async function getAll() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}`);
    return data;
}
async function getDrivers() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}/drivers`);
    return data;
}
async function getUsersLogin() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}/users-login`);
    return data;
}
async function save(payload) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post(`${basePath}`, payload);
    return data;
}
async function remove(id) {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api["delete"] */ .h["delete"](`${basePath}/${id}`);
    return data;
}
const UserApi = {
    getAll,
    getUsersLogin,
    save,
    remove,
    getDrivers
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ UserTypeApi)
/* harmony export */ });
/* harmony import */ var _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_axiosWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const basePath = "/user-types";
async function getAll() {
    const { data  } = await _axiosWrapper__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`${basePath}`);
    return data;
}
const UserTypeApi = {
    getAll
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;