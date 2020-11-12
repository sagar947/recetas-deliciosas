webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./reducers.js":
/*!*********************!*\
  !*** ./reducers.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./types.js");



var recipesReducer = function recipesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    items: [],
    currentPage: 1
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_RECIPES"]:
      state.items = payload;
      return state;

    default:
      return state;
  }
}; // COMBINED REDUCERS


var reducers = {
  recipes: recipesReducer
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMuanMiXSwibmFtZXMiOlsicmVjaXBlc1JlZHVjZXIiLCJzdGF0ZSIsIml0ZW1zIiwiY3VycmVudFBhZ2UiLCJ0eXBlIiwicGF5bG9hZCIsInR5cGVzIiwicmVkdWNlcnMiLCJyZWNpcGVzIiwiY29tYmluZVJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBR0U7QUFBQSxNQUhEQyxLQUdDLHVFQUhPO0FBQzlCQyxTQUFLLEVBQUUsRUFEdUI7QUFFOUJDLGVBQVcsRUFBRTtBQUZpQixHQUdQOztBQUFBO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDdkIsVUFBT0QsSUFBUDtBQUNFLFNBQUtFLG9EQUFMO0FBQ0VMLFdBQUssQ0FBQ0MsS0FBTixHQUFjRyxPQUFkO0FBQ0EsYUFBT0osS0FBUDs7QUFDRjtBQUNFLGFBQU9BLEtBQVA7QUFMSjtBQU9ELENBWEQsQyxDQWFBOzs7QUFDQSxJQUFNTSxRQUFRLEdBQUc7QUFDZkMsU0FBTyxFQUFFUjtBQURNLENBQWpCO0FBSWVTLDRIQUFlLENBQUNGLFFBQUQsQ0FBOUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43MTY3ODA3NWRjYTBmOTEyZDU0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCByZWNpcGVzUmVkdWNlciA9IChzdGF0ZSA9IHtcbiAgaXRlbXM6IFtdLFxuICBjdXJyZW50UGFnZTogMVxufSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgc3dpdGNoKHR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkZFVENIX1JFQ0lQRVM6XG4gICAgICBzdGF0ZS5pdGVtcyA9IHBheWxvYWQ7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG4vLyBDT01CSU5FRCBSRURVQ0VSU1xuY29uc3QgcmVkdWNlcnMgPSB7XG4gIHJlY2lwZXM6IHJlY2lwZXNSZWR1Y2VyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VycylcbiJdLCJzb3VyY2VSb290IjoiIn0=