webpackHotUpdate_N_E("pages/index",{

/***/ "./components/recipes-list.js":
/*!************************************!*\
  !*** ./components/recipes-list.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_responsive_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-pagination */ "./node_modules/react-responsive-pagination/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./actions.js");
var _this = undefined,
    _jsxFileName = "F:\\projects\\fend\\deliciosas-recetas\\components\\recipes-list.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var RecipesList = function RecipesList() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["fetchRecipes"])(1));
  }, [dispatch]);
  var recipes = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.recipes.items;
  });
  var currentPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.recipes.currentPage;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, recipes.map(function (recipe) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 6,
      md: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "mt-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
      variant: "top",
      src: recipe.thumbnail,
      alt: recipe.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 19
      }
    }, recipe.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, recipe.ingredients)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Footer, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 6,
      className: "text-center text-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFile"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 23
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 6,
      className: "text-center text-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHeart"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }
    }))))));
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(react_responsive_pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentPage: currentPage,
    totalPages: 100,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }))));
};

_s(RecipesList, "9TEno5G68U0wrLAaKck4Soul+tM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = RecipesList;
/* harmony default export */ __webpack_exports__["default"] = (RecipesList);

var _c;

$RefreshReg$(_c, "RecipesList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/compositions/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/compositions/index.js ***!
  \****************************************************************************/
/*! exports provided: narrowToWideCompositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "narrowToWideCompositions", function() { return narrowToWideCompositions; });
/* harmony import */ var _helpers_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/iterator */ "./node_modules/react-responsive-pagination/lib/helpers/iterator.js");
/* harmony import */ var _ranges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ranges */ "./node_modules/react-responsive-pagination/lib/compositions/ranges.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./node_modules/react-responsive-pagination/lib/view/index.js");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



function narrowToWideCompositions(current, total) {
    var leftRanges, rightRanges, staggeredPairs, staggeredPairs_1, staggeredPairs_1_1, _a, leftRange, rightRange, e_1_1;
    var e_1, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                leftRanges = Object(_ranges__WEBPACK_IMPORTED_MODULE_1__["narrowToWideRanges"])(1, current - 1, 'left');
                rightRanges = Object(_ranges__WEBPACK_IMPORTED_MODULE_1__["narrowToWideRanges"])(current + 1, total, 'right');
                staggeredPairs = staggeredIterationRightFirst(leftRanges, rightRanges);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 6, 7, 8]);
                staggeredPairs_1 = __values(staggeredPairs), staggeredPairs_1_1 = staggeredPairs_1.next();
                _c.label = 2;
            case 2:
                if (!!staggeredPairs_1_1.done) return [3 /*break*/, 5];
                _a = staggeredPairs_1_1.value, leftRange = _a.leftRange, rightRange = _a.rightRange;
                return [4 /*yield*/, __spread([
                        navPrevious(current)
                    ], leftRange, [
                        activePage(current)
                    ], rightRange, [
                        navNext(current, total),
                    ])];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                staggeredPairs_1_1 = staggeredPairs_1.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _c.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (staggeredPairs_1_1 && !staggeredPairs_1_1.done && (_b = staggeredPairs_1.return)) _b.call(staggeredPairs_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}
function staggeredIterationRightFirst(leftRanges, rightRanges) {
    var zippedRanges, initial, _a, _b, leftRange, _c, rightRange, zippedRanges_1, zippedRanges_1_1, _d, nextLeftRange, nextRightRange, e_2_1;
    var e_2, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                zippedRanges = Object(_helpers_iterator__WEBPACK_IMPORTED_MODULE_0__["zipIterators"])(leftRanges, rightRanges);
                initial = zippedRanges.next();
                if (initial.done)
                    return [2 /*return*/];
                _a = __read(initial.value, 2), _b = _a[0], leftRange = _b === void 0 ? [] : _b, _c = _a[1], rightRange = _c === void 0 ? [] : _c;
                return [4 /*yield*/, { leftRange: leftRange, rightRange: rightRange }];
            case 1:
                _f.sent();
                _f.label = 2;
            case 2:
                _f.trys.push([2, 9, 10, 11]);
                zippedRanges_1 = __values(zippedRanges), zippedRanges_1_1 = zippedRanges_1.next();
                _f.label = 3;
            case 3:
                if (!!zippedRanges_1_1.done) return [3 /*break*/, 8];
                _d = __read(zippedRanges_1_1.value, 2), nextLeftRange = _d[0], nextRightRange = _d[1];
                if (!nextRightRange) return [3 /*break*/, 5];
                rightRange = nextRightRange;
                return [4 /*yield*/, { leftRange: leftRange, rightRange: rightRange }];
            case 4:
                _f.sent();
                _f.label = 5;
            case 5:
                if (!nextLeftRange) return [3 /*break*/, 7];
                leftRange = nextLeftRange;
                return [4 /*yield*/, { leftRange: leftRange, rightRange: rightRange }];
            case 6:
                _f.sent();
                _f.label = 7;
            case 7:
                zippedRanges_1_1 = zippedRanges_1.next();
                return [3 /*break*/, 3];
            case 8: return [3 /*break*/, 11];
            case 9:
                e_2_1 = _f.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 11];
            case 10:
                try {
                    if (zippedRanges_1_1 && !zippedRanges_1_1.done && (_e = zippedRanges_1.return)) _e.call(zippedRanges_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}
function activePage(current) {
    return _view__WEBPACK_IMPORTED_MODULE_2__["createViewItem"].page(current, true);
}
function navPrevious(current) {
    return _view__WEBPACK_IMPORTED_MODULE_2__["createViewItem"].nav('previous', current > 1 ? current - 1 : undefined);
}
function navNext(current, total) {
    return _view__WEBPACK_IMPORTED_MODULE_2__["createViewItem"].nav('next', current < total ? current + 1 : undefined);
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/compositions/ranges.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/compositions/ranges.js ***!
  \*****************************************************************************/
/*! exports provided: narrowToWideRanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "narrowToWideRanges", function() { return narrowToWideViewItemRanges; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./node_modules/react-responsive-pagination/lib/view/index.js");
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};


function narrowToWideViewItemRanges(start, end, ellipsisPos) {
    var _a, _b, range, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, 6, 7]);
                _a = __values(narrowToWideNumberRanges(start, end, ellipsisPos)), _b = _a.next();
                _d.label = 1;
            case 1:
                if (!!_b.done) return [3 /*break*/, 4];
                range = _b.value;
                return [4 /*yield*/, toViewItems(range, ellipsisPos)];
            case 2:
                _d.sent();
                _d.label = 3;
            case 3:
                _b = _a.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
function narrowToWideNumberRanges(first, last, ellipsisPos) {
    var fullWidth, iterationWidth, range;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fullWidth = getInclusiveWidth(first, last);
                iterationWidth = 1;
                _a.label = 1;
            case 1:
                if (!(iterationWidth < fullWidth)) return [3 /*break*/, 4];
                range = getCollapsedRange(first, last, iterationWidth, ellipsisPos);
                if (!range) return [3 /*break*/, 3];
                return [4 /*yield*/, range];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                iterationWidth++;
                return [3 /*break*/, 1];
            case 4: return [4 /*yield*/, getFullRange(first, last)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function getCollapsedRange(first, last, requiredWidth, ellipsisPos) {
    if (requiredWidth < 3)
        return;
    var widthOfRange = requiredWidth - 2;
    return ellipsisPos === 'left'
        ? __spread([first, '...'], getFullRange(last - (widthOfRange - 1), last)) : __spread(getFullRange(first, first + (widthOfRange - 1)), ['...', last]);
}
function getInclusiveWidth(first, last) {
    return last - first + 1;
}
function toViewItems(numberRange, ellipsisPos) {
    return numberRange.map(function (number) {
        if (number === '...')
            return _view__WEBPACK_IMPORTED_MODULE_0__["createViewItem"].ellipsis(ellipsisPos);
        return _view__WEBPACK_IMPORTED_MODULE_0__["createViewItem"].page(number, false);
    });
}
function getFullRange(start, end) {
    if (end < start)
        return [];
    return Array.from(Array(end - start + 1).keys(), function (i) { return i + start; });
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/helpers/iterator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/helpers/iterator.js ***!
  \**************************************************************************/
/*! exports provided: zipIterators, lastWhere, iteratorNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipIterators", function() { return zipIterators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastWhere", function() { return lastWhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iteratorNext", function() { return iteratorNext; });
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function zipIterators(xs, ys) {
    var xResult, yResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (false) {}
                xResult = xs.next();
                yResult = ys.next();
                if (xResult.done && yResult.done)
                    return [3 /*break*/, 2];
                return [4 /*yield*/, [xResult.value, yResult.value]];
            case 1:
                _a.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}
function lastWhere(xs, predicate) {
    var e_1, _a;
    var lastSoFar;
    try {
        for (var xs_1 = __values(xs), xs_1_1 = xs_1.next(); !xs_1_1.done; xs_1_1 = xs_1.next()) {
            var x = xs_1_1.value;
            if (!predicate(x))
                break;
            lastSoFar = x;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (xs_1_1 && !xs_1_1.done && (_a = xs_1.return)) _a.call(xs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return lastSoFar;
}
function iteratorNext(xs) {
    var xResult = xs.next();
    return xResult.done ? undefined : xResult.value;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/helpers/object.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/helpers/object.js ***!
  \************************************************************************/
/*! exports provided: objectUnzip, objectZip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectUnzip", function() { return objectUnzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectZip", function() { return objectZip; });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function objectUnzip(object) {
    var entries = Object.entries(object);
    var keys = entries.map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], _ = _b[1];
        return key;
    });
    var values = entries.map(function (_a) {
        var _b = __read(_a, 2), _ = _b[0], value = _b[1];
        return value;
    });
    return [keys, values];
}
function objectZip(keys, values) {
    var ret = {};
    keys.forEach(function (key, index) {
        ret[key] = values[index];
    });
    return ret;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/helpers/style.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/helpers/style.js ***!
  \***********************************************************************/
/*! exports provided: getElementWidth, getContentWidth, getNonContentWidth, getWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementWidth", function() { return getElementWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentWidth", function() { return getContentWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNonContentWidth", function() { return getNonContentWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWidth", function() { return getWidth; });
function getElementWidth(element) {
    var style = getComputedStyle(element);
    return (styleMetricToInt(style.marginLeft) +
        getWidth(element) +
        styleMetricToInt(style.marginRight));
}
function getContentWidth(element) {
    var style = getComputedStyle(element);
    return (element.getBoundingClientRect().width -
        styleMetricToInt(style.borderLeftWidth) -
        styleMetricToInt(style.paddingLeft) -
        styleMetricToInt(style.paddingRight) -
        styleMetricToInt(style.borderRightWidth));
}
function getNonContentWidth(element) {
    var style = getComputedStyle(element);
    return (styleMetricToInt(style.marginLeft) +
        styleMetricToInt(style.borderLeftWidth) +
        styleMetricToInt(style.paddingLeft) +
        styleMetricToInt(style.paddingRight) +
        styleMetricToInt(style.borderRightWidth) +
        styleMetricToInt(style.marginRight));
}
function getWidth(element) {
    return element.getBoundingClientRect().width;
}
function styleMetricToInt(styleAttribute) {
    return styleAttribute ? parseInt(styleAttribute) : 0;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/helpers/util.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/helpers/util.js ***!
  \**********************************************************************/
/*! exports provided: isNumber, sum, sanatizeInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanatizeInteger", function() { return sanatizeInteger; });
function isNumber(val) {
    return typeof val === 'number';
}
function sum(items) {
    return items.reduce(function (acc, width) { return acc + width; }, 0);
}
function sanatizeInteger(maybeInteger) {
    return typeof maybeInteger === 'number' && Number.isInteger(maybeInteger)
        ? maybeInteger
        : 0;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _compositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compositions */ "./node_modules/react-responsive-pagination/lib/compositions/index.js");
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skins */ "./node_modules/react-responsive-pagination/lib/skins/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ "./node_modules/react-responsive-pagination/lib/view/index.js");
/* harmony import */ var _renderers_AutoWidthRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderers/AutoWidthRenderer */ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/index.js");
/* harmony import */ var _renderers_MaxWidthRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderers/MaxWidthRenderer */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/index.js");
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/util */ "./node_modules/react-responsive-pagination/lib/helpers/util.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Pagination));
function Pagination(_a) {
    var propsCurrent = _a.current, propsTotal = _a.total, handlePageChange = _a.onPageChange, maxWidth = _a.maxWidth;
    var total = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_7__["sanatizeInteger"])(propsTotal);
    var current = Math.max(1, Math.min(Object(_helpers_util__WEBPACK_IMPORTED_MODULE_7__["sanatizeInteger"])(propsCurrent), total));
    var Skin = _skins__WEBPACK_IMPORTED_MODULE_3__["BootstrapSkin"];
    var View = Object(_view__WEBPACK_IMPORTED_MODULE_4__["useView"])(Skin, handlePageChange);
    var narrowToWideCompositionsProvider = function () {
        return Object(_compositions__WEBPACK_IMPORTED_MODULE_2__["narrowToWideCompositions"])(current, total);
    };
    if (total <= 0) {
        return null;
    }
    else if (maxWidth === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderers_AutoWidthRenderer__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({}, { narrowToWideCompositionsProvider: narrowToWideCompositionsProvider, View: View }));
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderers_MaxWidthRenderer__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, { maxWidth: maxWidth, narrowToWideCompositionsProvider: narrowToWideCompositionsProvider, View: View })));
    }
}
Pagination.propTypes = {
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
};


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoWidthRenderer; });
/* harmony import */ var _MaxWidthRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MaxWidthRenderer */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAvailableWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAvailableWidth */ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function AutoWidthRenderer(props) {
    var _a;
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), viewElement = _b[0], setViewElement = _b[1];
    var width = (_a = Object(_useAvailableWidth__WEBPACK_IMPORTED_MODULE_2__["useAvailableWidth"])(viewElement)) !== null && _a !== void 0 ? _a : 0;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MaxWidthRenderer__WEBPACK_IMPORTED_MODULE_0__["default"], __assign({ maxWidth: width, ref: setViewElement }, props));
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: useAvailableWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAvailableWidth", function() { return useAvailableWidth; });
/* harmony import */ var _useContentWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useContentWidth */ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/useContentWidth.js");

function useAvailableWidth(element) {
    var _a;
    return Object(_useContentWidth__WEBPACK_IMPORTED_MODULE_0__["useContentWidth"])((_a = element === null || element === void 0 ? void 0 : element.parentElement) !== null && _a !== void 0 ? _a : undefined);
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/useContentWidth.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/useContentWidth.js ***!
  \***********************************************************************************************************************/
/*! exports provided: useContentWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContentWidth", function() { return useContentWidth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/style */ "./node_modules/react-responsive-pagination/lib/helpers/style.js");
/* harmony import */ var _useResizeNotifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useResizeNotifier */ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/useResizeNotifier.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useContentWidth(element) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), 2), width = _a[0], setWidth = _a[1];
    function syncWidth() {
        var newWidth = element ? Object(_helpers_style__WEBPACK_IMPORTED_MODULE_1__["getContentWidth"])(element) : undefined;
        if (width !== newWidth) {
            setWidth(newWidth);
        }
    }
    Object(_useResizeNotifier__WEBPACK_IMPORTED_MODULE_2__["useResizeNotifier"])(element, syncWidth);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(syncWidth);
    return width;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/useResizeNotifier.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/AutoWidthRenderer/useAvailableWidth/useResizeNotifier.js ***!
  \*************************************************************************************************************************/
/*! exports provided: useResizeNotifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResizeNotifier", function() { return useResizeNotifier; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");


function useResizeNotifier(element, callback) {
    var callBackRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        callBackRef.current = callback;
    }, [callback]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](withResizeLoopDetection(function () {
            callBackRef.current();
        }));
        if (element) {
            resizeObserver.observe(element);
        }
        return function () {
            resizeObserver.disconnect();
        };
    }, [element]);
}
function withResizeLoopDetection(callback) {
    return function (entries, resizeObserver) {
        var elements = entries.map(function (entry) { return entry.target; });
        var rectsBefore = elements.map(function (element) { return element.getBoundingClientRect(); });
        callback();
        var rectsAfter = elements.map(function (element) { return element.getBoundingClientRect(); });
        var changedElements = elements.filter(function (_, i) { return !areRectSizesEqual(rectsBefore[i], rectsAfter[i]); });
        changedElements.forEach(function (element) {
            return unobserveUntilNextFrame(element, resizeObserver);
        });
    };
}
function unobserveUntilNextFrame(element, resizeObserver) {
    resizeObserver.unobserve(element);
    requestAnimationFrame(function () {
        resizeObserver.observe(element);
    });
}
function areRectSizesEqual(rect1, rect2) {
    return rect1.width === rect2.width && rect1.height === rect2.height;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/iterator */ "./node_modules/react-responsive-pagination/lib/helpers/iterator.js");
/* harmony import */ var _useWidthCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWidthCalculator */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/index.js");
/* harmony import */ var _useFoutDetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFoutDetector */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useFoutDetector.js");




var MaxWidthRenderer = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_a, forwardedViewRef) {
    var maxWidth = _a.maxWidth, narrowToWideCompositionsProvider = _a.narrowToWideCompositionsProvider, View = _a.View;
    var widthCalculator = Object(_useWidthCalculator__WEBPACK_IMPORTED_MODULE_2__["useWidthCalculator"])(View);
    var localViewRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    function setViewRef(ref) {
        typeof forwardedViewRef === 'function' && forwardedViewRef(ref);
        localViewRef.current = ref;
    }
    Object(_useFoutDetector__WEBPACK_IMPORTED_MODULE_3__["useFoutDetector"])(function () { return getItemsDomElements(localViewRef.current); }, 'clearCache' in widthCalculator ? widthCalculator.clearCache : function () { });
    if ('measuringComponentNeedsRender' in widthCalculator) {
        return widthCalculator.measuringComponentNeedsRender;
    }
    var composition = getLargestFittingCompositionWithFallback(narrowToWideCompositionsProvider, widthCalculator.getWidth, maxWidth);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, { items: composition, ref: setViewRef });
});
/* harmony default export */ __webpack_exports__["default"] = (MaxWidthRenderer);
function getLargestFittingCompositionWithFallback(getNarrowToWideCompositions, getCompositionWidth, maxWidth) {
    var _a, _b;
    var narrowToWideCompositions = getNarrowToWideCompositions();
    var firstComposition = (_a = Object(_helpers_iterator__WEBPACK_IMPORTED_MODULE_1__["iteratorNext"])(narrowToWideCompositions)) !== null && _a !== void 0 ? _a : [];
    var doesCompositionFit = function (composition) {
        return getCompositionWidth(composition) < maxWidth;
    };
    return (_b = Object(_helpers_iterator__WEBPACK_IMPORTED_MODULE_1__["lastWhere"])(narrowToWideCompositions, doesCompositionFit)) !== null && _b !== void 0 ? _b : firstComposition;
}
function getItemsDomElements(viewDomElement) {
    return viewDomElement && Array.from(viewDomElement.children);
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useFoutDetector.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useFoutDetector.js ***!
  \****************************************************************************************************/
/*! exports provided: useFoutDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFoutDetector", function() { return useFoutDetector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var _helpers_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/style */ "./node_modules/react-responsive-pagination/lib/helpers/style.js");



function useFoutDetector(getElements, handleFout) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
        var elements = getElements();
        if (!elements)
            return;
        return setupWidthChangeAfterRenderListener(elements, handleFout);
    });
}
function setupWidthChangeAfterRenderListener(elements, handleWidthChangeAfterRender) {
    var getInitialWidth = createInitialWidthProvider(elements);
    var hasWidthChanged = function (element) {
        return isSignificantDifference(getInitialWidth(element), Object(_helpers_style__WEBPACK_IMPORTED_MODULE_2__["getWidth"])(element));
    };
    return setupResizeObserver(elements, function (maybeResizedElements) {
        if (maybeResizedElements.some(hasWidthChanged)) {
            handleWidthChangeAfterRender();
        }
    });
}
function createInitialWidthProvider(elements) {
    var initialWidths = elements.map(_helpers_style__WEBPACK_IMPORTED_MODULE_2__["getWidth"]);
    return function getInitialWidth(element) {
        var index = elements.indexOf(element);
        return initialWidths[index];
    };
}
function setupResizeObserver(elements, handleElementsResized) {
    var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](function (entries) {
        var elements = entries.map(getTargetElement);
        handleElementsResized(elements);
    });
    elements.forEach(function (element) { return resizeObserver.observe(element); });
    return function () { return resizeObserver.disconnect(); };
}
function getTargetElement(entry) {
    return entry.target;
}
function isSignificantDifference(width1, width2) {
    return Math.abs(width1 - width2) > 0.5;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/ViewDomResolver.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/ViewDomResolver.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(ViewDomResolver));
function ViewDomResolver(_a) {
    var View = _a.view, viewDomConsumer = _a.onDomProvidable;
    var componentToRender;
    viewDomConsumer(function (items) {
        return new Promise(function (resolveDom) {
            componentToRender = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, { items: items, ref: function (element) { return element && resolveDom(element); } }));
        });
    });
    return componentToRender;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/getViewMetrics.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/getViewMetrics.js ***!
  \**********************************************************************************************************************/
/*! exports provided: getViewMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewMetrics", function() { return getViewMetrics; });
/* harmony import */ var _helpers_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/object */ "./node_modules/react-responsive-pagination/lib/helpers/object.js");
/* harmony import */ var _helpers_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/style */ "./node_modules/react-responsive-pagination/lib/helpers/style.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


function getViewMetrics(getViewDom, keyedItemsToMeasure) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, itemKeys, items, viewDom;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = __read(Object(_helpers_object__WEBPACK_IMPORTED_MODULE_0__["objectUnzip"])(keyedItemsToMeasure), 2), itemKeys = _a[0], items = _a[1];
                    return [4 /*yield*/, getViewDom(items)];
                case 1:
                    viewDom = _b.sent();
                    return [2 /*return*/, getViewMetricsFromViewDom(viewDom, itemKeys)];
            }
        });
    });
}
function getViewMetricsFromViewDom(viewContainerElement, itemKeys) {
    var viewItemElements = Array.from(viewContainerElement.children);
    return {
        outerFrameWidth: Object(_helpers_style__WEBPACK_IMPORTED_MODULE_1__["getNonContentWidth"])(viewContainerElement),
        itemWidths: getItemWidthsFromItemDomElements(itemKeys, viewItemElements),
    };
}
function getItemWidthsFromItemDomElements(itemKeys, itemElements) {
    var itemWidths = itemElements.map(_helpers_style__WEBPACK_IMPORTED_MODULE_1__["getElementWidth"]);
    return Object(_helpers_object__WEBPACK_IMPORTED_MODULE_0__["objectZip"])(itemKeys, itemWidths);
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: useWidthCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWidthCalculator", function() { return useWidthCalculator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../view */ "./node_modules/react-responsive-pagination/lib/view/index.js");
/* harmony import */ var _widthCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widthCalculator */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/index.js");
/* harmony import */ var _ViewDomResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewDomResolver */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/ViewDomResolver.js");
/* harmony import */ var _getViewMetrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getViewMetrics */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/getViewMetrics.js");
/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsMounted */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/useIsMounted.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






function useWidthCalculator(view) {
    var _this = this;
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), 2), _b = _a[0], calculator = _b.calculator, validForView = _b.validForView, setCalculatorWithView = _a[1];
    var isMounted = Object(_useIsMounted__WEBPACK_IMPORTED_MODULE_5__["useIsMounted"])();
    var resetCalculator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return setCalculatorWithView({}); }, []);
    var setupCalculator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (viewDomProvider) { return __awaiter(_this, void 0, void 0, function () {
        var calculatorRootMetrics, calculator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_getViewMetrics__WEBPACK_IMPORTED_MODULE_4__["getViewMetrics"])(viewDomProvider, rootMetricItemsToMeasure)];
                case 1:
                    calculatorRootMetrics = _a.sent();
                    if (!isMounted())
                        return [2 /*return*/];
                    calculator = Object(_widthCalculator__WEBPACK_IMPORTED_MODULE_2__["createWidthCalculator"])(calculatorRootMetrics);
                    setCalculatorWithView({ calculator: calculator, validForView: view });
                    return [2 /*return*/];
            }
        });
    }); }, [view, isMounted]);
    if (!calculator || validForView !== view) {
        return {
            measuringComponentNeedsRender: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ViewDomResolver__WEBPACK_IMPORTED_MODULE_3__["default"], { view: view, onDomProvidable: setupCalculator })),
        };
    }
    return {
        getWidth: calculator,
        clearCache: resetCalculator,
    };
}
var rootMetricItemsToMeasure = {
    normalPageSingleDigit: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].page(8, false),
    normalPageDoubleDigit: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].page(88, false),
    activePageSingleDigit: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].page(8, true),
    activePageDoubleDigit: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].page(88, true),
    navPreviousEnabled: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].nav('previous', 0),
    navPreviousDisabled: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].nav('previous'),
    navNextEnabled: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].nav('next', 0),
    navNextDisabled: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].nav('next'),
    ellipsis: _view__WEBPACK_IMPORTED_MODULE_1__["createViewItem"].ellipsis('left'),
};


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/useIsMounted.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/useIsMounted.js ***!
  \********************************************************************************************************************/
/*! exports provided: useIsMounted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsMounted", function() { return useIsMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIsMounted() {
    var isMountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        return function () {
            isMountedRef.current = false;
        };
    }, []);
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return isMountedRef.current; }, []);
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/index.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: createWidthCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWidthCalculator", function() { return createGraph; });
/* harmony import */ var _totalWidthCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalWidthCalculator */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/totalWidthCalculator.js");
/* harmony import */ var _itemWidthCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemWidthCalculator */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/itemWidthCalculator.js");
/* harmony import */ var _navWidthCalculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navWidthCalculator */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/navWidthCalculator.js");
/* harmony import */ var _pageWidthCalculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageWidthCalculator */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/pageWidthCalculator.js");
/* harmony import */ var _numberWidthCalculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./numberWidthCalculator */ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/numberWidthCalculator.js");






function createGraph(rootMetrics) {
    var itemWidths = rootMetrics.itemWidths, outerFrameWidth = rootMetrics.outerFrameWidth;
    return Object(_totalWidthCalculator__WEBPACK_IMPORTED_MODULE_0__["createTotalWidthCalculator"])({
        getItemWidth: Object(_itemWidthCalculator__WEBPACK_IMPORTED_MODULE_1__["createItemWidthCalculator"])({
            getPageWidth: Object(_pageWidthCalculator__WEBPACK_IMPORTED_MODULE_3__["createPageWidthCalculator"])({
                getNormalPageWidth: Object(_numberWidthCalculator__WEBPACK_IMPORTED_MODULE_4__["createNumberWidthCalculator"])({
                    singleDigit: itemWidths.normalPageSingleDigit,
                    doubleDigit: itemWidths.normalPageDoubleDigit,
                }),
                getActivePageWidth: Object(_numberWidthCalculator__WEBPACK_IMPORTED_MODULE_4__["createNumberWidthCalculator"])({
                    singleDigit: itemWidths.activePageSingleDigit,
                    doubleDigit: itemWidths.activePageDoubleDigit,
                }),
            }),
            getNavWidth: Object(_navWidthCalculator__WEBPACK_IMPORTED_MODULE_2__["createNavWidthCalculator"])({
                previous: {
                    enabled: itemWidths.navPreviousEnabled,
                    disabled: itemWidths.navPreviousDisabled,
                },
                next: {
                    enabled: itemWidths.navNextEnabled,
                    disabled: itemWidths.navNextDisabled,
                },
            }),
            ellipsisWidth: itemWidths.ellipsis,
        }),
        outerFrameWidth: outerFrameWidth,
    });
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/itemWidthCalculator.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/itemWidthCalculator.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: createItemWidthCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createItemWidthCalculator", function() { return createItemWidthCalculator; });
function createItemWidthCalculator(_a) {
    var getPageWidth = _a.getPageWidth, getNavWidth = _a.getNavWidth, ellipsisWidth = _a.ellipsisWidth;
    return function itemWidthCalculator(item) {
        if (item.type === 'page') {
            return getPageWidth(item.page, item.active);
        }
        if (item.type === 'previous' || item.type === 'next') {
            return getNavWidth(item.type, item.page !== undefined);
        }
        if (item.type === 'ellipsis') {
            return ellipsisWidth;
        }
        throw Error("unknown item: " + item.type);
    };
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/navWidthCalculator.js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/navWidthCalculator.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: createNavWidthCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavWidthCalculator", function() { return createNavWidthCalculator; });
function createNavWidthCalculator(widths) {
    return function navWidthCalculator(type, enabled) {
        var widthsForType = widths[type];
        return enabled ? widthsForType.disabled : widthsForType.disabled;
    };
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/numberWidthCalculator.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/numberWidthCalculator.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: createNumberWidthCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNumberWidthCalculator", function() { return createNumberWidthCalculator; });
function createNumberWidthCalculator(widths) {
    return function numberWidthCalculator(num) {
        var numDigits = num.toString().length;
        return (widths.singleDigit +
            (widths.doubleDigit - widths.singleDigit) * (numDigits - 1));
    };
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/pageWidthCalculator.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/pageWidthCalculator.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: createPageWidthCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageWidthCalculator", function() { return createPageWidthCalculator; });
function createPageWidthCalculator(_a) {
    var getActivePageWidth = _a.getActivePageWidth, getNormalPageWidth = _a.getNormalPageWidth;
    return function pageWidthCalculator(page, active) {
        return active ? getActivePageWidth(page) : getNormalPageWidth(page);
    };
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/totalWidthCalculator.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/renderers/MaxWidthRenderer/useWidthCalculator/widthCalculator/totalWidthCalculator.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: createTotalWidthCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTotalWidthCalculator", function() { return createTotalWidthCalculator; });
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/util */ "./node_modules/react-responsive-pagination/lib/helpers/util.js");

function createTotalWidthCalculator(_a) {
    var getItemWidth = _a.getItemWidth, outerFrameWidth = _a.outerFrameWidth;
    return function widthCalculator(items) {
        var itemWidths = items.map(getItemWidth);
        var contentWidth = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_0__["sum"])(itemWidths);
        return outerFrameWidth + contentWidth;
    };
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/Container.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/Container.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Container = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_a, ref) {
    var children = _a.children;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "pagination justify-content-center", ref: ref }, children));
});
/* harmony default export */ __webpack_exports__["default"] = (Container);


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/Item.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/Item.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable jsx-a11y/anchor-is-valid */

function Item(_a) {
    var label = _a.label, handleClick = _a.onClick, _b = _a.isActive, isActive = _b === void 0 ? false : _b, a11yLabel = _a.a11yLabel, a11yHidden = _a.a11yHidden;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: "page-item" + getLiExtraClasses(isActive, !handleClick), "aria-hidden": a11yHidden }, handleClick ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "page-link", href: "#", onClick: handleClick, "aria-label": a11yLabel }, getContent(label, a11yLabel))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "page-link" }, getContent(label, a11yLabel)))));
}
function getLiExtraClasses(active, disabled) {
    return "" + (active ? ' active' : '') + (disabled ? ' disabled' : '');
}
function getContent(label, a11yLabel) {
    return a11yLabel ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { "aria-hidden": "true" }, label),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "sr-only" }, a11yLabel))) : (label);
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/Item.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/Container.js");



var BootstrapSkin = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_a, ref) {
    var items = _a.items;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], { ref: ref }, items.map(createItem)));
});
function createItem(item) {
    switch (item.type) {
        case 'ellipsis':
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_1__["default"], { key: item.key, label: '…', a11yHidden: true });
        case 'page':
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_1__["default"], { key: item.key, onClick: item.onClick, isActive: item.active, label: item.label, a11yLabel: item.active ? '(current)' : undefined }));
        case 'previous':
        case 'next':
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_1__["default"], { key: item.key, onClick: item.onClick, label: item.type === 'previous' ? '«' : '»', a11yLabel: item.type === 'previous' ? 'Previous' : 'Next' }));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (BootstrapSkin);


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/skins/createSkinItem.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/skins/createSkinItem.js ***!
  \******************************************************************************/
/*! exports provided: createSkinItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSkinItem", function() { return createSkinItem; });
var createSkinItem = {
    page: function (page, active, onClick) { return ({
        type: 'page',
        key: active ? "page_" + page : "active_" + page,
        label: page.toString(),
        onClick: onClick,
        active: active,
    }); },
    ellipsis: function (position) { return ({
        type: 'ellipsis',
        key: "ellipsis_" + position,
    }); },
    nav: function (type, onClick) { return ({
        type: type,
        onClick: onClick,
        key: onClick ? type : type + "_disabled",
    }); },
};


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/skins/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/skins/index.js ***!
  \*********************************************************************/
/*! exports provided: BootstrapSkin, createSkinItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BootstrapSkin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BootstrapSkin */ "./node_modules/react-responsive-pagination/lib/skins/BootstrapSkin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapSkin", function() { return _BootstrapSkin__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createSkinItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSkinItem */ "./node_modules/react-responsive-pagination/lib/skins/createSkinItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSkinItem", function() { return _createSkinItem__WEBPACK_IMPORTED_MODULE_1__["createSkinItem"]; });





/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/view/createViewItem.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/view/createViewItem.js ***!
  \*****************************************************************************/
/*! exports provided: createViewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createViewItem", function() { return createViewItem; });
var createViewItem = {
    nav: function (type, page) { return ({
        type: type,
        page: page,
    }); },
    page: function (page, active) { return ({
        type: 'page',
        page: page,
        active: active,
    }); },
    ellipsis: function (position) { return ({
        type: 'ellipsis',
        position: position,
    }); },
};


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/view/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/view/index.js ***!
  \********************************************************************/
/*! exports provided: useView, createViewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useView */ "./node_modules/react-responsive-pagination/lib/view/useView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useView", function() { return _useView__WEBPACK_IMPORTED_MODULE_0__["useView"]; });

/* harmony import */ var _createViewItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createViewItem */ "./node_modules/react-responsive-pagination/lib/view/createViewItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createViewItem", function() { return _createViewItem__WEBPACK_IMPORTED_MODULE_1__["createViewItem"]; });





/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/view/useView.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/view/useView.js ***!
  \**********************************************************************/
/*! exports provided: useView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useView", function() { return useView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewItemToSkinItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewItemToSkinItem */ "./node_modules/react-responsive-pagination/lib/view/viewItemToSkinItem.js");


function useView(skin, handlePageChange) {
    var handlePageChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    handlePageChangeRef.current = handlePageChange;
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return createView(skin, handlePageChangeRef); }, [skin]);
}
function createView(Skin, handlePageChangeRef) {
    var View = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (_a, ref) {
        var viewItems = _a.items;
        var handlePageChange = handlePageChangeRef.current;
        var skinItems = viewItems.map(Object(_viewItemToSkinItem__WEBPACK_IMPORTED_MODULE_1__["viewItemToSkinItem"])(handlePageChange));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Skin, { ref: ref, items: skinItems });
    });
    return View;
}


/***/ }),

/***/ "./node_modules/react-responsive-pagination/lib/view/viewItemToSkinItem.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-responsive-pagination/lib/view/viewItemToSkinItem.js ***!
  \*********************************************************************************/
/*! exports provided: viewItemToSkinItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewItemToSkinItem", function() { return viewItemToSkinItem; });
/* harmony import */ var _skins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../skins */ "./node_modules/react-responsive-pagination/lib/skins/index.js");

function viewItemToSkinItem(handlePageChange) {
    return function (viewItem) {
        if (viewItem.type === 'page') {
            var active = viewItem.active, page_1 = viewItem.page;
            return _skins__WEBPACK_IMPORTED_MODULE_0__["createSkinItem"].page(page_1, active, function (event) {
                event.preventDefault();
                handlePageChange(page_1);
            });
        }
        if (viewItem.type === 'ellipsis') {
            return _skins__WEBPACK_IMPORTED_MODULE_0__["createSkinItem"].ellipsis(viewItem.position);
        }
        if (viewItem.type === 'previous' || viewItem.type === 'next') {
            var page_2 = viewItem.page, type = viewItem.type;
            var onClick = page_2 !== undefined
                ? function (event) {
                    event.preventDefault();
                    handlePageChange(page_2);
                }
                : undefined;
            return _skins__WEBPACK_IMPORTED_MODULE_0__["createSkinItem"].nav(type, onClick);
        }
        throw new Error("unknown type " + viewItem.type);
    };
}


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWNpcGVzLWxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL2NvbXBvc2l0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvY29tcG9zaXRpb25zL3Jhbmdlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvaGVscGVycy9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvaGVscGVycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL2hlbHBlcnMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL2hlbHBlcnMvdXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3JlbmRlcmVycy9BdXRvV2lkdGhSZW5kZXJlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvcmVuZGVyZXJzL0F1dG9XaWR0aFJlbmRlcmVyL3VzZUF2YWlsYWJsZVdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvQXV0b1dpZHRoUmVuZGVyZXIvdXNlQXZhaWxhYmxlV2lkdGgvdXNlQ29udGVudFdpZHRoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvQXV0b1dpZHRoUmVuZGVyZXIvdXNlQXZhaWxhYmxlV2lkdGgvdXNlUmVzaXplTm90aWZpZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3JlbmRlcmVycy9NYXhXaWR0aFJlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvTWF4V2lkdGhSZW5kZXJlci91c2VGb3V0RGV0ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3JlbmRlcmVycy9NYXhXaWR0aFJlbmRlcmVyL3VzZVdpZHRoQ2FsY3VsYXRvci9WaWV3RG9tUmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3JlbmRlcmVycy9NYXhXaWR0aFJlbmRlcmVyL3VzZVdpZHRoQ2FsY3VsYXRvci9nZXRWaWV3TWV0cmljcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvcmVuZGVyZXJzL01heFdpZHRoUmVuZGVyZXIvdXNlV2lkdGhDYWxjdWxhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvTWF4V2lkdGhSZW5kZXJlci91c2VXaWR0aENhbGN1bGF0b3IvdXNlSXNNb3VudGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvTWF4V2lkdGhSZW5kZXJlci91c2VXaWR0aENhbGN1bGF0b3Ivd2lkdGhDYWxjdWxhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvTWF4V2lkdGhSZW5kZXJlci91c2VXaWR0aENhbGN1bGF0b3Ivd2lkdGhDYWxjdWxhdG9yL2l0ZW1XaWR0aENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3JlbmRlcmVycy9NYXhXaWR0aFJlbmRlcmVyL3VzZVdpZHRoQ2FsY3VsYXRvci93aWR0aENhbGN1bGF0b3IvbmF2V2lkdGhDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvTWF4V2lkdGhSZW5kZXJlci91c2VXaWR0aENhbGN1bGF0b3Ivd2lkdGhDYWxjdWxhdG9yL251bWJlcldpZHRoQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvcmVuZGVyZXJzL01heFdpZHRoUmVuZGVyZXIvdXNlV2lkdGhDYWxjdWxhdG9yL3dpZHRoQ2FsY3VsYXRvci9wYWdlV2lkdGhDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9yZW5kZXJlcnMvTWF4V2lkdGhSZW5kZXJlci91c2VXaWR0aENhbGN1bGF0b3Ivd2lkdGhDYWxjdWxhdG9yL3RvdGFsV2lkdGhDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9za2lucy9Cb290c3RyYXBTa2luL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvc2tpbnMvQm9vdHN0cmFwU2tpbi9JdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9za2lucy9Cb290c3RyYXBTa2luL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1wYWdpbmF0aW9uL2xpYi9za2lucy9jcmVhdGVTa2luSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvc2tpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3ZpZXcvY3JlYXRlVmlld0l0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24vbGliL3ZpZXcvdXNlVmlldy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtcGFnaW5hdGlvbi9saWIvdmlldy92aWV3SXRlbVRvU2tpbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyJdLCJuYW1lcyI6WyJSZWNpcGVzTGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaFJlY2lwZXMiLCJyZWNpcGVzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIml0ZW1zIiwiY3VycmVudFBhZ2UiLCJtYXAiLCJyZWNpcGUiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiZmFGaWxlIiwiZmFIZWFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFeEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsWUFBUSxDQUFDRyw2REFBWSxDQUFDLENBQUQsQ0FBYixDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNILFFBQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTUksT0FBTyxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLE9BQU4sQ0FBY0csS0FBbEI7QUFBQSxHQUFOLENBQTNCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLE9BQU4sQ0FBY0ksV0FBbEI7QUFBQSxHQUFOLENBQS9CO0FBRUEsU0FDRSxtRUFDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUosT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQUMsTUFBTTtBQUFBLFdBQ2hCLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFZLFFBQUUsRUFBRSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRDtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxvRUFBSyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiYjcyZGY3MzgzMWI0Y2MxMjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJkLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdyZWFjdC1yZXNwb25zaXZlLXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhRmlsZSwgZmFIZWFydCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZldGNoUmVjaXBlcyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgUmVjaXBlc0xpc3QgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoUmVjaXBlcygxKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IHJlY2lwZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yZWNpcGVzLml0ZW1zKTtcclxuICBjb25zdCBjdXJyZW50UGFnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJlY2lwZXMuY3VycmVudFBhZ2UpO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlY2lwZXMubWFwKHJlY2lwZSA9PiAoXHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXszfT5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cmVjaXBlLnRodW1ibmFpbH0gYWx0PXtyZWNpcGUudGl0bGV9PjwvQ2FyZC5JbWc+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57IHJlY2lwZS50aXRsZSB9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PnsgcmVjaXBlLmluZ3JlZGllbnRzIH08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFGaWxlIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17IGZhSGVhcnQgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxDb2wgeHM9ezEyfT5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgdG90YWxQYWdlcz17MTAwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVzTGlzdDtcclxuIiwidmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWQgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgICByZXR1cm4gYXI7XG59O1xuaW1wb3J0IHsgemlwSXRlcmF0b3JzIH0gZnJvbSAnLi4vaGVscGVycy9pdGVyYXRvcic7XG5pbXBvcnQgeyBuYXJyb3dUb1dpZGVSYW5nZXMgfSBmcm9tICcuL3Jhbmdlcyc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3SXRlbSB9IGZyb20gJy4uL3ZpZXcnO1xuZXhwb3J0IGZ1bmN0aW9uIG5hcnJvd1RvV2lkZUNvbXBvc2l0aW9ucyhjdXJyZW50LCB0b3RhbCkge1xuICAgIHZhciBsZWZ0UmFuZ2VzLCByaWdodFJhbmdlcywgc3RhZ2dlcmVkUGFpcnMsIHN0YWdnZXJlZFBhaXJzXzEsIHN0YWdnZXJlZFBhaXJzXzFfMSwgX2EsIGxlZnRSYW5nZSwgcmlnaHRSYW5nZSwgZV8xXzE7XG4gICAgdmFyIGVfMSwgX2I7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgbGVmdFJhbmdlcyA9IG5hcnJvd1RvV2lkZVJhbmdlcygxLCBjdXJyZW50IC0gMSwgJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICByaWdodFJhbmdlcyA9IG5hcnJvd1RvV2lkZVJhbmdlcyhjdXJyZW50ICsgMSwgdG90YWwsICdyaWdodCcpO1xuICAgICAgICAgICAgICAgIHN0YWdnZXJlZFBhaXJzID0gc3RhZ2dlcmVkSXRlcmF0aW9uUmlnaHRGaXJzdChsZWZ0UmFuZ2VzLCByaWdodFJhbmdlcyk7XG4gICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgNiwgNywgOF0pO1xuICAgICAgICAgICAgICAgIHN0YWdnZXJlZFBhaXJzXzEgPSBfX3ZhbHVlcyhzdGFnZ2VyZWRQYWlycyksIHN0YWdnZXJlZFBhaXJzXzFfMSA9IHN0YWdnZXJlZFBhaXJzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoISFzdGFnZ2VyZWRQYWlyc18xXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgX2EgPSBzdGFnZ2VyZWRQYWlyc18xXzEudmFsdWUsIGxlZnRSYW5nZSA9IF9hLmxlZnRSYW5nZSwgcmlnaHRSYW5nZSA9IF9hLnJpZ2h0UmFuZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgX19zcHJlYWQoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2UHJldmlvdXMoY3VycmVudClcbiAgICAgICAgICAgICAgICAgICAgXSwgbGVmdFJhbmdlLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlKGN1cnJlbnQpXG4gICAgICAgICAgICAgICAgICAgIF0sIHJpZ2h0UmFuZ2UsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdk5leHQoY3VycmVudCwgdG90YWwpLFxuICAgICAgICAgICAgICAgICAgICBdKV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gNDtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBzdGFnZ2VyZWRQYWlyc18xXzEgPSBzdGFnZ2VyZWRQYWlyc18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgZV8xXzEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgZV8xID0geyBlcnJvcjogZV8xXzEgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhZ2dlcmVkUGFpcnNfMV8xICYmICFzdGFnZ2VyZWRQYWlyc18xXzEuZG9uZSAmJiAoX2IgPSBzdGFnZ2VyZWRQYWlyc18xLnJldHVybikpIF9iLmNhbGwoc3RhZ2dlcmVkUGFpcnNfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHN0YWdnZXJlZEl0ZXJhdGlvblJpZ2h0Rmlyc3QobGVmdFJhbmdlcywgcmlnaHRSYW5nZXMpIHtcbiAgICB2YXIgemlwcGVkUmFuZ2VzLCBpbml0aWFsLCBfYSwgX2IsIGxlZnRSYW5nZSwgX2MsIHJpZ2h0UmFuZ2UsIHppcHBlZFJhbmdlc18xLCB6aXBwZWRSYW5nZXNfMV8xLCBfZCwgbmV4dExlZnRSYW5nZSwgbmV4dFJpZ2h0UmFuZ2UsIGVfMl8xO1xuICAgIHZhciBlXzIsIF9lO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2YpIHtcbiAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHppcHBlZFJhbmdlcyA9IHppcEl0ZXJhdG9ycyhsZWZ0UmFuZ2VzLCByaWdodFJhbmdlcyk7XG4gICAgICAgICAgICAgICAgaW5pdGlhbCA9IHppcHBlZFJhbmdlcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWwuZG9uZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIF9hID0gX19yZWFkKGluaXRpYWwudmFsdWUsIDIpLCBfYiA9IF9hWzBdLCBsZWZ0UmFuZ2UgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgX2MgPSBfYVsxXSwgcmlnaHRSYW5nZSA9IF9jID09PSB2b2lkIDAgPyBbXSA6IF9jO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHsgbGVmdFJhbmdlOiBsZWZ0UmFuZ2UsIHJpZ2h0UmFuZ2U6IHJpZ2h0UmFuZ2UgfV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgIF9mLmxhYmVsID0gMjtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfZi50cnlzLnB1c2goWzIsIDksIDEwLCAxMV0pO1xuICAgICAgICAgICAgICAgIHppcHBlZFJhbmdlc18xID0gX192YWx1ZXMoemlwcGVkUmFuZ2VzKSwgemlwcGVkUmFuZ2VzXzFfMSA9IHppcHBlZFJhbmdlc18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDM7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKCEhemlwcGVkUmFuZ2VzXzFfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICBfZCA9IF9fcmVhZCh6aXBwZWRSYW5nZXNfMV8xLnZhbHVlLCAyKSwgbmV4dExlZnRSYW5nZSA9IF9kWzBdLCBuZXh0UmlnaHRSYW5nZSA9IF9kWzFdO1xuICAgICAgICAgICAgICAgIGlmICghbmV4dFJpZ2h0UmFuZ2UpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgIHJpZ2h0UmFuZ2UgPSBuZXh0UmlnaHRSYW5nZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB7IGxlZnRSYW5nZTogbGVmdFJhbmdlLCByaWdodFJhbmdlOiByaWdodFJhbmdlIH1dO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9mLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDU7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKCFuZXh0TGVmdFJhbmdlKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICBsZWZ0UmFuZ2UgPSBuZXh0TGVmdFJhbmdlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHsgbGVmdFJhbmdlOiBsZWZ0UmFuZ2UsIHJpZ2h0UmFuZ2U6IHJpZ2h0UmFuZ2UgfV07XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgIF9mLmxhYmVsID0gNztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB6aXBwZWRSYW5nZXNfMV8xID0gemlwcGVkUmFuZ2VzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMV07XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgZV8yXzEgPSBfZi5zZW50KCk7XG4gICAgICAgICAgICAgICAgZV8yID0geyBlcnJvcjogZV8yXzEgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMV07XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh6aXBwZWRSYW5nZXNfMV8xICYmICF6aXBwZWRSYW5nZXNfMV8xLmRvbmUgJiYgKF9lID0gemlwcGVkUmFuZ2VzXzEucmV0dXJuKSkgX2UuY2FsbCh6aXBwZWRSYW5nZXNfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhY3RpdmVQYWdlKGN1cnJlbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlVmlld0l0ZW0ucGFnZShjdXJyZW50LCB0cnVlKTtcbn1cbmZ1bmN0aW9uIG5hdlByZXZpb3VzKGN1cnJlbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlVmlld0l0ZW0ubmF2KCdwcmV2aW91cycsIGN1cnJlbnQgPiAxID8gY3VycmVudCAtIDEgOiB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gbmF2TmV4dChjdXJyZW50LCB0b3RhbCkge1xuICAgIHJldHVybiBjcmVhdGVWaWV3SXRlbS5uYXYoJ25leHQnLCBjdXJyZW50IDwgdG90YWwgPyBjdXJyZW50ICsgMSA6IHVuZGVmaW5lZCk7XG59XG4iLCJ2YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZCA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWQpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICAgIHJldHVybiBhcjtcbn07XG5pbXBvcnQgeyBjcmVhdGVWaWV3SXRlbSB9IGZyb20gJy4uL3ZpZXcnO1xuZXhwb3J0IHsgbmFycm93VG9XaWRlVmlld0l0ZW1SYW5nZXMgYXMgbmFycm93VG9XaWRlUmFuZ2VzIH07XG5mdW5jdGlvbiBuYXJyb3dUb1dpZGVWaWV3SXRlbVJhbmdlcyhzdGFydCwgZW5kLCBlbGxpcHNpc1Bvcykge1xuICAgIHZhciBfYSwgX2IsIHJhbmdlLCBlXzFfMTtcbiAgICB2YXIgZV8xLCBfYztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfZC50cnlzLnB1c2goWzAsIDUsIDYsIDddKTtcbiAgICAgICAgICAgICAgICBfYSA9IF9fdmFsdWVzKG5hcnJvd1RvV2lkZU51bWJlclJhbmdlcyhzdGFydCwgZW5kLCBlbGxpcHNpc1BvcykpLCBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCEhX2IuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBfYi52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0b1ZpZXdJdGVtcyhyYW5nZSwgZWxsaXBzaXNQb3MpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgX2QubGFiZWwgPSAzO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIF9iID0gX2EubmV4dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBlXzFfMSA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlXzEgPSB7IGVycm9yOiBlXzFfMSB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYiAmJiAhX2IuZG9uZSAmJiAoX2MgPSBfYS5yZXR1cm4pKSBfYy5jYWxsKF9hKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gbmFycm93VG9XaWRlTnVtYmVyUmFuZ2VzKGZpcnN0LCBsYXN0LCBlbGxpcHNpc1Bvcykge1xuICAgIHZhciBmdWxsV2lkdGgsIGl0ZXJhdGlvbldpZHRoLCByYW5nZTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGggPSBnZXRJbmNsdXNpdmVXaWR0aChmaXJzdCwgbGFzdCk7XG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoIShpdGVyYXRpb25XaWR0aCA8IGZ1bGxXaWR0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIHJhbmdlID0gZ2V0Q29sbGFwc2VkUmFuZ2UoZmlyc3QsIGxhc3QsIGl0ZXJhdGlvbldpZHRoLCBlbGxpcHNpc1Bvcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyYW5nZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmFuZ2VdO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaXRlcmF0aW9uV2lkdGgrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0RnVsbFJhbmdlKGZpcnN0LCBsYXN0KV07XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q29sbGFwc2VkUmFuZ2UoZmlyc3QsIGxhc3QsIHJlcXVpcmVkV2lkdGgsIGVsbGlwc2lzUG9zKSB7XG4gICAgaWYgKHJlcXVpcmVkV2lkdGggPCAzKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIHdpZHRoT2ZSYW5nZSA9IHJlcXVpcmVkV2lkdGggLSAyO1xuICAgIHJldHVybiBlbGxpcHNpc1BvcyA9PT0gJ2xlZnQnXG4gICAgICAgID8gX19zcHJlYWQoW2ZpcnN0LCAnLi4uJ10sIGdldEZ1bGxSYW5nZShsYXN0IC0gKHdpZHRoT2ZSYW5nZSAtIDEpLCBsYXN0KSkgOiBfX3NwcmVhZChnZXRGdWxsUmFuZ2UoZmlyc3QsIGZpcnN0ICsgKHdpZHRoT2ZSYW5nZSAtIDEpKSwgWycuLi4nLCBsYXN0XSk7XG59XG5mdW5jdGlvbiBnZXRJbmNsdXNpdmVXaWR0aChmaXJzdCwgbGFzdCkge1xuICAgIHJldHVybiBsYXN0IC0gZmlyc3QgKyAxO1xufVxuZnVuY3Rpb24gdG9WaWV3SXRlbXMobnVtYmVyUmFuZ2UsIGVsbGlwc2lzUG9zKSB7XG4gICAgcmV0dXJuIG51bWJlclJhbmdlLm1hcChmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPT09ICcuLi4nKVxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVZpZXdJdGVtLmVsbGlwc2lzKGVsbGlwc2lzUG9zKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVZpZXdJdGVtLnBhZ2UobnVtYmVyLCBmYWxzZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRGdWxsUmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIGlmIChlbmQgPCBzdGFydClcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KGVuZCAtIHN0YXJ0ICsgMSkua2V5cygpLCBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSArIHN0YXJ0OyB9KTtcbn1cbiIsInZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHppcEl0ZXJhdG9ycyh4cywgeXMpIHtcbiAgICB2YXIgeFJlc3VsdCwgeVJlc3VsdDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoIXRydWUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHhSZXN1bHQgPSB4cy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgeVJlc3VsdCA9IHlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoeFJlc3VsdC5kb25lICYmIHlSZXN1bHQuZG9uZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgW3hSZXN1bHQudmFsdWUsIHlSZXN1bHQudmFsdWVdXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMF07XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxhc3RXaGVyZSh4cywgcHJlZGljYXRlKSB7XG4gICAgdmFyIGVfMSwgX2E7XG4gICAgdmFyIGxhc3RTb0ZhcjtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB4c18xID0gX192YWx1ZXMoeHMpLCB4c18xXzEgPSB4c18xLm5leHQoKTsgIXhzXzFfMS5kb25lOyB4c18xXzEgPSB4c18xLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHggPSB4c18xXzEudmFsdWU7XG4gICAgICAgICAgICBpZiAoIXByZWRpY2F0ZSh4KSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGxhc3RTb0ZhciA9IHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh4c18xXzEgJiYgIXhzXzFfMS5kb25lICYmIChfYSA9IHhzXzEucmV0dXJuKSkgX2EuY2FsbCh4c18xKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBsYXN0U29GYXI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXRlcmF0b3JOZXh0KHhzKSB7XG4gICAgdmFyIHhSZXN1bHQgPSB4cy5uZXh0KCk7XG4gICAgcmV0dXJuIHhSZXN1bHQuZG9uZSA/IHVuZGVmaW5lZCA6IHhSZXN1bHQudmFsdWU7XG59XG4iLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VW56aXAob2JqZWN0KSB7XG4gICAgdmFyIGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhvYmplY3QpO1xuICAgIHZhciBrZXlzID0gZW50cmllcy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksIGtleSA9IF9iWzBdLCBfID0gX2JbMV07XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlcyA9IGVudHJpZXMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDIpLCBfID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2tleXMsIHZhbHVlc107XG59XG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0WmlwKGtleXMsIHZhbHVlcykge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcbiAgICAgICAgcmV0W2tleV0gPSB2YWx1ZXNbaW5kZXhdO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQpIHtcbiAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIHJldHVybiAoc3R5bGVNZXRyaWNUb0ludChzdHlsZS5tYXJnaW5MZWZ0KSArXG4gICAgICAgIGdldFdpZHRoKGVsZW1lbnQpICtcbiAgICAgICAgc3R5bGVNZXRyaWNUb0ludChzdHlsZS5tYXJnaW5SaWdodCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnRXaWR0aChlbGVtZW50KSB7XG4gICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICByZXR1cm4gKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLVxuICAgICAgICBzdHlsZU1ldHJpY1RvSW50KHN0eWxlLmJvcmRlckxlZnRXaWR0aCkgLVxuICAgICAgICBzdHlsZU1ldHJpY1RvSW50KHN0eWxlLnBhZGRpbmdMZWZ0KSAtXG4gICAgICAgIHN0eWxlTWV0cmljVG9JbnQoc3R5bGUucGFkZGluZ1JpZ2h0KSAtXG4gICAgICAgIHN0eWxlTWV0cmljVG9JbnQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vbkNvbnRlbnRXaWR0aChlbGVtZW50KSB7XG4gICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICByZXR1cm4gKHN0eWxlTWV0cmljVG9JbnQoc3R5bGUubWFyZ2luTGVmdCkgK1xuICAgICAgICBzdHlsZU1ldHJpY1RvSW50KHN0eWxlLmJvcmRlckxlZnRXaWR0aCkgK1xuICAgICAgICBzdHlsZU1ldHJpY1RvSW50KHN0eWxlLnBhZGRpbmdMZWZ0KSArXG4gICAgICAgIHN0eWxlTWV0cmljVG9JbnQoc3R5bGUucGFkZGluZ1JpZ2h0KSArXG4gICAgICAgIHN0eWxlTWV0cmljVG9JbnQoc3R5bGUuYm9yZGVyUmlnaHRXaWR0aCkgK1xuICAgICAgICBzdHlsZU1ldHJpY1RvSW50KHN0eWxlLm1hcmdpblJpZ2h0KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lkdGgoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xufVxuZnVuY3Rpb24gc3R5bGVNZXRyaWNUb0ludChzdHlsZUF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBzdHlsZUF0dHJpYnV0ZSA/IHBhcnNlSW50KHN0eWxlQXR0cmlidXRlKSA6IDA7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1bShpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgd2lkdGgpIHsgcmV0dXJuIGFjYyArIHdpZHRoOyB9LCAwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYW5hdGl6ZUludGVnZXIobWF5YmVJbnRlZ2VyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBtYXliZUludGVnZXIgPT09ICdudW1iZXInICYmIE51bWJlci5pc0ludGVnZXIobWF5YmVJbnRlZ2VyKVxuICAgICAgICA/IG1heWJlSW50ZWdlclxuICAgICAgICA6IDA7XG59XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbmFycm93VG9XaWRlQ29tcG9zaXRpb25zIH0gZnJvbSAnLi9jb21wb3NpdGlvbnMnO1xuaW1wb3J0IHsgQm9vdHN0cmFwU2tpbiB9IGZyb20gJy4vc2tpbnMnO1xuaW1wb3J0IHsgdXNlVmlldyB9IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgQXV0b1dpZHRoUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcnMvQXV0b1dpZHRoUmVuZGVyZXInO1xuaW1wb3J0IE1heFdpZHRoUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcnMvTWF4V2lkdGhSZW5kZXJlcic7XG5pbXBvcnQgeyBzYW5hdGl6ZUludGVnZXIgfSBmcm9tICcuL2hlbHBlcnMvdXRpbCc7XG5leHBvcnQgZGVmYXVsdCBtZW1vKFBhZ2luYXRpb24pO1xuZnVuY3Rpb24gUGFnaW5hdGlvbihfYSkge1xuICAgIHZhciBwcm9wc0N1cnJlbnQgPSBfYS5jdXJyZW50LCBwcm9wc1RvdGFsID0gX2EudG90YWwsIGhhbmRsZVBhZ2VDaGFuZ2UgPSBfYS5vblBhZ2VDaGFuZ2UsIG1heFdpZHRoID0gX2EubWF4V2lkdGg7XG4gICAgdmFyIHRvdGFsID0gc2FuYXRpemVJbnRlZ2VyKHByb3BzVG90YWwpO1xuICAgIHZhciBjdXJyZW50ID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oc2FuYXRpemVJbnRlZ2VyKHByb3BzQ3VycmVudCksIHRvdGFsKSk7XG4gICAgdmFyIFNraW4gPSBCb290c3RyYXBTa2luO1xuICAgIHZhciBWaWV3ID0gdXNlVmlldyhTa2luLCBoYW5kbGVQYWdlQ2hhbmdlKTtcbiAgICB2YXIgbmFycm93VG9XaWRlQ29tcG9zaXRpb25zUHJvdmlkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuYXJyb3dUb1dpZGVDb21wb3NpdGlvbnMoY3VycmVudCwgdG90YWwpO1xuICAgIH07XG4gICAgaWYgKHRvdGFsIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1heFdpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0b1dpZHRoUmVuZGVyZXIsIF9fYXNzaWduKHt9LCB7IG5hcnJvd1RvV2lkZUNvbXBvc2l0aW9uc1Byb3ZpZGVyOiBuYXJyb3dUb1dpZGVDb21wb3NpdGlvbnNQcm92aWRlciwgVmlldzogVmlldyB9KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWF4V2lkdGhSZW5kZXJlciwgX19hc3NpZ24oe30sIHsgbWF4V2lkdGg6IG1heFdpZHRoLCBuYXJyb3dUb1dpZGVDb21wb3NpdGlvbnNQcm92aWRlcjogbmFycm93VG9XaWRlQ29tcG9zaXRpb25zUHJvdmlkZXIsIFZpZXc6IFZpZXcgfSkpKTtcbiAgICB9XG59XG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCBNYXhXaWR0aFJlbmRlcmVyIGZyb20gJy4uL01heFdpZHRoUmVuZGVyZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXZhaWxhYmxlV2lkdGggfSBmcm9tICcuL3VzZUF2YWlsYWJsZVdpZHRoJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dG9XaWR0aFJlbmRlcmVyKHByb3BzKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBfYiA9IF9fcmVhZCh1c2VTdGF0ZShudWxsKSwgMiksIHZpZXdFbGVtZW50ID0gX2JbMF0sIHNldFZpZXdFbGVtZW50ID0gX2JbMV07XG4gICAgdmFyIHdpZHRoID0gKF9hID0gdXNlQXZhaWxhYmxlV2lkdGgodmlld0VsZW1lbnQpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1heFdpZHRoUmVuZGVyZXIsIF9fYXNzaWduKHsgbWF4V2lkdGg6IHdpZHRoLCByZWY6IHNldFZpZXdFbGVtZW50IH0sIHByb3BzKSk7XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZW50V2lkdGggfSBmcm9tICcuL3VzZUNvbnRlbnRXaWR0aCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXZhaWxhYmxlV2lkdGgoZWxlbWVudCkge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gdXNlQ29udGVudFdpZHRoKChfYSA9IGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5wYXJlbnRFbGVtZW50KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB1bmRlZmluZWQpO1xufVxuIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldENvbnRlbnRXaWR0aCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3R5bGUnO1xuaW1wb3J0IHsgdXNlUmVzaXplTm90aWZpZXIgfSBmcm9tICcuL3VzZVJlc2l6ZU5vdGlmaWVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250ZW50V2lkdGgoZWxlbWVudCkge1xuICAgIHZhciBfYSA9IF9fcmVhZCh1c2VTdGF0ZSgpLCAyKSwgd2lkdGggPSBfYVswXSwgc2V0V2lkdGggPSBfYVsxXTtcbiAgICBmdW5jdGlvbiBzeW5jV2lkdGgoKSB7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGVsZW1lbnQgPyBnZXRDb250ZW50V2lkdGgoZWxlbWVudCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh3aWR0aCAhPT0gbmV3V2lkdGgpIHtcbiAgICAgICAgICAgIHNldFdpZHRoKG5ld1dpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VSZXNpemVOb3RpZmllcihlbGVtZW50LCBzeW5jV2lkdGgpO1xuICAgIHVzZUxheW91dEVmZmVjdChzeW5jV2lkdGgpO1xuICAgIHJldHVybiB3aWR0aDtcbn1cbiIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlUmVzaXplTm90aWZpZXIoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FsbEJhY2tSZWYgPSB1c2VSZWYoY2FsbGJhY2spO1xuICAgIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxCYWNrUmVmLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgICB9LCBbY2FsbGJhY2tdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIod2l0aFJlc2l6ZUxvb3BEZXRlY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbEJhY2tSZWYuY3VycmVudCgpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH07XG4gICAgfSwgW2VsZW1lbnRdKTtcbn1cbmZ1bmN0aW9uIHdpdGhSZXNpemVMb29wRGV0ZWN0aW9uKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbnRyaWVzLCByZXNpemVPYnNlcnZlcikge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5LnRhcmdldDsgfSk7XG4gICAgICAgIHZhciByZWN0c0JlZm9yZSA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHZhciByZWN0c0FmdGVyID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyB9KTtcbiAgICAgICAgdmFyIGNoYW5nZWRFbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoXywgaSkgeyByZXR1cm4gIWFyZVJlY3RTaXplc0VxdWFsKHJlY3RzQmVmb3JlW2ldLCByZWN0c0FmdGVyW2ldKTsgfSk7XG4gICAgICAgIGNoYW5nZWRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5vYnNlcnZlVW50aWxOZXh0RnJhbWUoZWxlbWVudCwgcmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdW5vYnNlcnZlVW50aWxOZXh0RnJhbWUoZWxlbWVudCwgcmVzaXplT2JzZXJ2ZXIpIHtcbiAgICByZXNpemVPYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFyZVJlY3RTaXplc0VxdWFsKHJlY3QxLCByZWN0Mikge1xuICAgIHJldHVybiByZWN0MS53aWR0aCA9PT0gcmVjdDIud2lkdGggJiYgcmVjdDEuaGVpZ2h0ID09PSByZWN0Mi5oZWlnaHQ7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbGFzdFdoZXJlLCBpdGVyYXRvck5leHQgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2l0ZXJhdG9yJztcbmltcG9ydCB7IHVzZVdpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4vdXNlV2lkdGhDYWxjdWxhdG9yJztcbmltcG9ydCB7IHVzZUZvdXREZXRlY3RvciB9IGZyb20gJy4vdXNlRm91dERldGVjdG9yJztcbnZhciBNYXhXaWR0aFJlbmRlcmVyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIGZvcndhcmRlZFZpZXdSZWYpIHtcbiAgICB2YXIgbWF4V2lkdGggPSBfYS5tYXhXaWR0aCwgbmFycm93VG9XaWRlQ29tcG9zaXRpb25zUHJvdmlkZXIgPSBfYS5uYXJyb3dUb1dpZGVDb21wb3NpdGlvbnNQcm92aWRlciwgVmlldyA9IF9hLlZpZXc7XG4gICAgdmFyIHdpZHRoQ2FsY3VsYXRvciA9IHVzZVdpZHRoQ2FsY3VsYXRvcihWaWV3KTtcbiAgICB2YXIgbG9jYWxWaWV3UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGZ1bmN0aW9uIHNldFZpZXdSZWYocmVmKSB7XG4gICAgICAgIHR5cGVvZiBmb3J3YXJkZWRWaWV3UmVmID09PSAnZnVuY3Rpb24nICYmIGZvcndhcmRlZFZpZXdSZWYocmVmKTtcbiAgICAgICAgbG9jYWxWaWV3UmVmLmN1cnJlbnQgPSByZWY7XG4gICAgfVxuICAgIHVzZUZvdXREZXRlY3RvcihmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRJdGVtc0RvbUVsZW1lbnRzKGxvY2FsVmlld1JlZi5jdXJyZW50KTsgfSwgJ2NsZWFyQ2FjaGUnIGluIHdpZHRoQ2FsY3VsYXRvciA/IHdpZHRoQ2FsY3VsYXRvci5jbGVhckNhY2hlIDogZnVuY3Rpb24gKCkgeyB9KTtcbiAgICBpZiAoJ21lYXN1cmluZ0NvbXBvbmVudE5lZWRzUmVuZGVyJyBpbiB3aWR0aENhbGN1bGF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoQ2FsY3VsYXRvci5tZWFzdXJpbmdDb21wb25lbnROZWVkc1JlbmRlcjtcbiAgICB9XG4gICAgdmFyIGNvbXBvc2l0aW9uID0gZ2V0TGFyZ2VzdEZpdHRpbmdDb21wb3NpdGlvbldpdGhGYWxsYmFjayhuYXJyb3dUb1dpZGVDb21wb3NpdGlvbnNQcm92aWRlciwgd2lkdGhDYWxjdWxhdG9yLmdldFdpZHRoLCBtYXhXaWR0aCk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywgeyBpdGVtczogY29tcG9zaXRpb24sIHJlZjogc2V0Vmlld1JlZiB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTWF4V2lkdGhSZW5kZXJlcjtcbmZ1bmN0aW9uIGdldExhcmdlc3RGaXR0aW5nQ29tcG9zaXRpb25XaXRoRmFsbGJhY2soZ2V0TmFycm93VG9XaWRlQ29tcG9zaXRpb25zLCBnZXRDb21wb3NpdGlvbldpZHRoLCBtYXhXaWR0aCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIG5hcnJvd1RvV2lkZUNvbXBvc2l0aW9ucyA9IGdldE5hcnJvd1RvV2lkZUNvbXBvc2l0aW9ucygpO1xuICAgIHZhciBmaXJzdENvbXBvc2l0aW9uID0gKF9hID0gaXRlcmF0b3JOZXh0KG5hcnJvd1RvV2lkZUNvbXBvc2l0aW9ucykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xuICAgIHZhciBkb2VzQ29tcG9zaXRpb25GaXQgPSBmdW5jdGlvbiAoY29tcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGdldENvbXBvc2l0aW9uV2lkdGgoY29tcG9zaXRpb24pIDwgbWF4V2lkdGg7XG4gICAgfTtcbiAgICByZXR1cm4gKF9iID0gbGFzdFdoZXJlKG5hcnJvd1RvV2lkZUNvbXBvc2l0aW9ucywgZG9lc0NvbXBvc2l0aW9uRml0KSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmlyc3RDb21wb3NpdGlvbjtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1zRG9tRWxlbWVudHModmlld0RvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gdmlld0RvbUVsZW1lbnQgJiYgQXJyYXkuZnJvbSh2aWV3RG9tRWxlbWVudC5jaGlsZHJlbik7XG59XG4iLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCB7IGdldFdpZHRoIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zdHlsZSc7XG5leHBvcnQgZnVuY3Rpb24gdXNlRm91dERldGVjdG9yKGdldEVsZW1lbnRzLCBoYW5kbGVGb3V0KSB7XG4gICAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZ2V0RWxlbWVudHMoKTtcbiAgICAgICAgaWYgKCFlbGVtZW50cylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmV0dXJuIHNldHVwV2lkdGhDaGFuZ2VBZnRlclJlbmRlckxpc3RlbmVyKGVsZW1lbnRzLCBoYW5kbGVGb3V0KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldHVwV2lkdGhDaGFuZ2VBZnRlclJlbmRlckxpc3RlbmVyKGVsZW1lbnRzLCBoYW5kbGVXaWR0aENoYW5nZUFmdGVyUmVuZGVyKSB7XG4gICAgdmFyIGdldEluaXRpYWxXaWR0aCA9IGNyZWF0ZUluaXRpYWxXaWR0aFByb3ZpZGVyKGVsZW1lbnRzKTtcbiAgICB2YXIgaGFzV2lkdGhDaGFuZ2VkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGlzU2lnbmlmaWNhbnREaWZmZXJlbmNlKGdldEluaXRpYWxXaWR0aChlbGVtZW50KSwgZ2V0V2lkdGgoZWxlbWVudCkpO1xuICAgIH07XG4gICAgcmV0dXJuIHNldHVwUmVzaXplT2JzZXJ2ZXIoZWxlbWVudHMsIGZ1bmN0aW9uIChtYXliZVJlc2l6ZWRFbGVtZW50cykge1xuICAgICAgICBpZiAobWF5YmVSZXNpemVkRWxlbWVudHMuc29tZShoYXNXaWR0aENoYW5nZWQpKSB7XG4gICAgICAgICAgICBoYW5kbGVXaWR0aENoYW5nZUFmdGVyUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxXaWR0aFByb3ZpZGVyKGVsZW1lbnRzKSB7XG4gICAgdmFyIGluaXRpYWxXaWR0aHMgPSBlbGVtZW50cy5tYXAoZ2V0V2lkdGgpO1xuICAgIHJldHVybiBmdW5jdGlvbiBnZXRJbml0aWFsV2lkdGgoZWxlbWVudCkge1xuICAgICAgICB2YXIgaW5kZXggPSBlbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gaW5pdGlhbFdpZHRoc1tpbmRleF07XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNldHVwUmVzaXplT2JzZXJ2ZXIoZWxlbWVudHMsIGhhbmRsZUVsZW1lbnRzUmVzaXplZCkge1xuICAgIHZhciByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBlbnRyaWVzLm1hcChnZXRUYXJnZXRFbGVtZW50KTtcbiAgICAgICAgaGFuZGxlRWxlbWVudHNSZXNpemVkKGVsZW1lbnRzKTtcbiAgICB9KTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpOyB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpOyB9O1xufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0RWxlbWVudChlbnRyeSkge1xuICAgIHJldHVybiBlbnRyeS50YXJnZXQ7XG59XG5mdW5jdGlvbiBpc1NpZ25pZmljYW50RGlmZmVyZW5jZSh3aWR0aDEsIHdpZHRoMikge1xuICAgIHJldHVybiBNYXRoLmFicyh3aWR0aDEgLSB3aWR0aDIpID4gMC41O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBtZW1vKFZpZXdEb21SZXNvbHZlcik7XG5mdW5jdGlvbiBWaWV3RG9tUmVzb2x2ZXIoX2EpIHtcbiAgICB2YXIgVmlldyA9IF9hLnZpZXcsIHZpZXdEb21Db25zdW1lciA9IF9hLm9uRG9tUHJvdmlkYWJsZTtcbiAgICB2YXIgY29tcG9uZW50VG9SZW5kZXI7XG4gICAgdmlld0RvbUNvbnN1bWVyKGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVEb20pIHtcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlldywgeyBpdGVtczogaXRlbXMsIHJlZjogZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnQgJiYgcmVzb2x2ZURvbShlbGVtZW50KTsgfSB9KSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRUb1JlbmRlcjtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5pbXBvcnQgeyBvYmplY3RVbnppcCwgb2JqZWN0WmlwIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9vYmplY3QnO1xuaW1wb3J0IHsgZ2V0Tm9uQ29udGVudFdpZHRoLCBnZXRFbGVtZW50V2lkdGggfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0eWxlJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3TWV0cmljcyhnZXRWaWV3RG9tLCBrZXllZEl0ZW1zVG9NZWFzdXJlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIGl0ZW1LZXlzLCBpdGVtcywgdmlld0RvbTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3JlYWQob2JqZWN0VW56aXAoa2V5ZWRJdGVtc1RvTWVhc3VyZSksIDIpLCBpdGVtS2V5cyA9IF9hWzBdLCBpdGVtcyA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRWaWV3RG9tKGl0ZW1zKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB2aWV3RG9tID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZ2V0Vmlld01ldHJpY3NGcm9tVmlld0RvbSh2aWV3RG9tLCBpdGVtS2V5cyldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFZpZXdNZXRyaWNzRnJvbVZpZXdEb20odmlld0NvbnRhaW5lckVsZW1lbnQsIGl0ZW1LZXlzKSB7XG4gICAgdmFyIHZpZXdJdGVtRWxlbWVudHMgPSBBcnJheS5mcm9tKHZpZXdDb250YWluZXJFbGVtZW50LmNoaWxkcmVuKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvdXRlckZyYW1lV2lkdGg6IGdldE5vbkNvbnRlbnRXaWR0aCh2aWV3Q29udGFpbmVyRWxlbWVudCksXG4gICAgICAgIGl0ZW1XaWR0aHM6IGdldEl0ZW1XaWR0aHNGcm9tSXRlbURvbUVsZW1lbnRzKGl0ZW1LZXlzLCB2aWV3SXRlbUVsZW1lbnRzKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SXRlbVdpZHRoc0Zyb21JdGVtRG9tRWxlbWVudHMoaXRlbUtleXMsIGl0ZW1FbGVtZW50cykge1xuICAgIHZhciBpdGVtV2lkdGhzID0gaXRlbUVsZW1lbnRzLm1hcChnZXRFbGVtZW50V2lkdGgpO1xuICAgIHJldHVybiBvYmplY3RaaXAoaXRlbUtleXMsIGl0ZW1XaWR0aHMpO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3SXRlbSB9IGZyb20gJy4uLy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgY3JlYXRlV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi93aWR0aENhbGN1bGF0b3InO1xuaW1wb3J0IFZpZXdEb21SZXNvbHZlciBmcm9tICcuL1ZpZXdEb21SZXNvbHZlcic7XG5pbXBvcnQgeyBnZXRWaWV3TWV0cmljcyB9IGZyb20gJy4vZ2V0Vmlld01ldHJpY3MnO1xuaW1wb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSAnLi91c2VJc01vdW50ZWQnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVdpZHRoQ2FsY3VsYXRvcih2aWV3KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUoe30pLCAyKSwgX2IgPSBfYVswXSwgY2FsY3VsYXRvciA9IF9iLmNhbGN1bGF0b3IsIHZhbGlkRm9yVmlldyA9IF9iLnZhbGlkRm9yVmlldywgc2V0Q2FsY3VsYXRvcldpdGhWaWV3ID0gX2FbMV07XG4gICAgdmFyIGlzTW91bnRlZCA9IHVzZUlzTW91bnRlZCgpO1xuICAgIHZhciByZXNldENhbGN1bGF0b3IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRDYWxjdWxhdG9yV2l0aFZpZXcoe30pOyB9LCBbXSk7XG4gICAgdmFyIHNldHVwQ2FsY3VsYXRvciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2aWV3RG9tUHJvdmlkZXIpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhbGN1bGF0b3JSb290TWV0cmljcywgY2FsY3VsYXRvcjtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0Vmlld01ldHJpY3Modmlld0RvbVByb3ZpZGVyLCByb290TWV0cmljSXRlbXNUb01lYXN1cmUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0b3JSb290TWV0cmljcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc01vdW50ZWQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRvciA9IGNyZWF0ZVdpZHRoQ2FsY3VsYXRvcihjYWxjdWxhdG9yUm9vdE1ldHJpY3MpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDYWxjdWxhdG9yV2l0aFZpZXcoeyBjYWxjdWxhdG9yOiBjYWxjdWxhdG9yLCB2YWxpZEZvclZpZXc6IHZpZXcgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0sIFt2aWV3LCBpc01vdW50ZWRdKTtcbiAgICBpZiAoIWNhbGN1bGF0b3IgfHwgdmFsaWRGb3JWaWV3ICE9PSB2aWV3KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZWFzdXJpbmdDb21wb25lbnROZWVkc1JlbmRlcjogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld0RvbVJlc29sdmVyLCB7IHZpZXc6IHZpZXcsIG9uRG9tUHJvdmlkYWJsZTogc2V0dXBDYWxjdWxhdG9yIH0pKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0V2lkdGg6IGNhbGN1bGF0b3IsXG4gICAgICAgIGNsZWFyQ2FjaGU6IHJlc2V0Q2FsY3VsYXRvcixcbiAgICB9O1xufVxudmFyIHJvb3RNZXRyaWNJdGVtc1RvTWVhc3VyZSA9IHtcbiAgICBub3JtYWxQYWdlU2luZ2xlRGlnaXQ6IGNyZWF0ZVZpZXdJdGVtLnBhZ2UoOCwgZmFsc2UpLFxuICAgIG5vcm1hbFBhZ2VEb3VibGVEaWdpdDogY3JlYXRlVmlld0l0ZW0ucGFnZSg4OCwgZmFsc2UpLFxuICAgIGFjdGl2ZVBhZ2VTaW5nbGVEaWdpdDogY3JlYXRlVmlld0l0ZW0ucGFnZSg4LCB0cnVlKSxcbiAgICBhY3RpdmVQYWdlRG91YmxlRGlnaXQ6IGNyZWF0ZVZpZXdJdGVtLnBhZ2UoODgsIHRydWUpLFxuICAgIG5hdlByZXZpb3VzRW5hYmxlZDogY3JlYXRlVmlld0l0ZW0ubmF2KCdwcmV2aW91cycsIDApLFxuICAgIG5hdlByZXZpb3VzRGlzYWJsZWQ6IGNyZWF0ZVZpZXdJdGVtLm5hdigncHJldmlvdXMnKSxcbiAgICBuYXZOZXh0RW5hYmxlZDogY3JlYXRlVmlld0l0ZW0ubmF2KCduZXh0JywgMCksXG4gICAgbmF2TmV4dERpc2FibGVkOiBjcmVhdGVWaWV3SXRlbS5uYXYoJ25leHQnKSxcbiAgICBlbGxpcHNpczogY3JlYXRlVmlld0l0ZW0uZWxsaXBzaXMoJ2xlZnQnKSxcbn07XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNNb3VudGVkKCkge1xuICAgIHZhciBpc01vdW50ZWRSZWYgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7IHJldHVybiBpc01vdW50ZWRSZWYuY3VycmVudDsgfSwgW10pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlVG90YWxXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL3RvdGFsV2lkdGhDYWxjdWxhdG9yJztcbmltcG9ydCB7IGNyZWF0ZUl0ZW1XaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL2l0ZW1XaWR0aENhbGN1bGF0b3InO1xuaW1wb3J0IHsgY3JlYXRlTmF2V2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi9uYXZXaWR0aENhbGN1bGF0b3InO1xuaW1wb3J0IHsgY3JlYXRlUGFnZVdpZHRoQ2FsY3VsYXRvciB9IGZyb20gJy4vcGFnZVdpZHRoQ2FsY3VsYXRvcic7XG5pbXBvcnQgeyBjcmVhdGVOdW1iZXJXaWR0aENhbGN1bGF0b3IgfSBmcm9tICcuL251bWJlcldpZHRoQ2FsY3VsYXRvcic7XG5leHBvcnQgeyBjcmVhdGVHcmFwaCBhcyBjcmVhdGVXaWR0aENhbGN1bGF0b3IgfTtcbmZ1bmN0aW9uIGNyZWF0ZUdyYXBoKHJvb3RNZXRyaWNzKSB7XG4gICAgdmFyIGl0ZW1XaWR0aHMgPSByb290TWV0cmljcy5pdGVtV2lkdGhzLCBvdXRlckZyYW1lV2lkdGggPSByb290TWV0cmljcy5vdXRlckZyYW1lV2lkdGg7XG4gICAgcmV0dXJuIGNyZWF0ZVRvdGFsV2lkdGhDYWxjdWxhdG9yKHtcbiAgICAgICAgZ2V0SXRlbVdpZHRoOiBjcmVhdGVJdGVtV2lkdGhDYWxjdWxhdG9yKHtcbiAgICAgICAgICAgIGdldFBhZ2VXaWR0aDogY3JlYXRlUGFnZVdpZHRoQ2FsY3VsYXRvcih7XG4gICAgICAgICAgICAgICAgZ2V0Tm9ybWFsUGFnZVdpZHRoOiBjcmVhdGVOdW1iZXJXaWR0aENhbGN1bGF0b3Ioe1xuICAgICAgICAgICAgICAgICAgICBzaW5nbGVEaWdpdDogaXRlbVdpZHRocy5ub3JtYWxQYWdlU2luZ2xlRGlnaXQsXG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZURpZ2l0OiBpdGVtV2lkdGhzLm5vcm1hbFBhZ2VEb3VibGVEaWdpdCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBnZXRBY3RpdmVQYWdlV2lkdGg6IGNyZWF0ZU51bWJlcldpZHRoQ2FsY3VsYXRvcih7XG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZURpZ2l0OiBpdGVtV2lkdGhzLmFjdGl2ZVBhZ2VTaW5nbGVEaWdpdCxcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlRGlnaXQ6IGl0ZW1XaWR0aHMuYWN0aXZlUGFnZURvdWJsZURpZ2l0LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBnZXROYXZXaWR0aDogY3JlYXRlTmF2V2lkdGhDYWxjdWxhdG9yKHtcbiAgICAgICAgICAgICAgICBwcmV2aW91czoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBpdGVtV2lkdGhzLm5hdlByZXZpb3VzRW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW1XaWR0aHMubmF2UHJldmlvdXNEaXNhYmxlZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5leHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogaXRlbVdpZHRocy5uYXZOZXh0RW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW1XaWR0aHMubmF2TmV4dERpc2FibGVkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGVsbGlwc2lzV2lkdGg6IGl0ZW1XaWR0aHMuZWxsaXBzaXMsXG4gICAgICAgIH0pLFxuICAgICAgICBvdXRlckZyYW1lV2lkdGg6IG91dGVyRnJhbWVXaWR0aCxcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtV2lkdGhDYWxjdWxhdG9yKF9hKSB7XG4gICAgdmFyIGdldFBhZ2VXaWR0aCA9IF9hLmdldFBhZ2VXaWR0aCwgZ2V0TmF2V2lkdGggPSBfYS5nZXROYXZXaWR0aCwgZWxsaXBzaXNXaWR0aCA9IF9hLmVsbGlwc2lzV2lkdGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGl0ZW1XaWR0aENhbGN1bGF0b3IoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRQYWdlV2lkdGgoaXRlbS5wYWdlLCBpdGVtLmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3ByZXZpb3VzJyB8fCBpdGVtLnR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGdldE5hdldpZHRoKGl0ZW0udHlwZSwgaXRlbS5wYWdlICE9PSB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdlbGxpcHNpcycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGxpcHNpc1dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IEVycm9yKFwidW5rbm93biBpdGVtOiBcIiArIGl0ZW0udHlwZSk7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXZXaWR0aENhbGN1bGF0b3Iod2lkdGhzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5hdldpZHRoQ2FsY3VsYXRvcih0eXBlLCBlbmFibGVkKSB7XG4gICAgICAgIHZhciB3aWR0aHNGb3JUeXBlID0gd2lkdGhzW3R5cGVdO1xuICAgICAgICByZXR1cm4gZW5hYmxlZCA/IHdpZHRoc0ZvclR5cGUuZGlzYWJsZWQgOiB3aWR0aHNGb3JUeXBlLmRpc2FibGVkO1xuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTnVtYmVyV2lkdGhDYWxjdWxhdG9yKHdpZHRocykge1xuICAgIHJldHVybiBmdW5jdGlvbiBudW1iZXJXaWR0aENhbGN1bGF0b3IobnVtKSB7XG4gICAgICAgIHZhciBudW1EaWdpdHMgPSBudW0udG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgICAgIHJldHVybiAod2lkdGhzLnNpbmdsZURpZ2l0ICtcbiAgICAgICAgICAgICh3aWR0aHMuZG91YmxlRGlnaXQgLSB3aWR0aHMuc2luZ2xlRGlnaXQpICogKG51bURpZ2l0cyAtIDEpKTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VXaWR0aENhbGN1bGF0b3IoX2EpIHtcbiAgICB2YXIgZ2V0QWN0aXZlUGFnZVdpZHRoID0gX2EuZ2V0QWN0aXZlUGFnZVdpZHRoLCBnZXROb3JtYWxQYWdlV2lkdGggPSBfYS5nZXROb3JtYWxQYWdlV2lkdGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBhZ2VXaWR0aENhbGN1bGF0b3IocGFnZSwgYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmUgPyBnZXRBY3RpdmVQYWdlV2lkdGgocGFnZSkgOiBnZXROb3JtYWxQYWdlV2lkdGgocGFnZSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IHN1bSB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvdXRpbCc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG90YWxXaWR0aENhbGN1bGF0b3IoX2EpIHtcbiAgICB2YXIgZ2V0SXRlbVdpZHRoID0gX2EuZ2V0SXRlbVdpZHRoLCBvdXRlckZyYW1lV2lkdGggPSBfYS5vdXRlckZyYW1lV2lkdGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdpZHRoQ2FsY3VsYXRvcihpdGVtcykge1xuICAgICAgICB2YXIgaXRlbVdpZHRocyA9IGl0ZW1zLm1hcChnZXRJdGVtV2lkdGgpO1xuICAgICAgICB2YXIgY29udGVudFdpZHRoID0gc3VtKGl0ZW1XaWR0aHMpO1xuICAgICAgICByZXR1cm4gb3V0ZXJGcmFtZVdpZHRoICsgY29udGVudFdpZHRoO1xuICAgIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIENvbnRhaW5lciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9hLCByZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgcmVmOiByZWYgfSwgY2hpbGRyZW4pKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbShfYSkge1xuICAgIHZhciBsYWJlbCA9IF9hLmxhYmVsLCBoYW5kbGVDbGljayA9IF9hLm9uQ2xpY2ssIF9iID0gX2EuaXNBY3RpdmUsIGlzQWN0aXZlID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIGExMXlMYWJlbCA9IF9hLmExMXlMYWJlbCwgYTExeUhpZGRlbiA9IF9hLmExMXlIaWRkZW47XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1pdGVtXCIgKyBnZXRMaUV4dHJhQ2xhc3Nlcyhpc0FjdGl2ZSwgIWhhbmRsZUNsaWNrKSwgXCJhcmlhLWhpZGRlblwiOiBhMTF5SGlkZGVuIH0sIGhhbmRsZUNsaWNrID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtbGlua1wiLCBocmVmOiBcIiNcIiwgb25DbGljazogaGFuZGxlQ2xpY2ssIFwiYXJpYS1sYWJlbFwiOiBhMTF5TGFiZWwgfSwgZ2V0Q29udGVudChsYWJlbCwgYTExeUxhYmVsKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtbGlua1wiIH0sIGdldENvbnRlbnQobGFiZWwsIGExMXlMYWJlbCkpKSkpO1xufVxuZnVuY3Rpb24gZ2V0TGlFeHRyYUNsYXNzZXMoYWN0aXZlLCBkaXNhYmxlZCkge1xuICAgIHJldHVybiBcIlwiICsgKGFjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnKSArIChkaXNhYmxlZCA/ICcgZGlzYWJsZWQnIDogJycpO1xufVxuZnVuY3Rpb24gZ2V0Q29udGVudChsYWJlbCwgYTExeUxhYmVsKSB7XG4gICAgcmV0dXJuIGExMXlMYWJlbCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSwgbGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJzci1vbmx5XCIgfSwgYTExeUxhYmVsKSkpIDogKGxhYmVsKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG52YXIgQm9vdHN0cmFwU2tpbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9hLCByZWYpIHtcbiAgICB2YXIgaXRlbXMgPSBfYS5pdGVtcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IHJlZjogcmVmIH0sIGl0ZW1zLm1hcChjcmVhdGVJdGVtKSkpO1xufSk7XG5mdW5jdGlvbiBjcmVhdGVJdGVtKGl0ZW0pIHtcbiAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICBjYXNlICdlbGxpcHNpcyc6XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7IGtleTogaXRlbS5rZXksIGxhYmVsOiAn4oCmJywgYTExeUhpZGRlbjogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSAncGFnZSc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwgeyBrZXk6IGl0ZW0ua2V5LCBvbkNsaWNrOiBpdGVtLm9uQ2xpY2ssIGlzQWN0aXZlOiBpdGVtLmFjdGl2ZSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGExMXlMYWJlbDogaXRlbS5hY3RpdmUgPyAnKGN1cnJlbnQpJyA6IHVuZGVmaW5lZCB9KSk7XG4gICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwgeyBrZXk6IGl0ZW0ua2V5LCBvbkNsaWNrOiBpdGVtLm9uQ2xpY2ssIGxhYmVsOiBpdGVtLnR5cGUgPT09ICdwcmV2aW91cycgPyAnwqsnIDogJ8K7JywgYTExeUxhYmVsOiBpdGVtLnR5cGUgPT09ICdwcmV2aW91cycgPyAnUHJldmlvdXMnIDogJ05leHQnIH0pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb290c3RyYXBTa2luO1xuIiwiZXhwb3J0IHZhciBjcmVhdGVTa2luSXRlbSA9IHtcbiAgICBwYWdlOiBmdW5jdGlvbiAocGFnZSwgYWN0aXZlLCBvbkNsaWNrKSB7IHJldHVybiAoe1xuICAgICAgICB0eXBlOiAncGFnZScsXG4gICAgICAgIGtleTogYWN0aXZlID8gXCJwYWdlX1wiICsgcGFnZSA6IFwiYWN0aXZlX1wiICsgcGFnZSxcbiAgICAgICAgbGFiZWw6IHBhZ2UudG9TdHJpbmcoKSxcbiAgICAgICAgb25DbGljazogb25DbGljayxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgfSk7IH0sXG4gICAgZWxsaXBzaXM6IGZ1bmN0aW9uIChwb3NpdGlvbikgeyByZXR1cm4gKHtcbiAgICAgICAgdHlwZTogJ2VsbGlwc2lzJyxcbiAgICAgICAga2V5OiBcImVsbGlwc2lzX1wiICsgcG9zaXRpb24sXG4gICAgfSk7IH0sXG4gICAgbmF2OiBmdW5jdGlvbiAodHlwZSwgb25DbGljaykgeyByZXR1cm4gKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgb25DbGljazogb25DbGljayxcbiAgICAgICAga2V5OiBvbkNsaWNrID8gdHlwZSA6IHR5cGUgKyBcIl9kaXNhYmxlZFwiLFxuICAgIH0pOyB9LFxufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQm9vdHN0cmFwU2tpbiB9IGZyb20gJy4vQm9vdHN0cmFwU2tpbic7XG5leHBvcnQgeyBjcmVhdGVTa2luSXRlbSB9IGZyb20gJy4vY3JlYXRlU2tpbkl0ZW0nO1xuIiwiZXhwb3J0IHZhciBjcmVhdGVWaWV3SXRlbSA9IHtcbiAgICBuYXY6IGZ1bmN0aW9uICh0eXBlLCBwYWdlKSB7IHJldHVybiAoe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBwYWdlOiBwYWdlLFxuICAgIH0pOyB9LFxuICAgIHBhZ2U6IGZ1bmN0aW9uIChwYWdlLCBhY3RpdmUpIHsgcmV0dXJuICh7XG4gICAgICAgIHR5cGU6ICdwYWdlJyxcbiAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgfSk7IH0sXG4gICAgZWxsaXBzaXM6IGZ1bmN0aW9uIChwb3NpdGlvbikgeyByZXR1cm4gKHtcbiAgICAgICAgdHlwZTogJ2VsbGlwc2lzJyxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIH0pOyB9LFxufTtcbiIsImV4cG9ydCB7IHVzZVZpZXcgfSBmcm9tICcuL3VzZVZpZXcnO1xuZXhwb3J0IHsgY3JlYXRlVmlld0l0ZW0gfSBmcm9tICcuL2NyZWF0ZVZpZXdJdGVtJztcbiIsImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2aWV3SXRlbVRvU2tpbkl0ZW0gfSBmcm9tICcuL3ZpZXdJdGVtVG9Ta2luSXRlbSc7XG5leHBvcnQgZnVuY3Rpb24gdXNlVmlldyhza2luLCBoYW5kbGVQYWdlQ2hhbmdlKSB7XG4gICAgdmFyIGhhbmRsZVBhZ2VDaGFuZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgaGFuZGxlUGFnZUNoYW5nZVJlZi5jdXJyZW50ID0gaGFuZGxlUGFnZUNoYW5nZTtcbiAgICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVWaWV3KHNraW4sIGhhbmRsZVBhZ2VDaGFuZ2VSZWYpOyB9LCBbc2tpbl0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVmlldyhTa2luLCBoYW5kbGVQYWdlQ2hhbmdlUmVmKSB7XG4gICAgdmFyIFZpZXcgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgICAgIHZhciB2aWV3SXRlbXMgPSBfYS5pdGVtcztcbiAgICAgICAgdmFyIGhhbmRsZVBhZ2VDaGFuZ2UgPSBoYW5kbGVQYWdlQ2hhbmdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBza2luSXRlbXMgPSB2aWV3SXRlbXMubWFwKHZpZXdJdGVtVG9Ta2luSXRlbShoYW5kbGVQYWdlQ2hhbmdlKSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNraW4sIHsgcmVmOiByZWYsIGl0ZW1zOiBza2luSXRlbXMgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFZpZXc7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTa2luSXRlbSB9IGZyb20gJy4uL3NraW5zJztcbmV4cG9ydCBmdW5jdGlvbiB2aWV3SXRlbVRvU2tpbkl0ZW0oaGFuZGxlUGFnZUNoYW5nZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmlld0l0ZW0pIHtcbiAgICAgICAgaWYgKHZpZXdJdGVtLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IHZpZXdJdGVtLmFjdGl2ZSwgcGFnZV8xID0gdmlld0l0ZW0ucGFnZTtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVTa2luSXRlbS5wYWdlKHBhZ2VfMSwgYWN0aXZlLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UocGFnZV8xKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3SXRlbS50eXBlID09PSAnZWxsaXBzaXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlU2tpbkl0ZW0uZWxsaXBzaXModmlld0l0ZW0ucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3SXRlbS50eXBlID09PSAncHJldmlvdXMnIHx8IHZpZXdJdGVtLnR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgICAgdmFyIHBhZ2VfMiA9IHZpZXdJdGVtLnBhZ2UsIHR5cGUgPSB2aWV3SXRlbS50eXBlO1xuICAgICAgICAgICAgdmFyIG9uQ2xpY2sgPSBwYWdlXzIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UocGFnZV8yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlU2tpbkl0ZW0ubmF2KHR5cGUsIG9uQ2xpY2spO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZSBcIiArIHZpZXdJdGVtLnR5cGUpO1xuICAgIH07XG59XG4iLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==