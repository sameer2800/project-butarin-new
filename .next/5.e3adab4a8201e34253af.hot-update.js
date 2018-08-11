webpackHotUpdate(5,{

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(485);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(476);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(431);

var _web = __webpack_require__(446);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(544);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(445);

var _axios = __webpack_require__(1198);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/submitSolution.js';


var SubmitSolution = function (_Component) {
    (0, _inherits3.default)(SubmitSolution, _Component);

    function SubmitSolution() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SubmitSolution);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SubmitSolution.__proto__ || (0, _getPrototypeOf2.default)(SubmitSolution)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            username: '',
            solutionFile: '',
            loading: false,
            errorMessage: '',
            submitted: false,
            response: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, postData, url;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                event.preventDefault();

                                _this.setState({ submitted: false });

                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;

                                _this.setState({ loading: true, errorMessage: '' });

                                postData = {
                                    solutionFile: _this.state.solutionFile,
                                    username: _this.state.username,
                                    contractAddress: _this.props.contractAddress,
                                    userAddress: accounts[0]

                                };
                                url = "https://jsonplaceholder.typicode.com/posts";

                                console.log(postData);

                                try {

                                    _axios2.default.post(url, postData).then(function (response) {
                                        _this.setState({ response: response });
                                        console.log(response);
                                        _this.setState({ loading: false });
                                    }).catch(function (err) {
                                        console.log(err);
                                        _this.setState({ loading: false });
                                    });

                                    //   Router.replaceRoute(`/campaigns/${this.props.address}`) 
                                } catch (err) {
                                    console.log("error while contributing " + err);
                                    _this.setState({ errorMessage: err.message });
                                    _this.setState({ loading: false });
                                }

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SubmitSolution, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Enter your username '), _react2.default.createElement(_semanticUiReact.Input, { label: 'username',
                labelPosition: 'right',
                value: this.state.username,
                onChange: function onChange(event) {
                    _this3.setState({ username: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'Enter your solution '), _react2.default.createElement(_semanticUiReact.TextArea, { autoHeight: true, placeholder: 'Try adding multiple lines', value: this.state.solutionFile,
                onChange: function onChange(event) {
                    _this3.setState({ solutionFile: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Submit!')));
        }
    }]);

    return SubmitSolution;
}(_react.Component);

exports.default = SubmitSolution;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvc3VibWl0U29sdXRpb24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHZXRRdWVzdGlvbiIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiRGl2aWRlciIsIk1lc3NhZ2UiLCJDb250YWluZXIiLCJMaXN0IiwiSW5wdXQiLCJNZW51IiwiVGV4dEFyZWEiLCJGb3JtIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsImF4aW9zIiwiU3VibWl0U29sdXRpb24iLCJzdGF0ZSIsInVzZXJuYW1lIiwic29sdXRpb25GaWxlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInN1Ym1pdHRlZCIsInJlc3BvbnNlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicG9zdERhdGEiLCJjb250cmFjdEFkZHJlc3MiLCJwcm9wcyIsInVzZXJBZGRyZXNzIiwidXJsIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUSxBQUFPLEFBQVMsQUFBTSxBQUFTLEFBQVMsQUFBWSxBQUFLLEFBQVEsQUFBTSxBQUFVOztBQUN6RixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFRLEFBQVc7O0FBQ25CLEFBQU87Ozs7Ozs7OztJQUVELEE7Ozs7Ozs7Ozs7Ozs7OztnTyxBQUVGO3NCQUFRLEFBQ08sQUFDWDswQkFGSSxBQUVXLEFBQ2Y7cUJBSEksQUFHTSxBQUNWOzBCQUpJLEFBSVcsQUFDZjt1QkFMSSxBQUtRLEFBQ1o7c0JBTkksQUFNTyxBO0FBTlAsQUFDSixpQkFRSixBO2lHQUFZLGlCQUFBLEFBQU8sT0FBUDt3Q0FBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FFUjs7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxXQUpQLEFBSVIsQUFBYyxBQUFhOztnREFKbkI7dUNBTWUsY0FBQSxBQUFLLElBTnBCLEFBTWUsQUFBUzs7aUNBQTFCO0FBTkUsb0RBUVI7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVyxNQUFPLGNBQWhDLEFBQWMsQUFBaUMsQUFFekM7O0FBVkU7a0RBV1csTUFBQSxBQUFLLE1BRFAsQUFDYSxBQUMxQjs4Q0FBVyxNQUFBLEFBQUssTUFGSCxBQUVTLEFBQ3RCO3FEQUFrQixNQUFBLEFBQUssTUFIVixBQUdnQixBQUM3QjtpREFBYyxTQWRWLEFBVVMsQUFJQyxBQUFTLEFBSXJCOztBQVJXLEFBQ2I7QUFYSSxzQ0FBQSxBQWtCSSxBQUVaOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztvQ0FBSSxBQUVBOztvREFBQSxBQUFNLEtBQU4sQUFBVyxLQUFYLEFBQWlCLFVBQWpCLEFBQ0EsS0FBTSxvQkFBWSxBQUNkOzhDQUFBLEFBQUssU0FBUyxFQUFDLFVBQWYsQUFBYyxBQUFZLEFBQzFCO2dEQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7OENBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVcsQUFFNUI7QUFORCx1Q0FBQSxBQU9JLE1BQU8sZUFBTyxBQUNWO2dEQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7OENBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVcsQUFDNUI7QUFWTCxBQWFIOztBQUVBO0FBakJELGtDQWlCQyxPQUFBLEFBQU8sS0FBSyxBQUNQOzRDQUFBLEFBQVEsSUFBSSw4QkFBWixBQUEwQyxBQUMxQzswQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFlLElBQTlCLEFBQWMsQUFBb0IsQUFDbEM7MENBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVcsQUFDOUI7QUEzQ087O2lDQUFBO2lDQUFBO2dEQUFBOztBQUFBOzRCQUFBO0E7Ozs7Ozs7Ozs7aUNBK0NIO3lCQUNMOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLEFBQUM7OzhCQUFEO2dDQURBLEFBQ0EsQUFLQztBQUxEO0FBQUEsZ0NBS0MsQUFBQyx1Q0FBTSxVQUFVLEtBQWpCLEFBQXNCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0FBQSxBQUNHO0FBREg7K0JBQ0ksY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQyx3Q0FBTSxPQUFQLEFBQWEsQUFDYjsrQkFEQSxBQUNjLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BRlosQUFFa0IsQUFDbEI7MEJBQWEseUJBQVMsQUFBQzsyQkFBQSxBQUFLLFNBQVMsRUFBQyxVQUFXLE1BQUEsQUFBTSxPQUFoQyxBQUFjLEFBQXlCLEFBQVM7QUFIdkU7OzhCQUFBO2dDQUhQLEFBQ0csQUFFSSxBQU9KO0FBUEk7aUNBT0gsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQywyQ0FBUyxZQUFWLE1BQXFCLGFBQXJCLEFBQWlDLDZCQUE2QixPQUFPLEtBQUEsQUFBSyxNQUExRSxBQUFnRixBQUNoRjswQkFBYSx5QkFBUyxBQUFDOzJCQUFBLEFBQUssU0FBUyxFQUFDLGNBQWUsTUFBQSxBQUFNLE9BQXBDLEFBQWMsQUFBNkIsQUFBUztBQUQzRTs7OEJBQUE7Z0NBWlAsQUFVRyxBQUVJLEFBS0o7QUFMSTtpQ0FLSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQWpCSCxBQWlCRyxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVUsS0FBQSxBQUFLLE1BQS9CLEFBQXFDOzhCQUFyQztnQ0FBQTtBQUFBO2VBekJSLEFBQ0ksQUFNQyxBQWtCRyxBQVVYOzs7OztBQTlGd0IsQSxBQWlHN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic3VibWl0U29sdXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ticjAwMDMvRG9jdW1lbnRzL2V0aGVyZXVtLWJsb2NrY2hhaW4vb25saW5lSnVkZ2UifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/submitSolution.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/submitSolution.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/compete/submitSolution")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lM2FkYWI0YTgyMDFlMzQyNTNhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcGV0ZS9zdWJtaXRTb2x1dGlvbi5qcz85M2I3N2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEdldFF1ZXN0aW9uIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB7Q2FyZCAsIEJ1dHRvbiAsIEdyaWQsIERpdmlkZXIgLE1lc3NhZ2UsIENvbnRhaW5lciAsIExpc3QsSW5wdXQgLCBNZW51LCBUZXh0QXJlYSwgRm9ybX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTdWJtaXRTb2x1dGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdXNlcm5hbWUgOiAnJyAsXG4gICAgICAgIHNvbHV0aW9uRmlsZSA6ICcnLCBcbiAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2UgOiAnJyAsXG4gICAgICAgIHN1Ym1pdHRlZCA6IGZhbHNlICxcbiAgICAgICAgcmVzcG9uc2UgOiAnJ1xuICAgIH1cblxuICAgIG9uU3VibWl0ID0gIGFzeW5jIChldmVudCkgPT4ge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ICAgIFxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdHRlZCA6IGZhbHNlfSlcblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7ICBcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nIDogdHJ1ZSAsIGVycm9yTWVzc2FnZSA6ICcnfSlcbiAgICAgICBcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSB7XG4gICAgICAgICAgICBzb2x1dGlvbkZpbGUgOiB0aGlzLnN0YXRlLnNvbHV0aW9uRmlsZSAsXG4gICAgICAgICAgICB1c2VybmFtZSA6IHRoaXMuc3RhdGUudXNlcm5hbWUgLFxuICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzIDogdGhpcy5wcm9wcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgICB1c2VyQWRkcmVzcyA6IGFjY291bnRzWzBdXG4gICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIlxuXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3REYXRhKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHVybCAsIHBvc3REYXRhKS5cbiAgICAgICAgICAgIHRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXNwb25zZSA6IHJlc3BvbnNlfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSkgO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmcgOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSApLlxuICAgICAgICAgICAgICAgIGNhdGNoKCBlcnIgPT4geyAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nIDogZmFsc2UgfSkgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcblxuICAgICAgICAgLy8gICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApIFxuXG4gICAgICAgIH1jYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igd2hpbGUgY29udHJpYnV0aW5nIFwiICsgZXJyKSAgXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZSA6IGVyci5tZXNzYWdlfSlcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZyA6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgPEZvcm0gIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gPlxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVudGVyIHlvdXIgdXNlcm5hbWUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwidXNlcm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCIgICBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyBldmVudCA9PiB7dGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWUgOiBldmVudC50YXJnZXQudmFsdWV9KSB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVudGVyIHlvdXIgc29sdXRpb24gPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhIGF1dG9IZWlnaHQgcGxhY2Vob2xkZXI9J1RyeSBhZGRpbmcgbXVsdGlwbGUgbGluZXMnICB2YWx1ZT17dGhpcy5zdGF0ZS5zb2x1dGlvbkZpbGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyBldmVudCA9PiB7dGhpcy5zZXRTdGF0ZSh7c29sdXRpb25GaWxlIDogZXZlbnQudGFyZ2V0LnZhbHVlfSkgfX0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyEhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9IHt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICBTdWJtaXQhXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRTb2x1dGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wZXRlL3N1Ym1pdFNvbHV0aW9uLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVhBO0FBQ0E7QUFtQkE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQWpCQTtBQWtCQTtBQUNBO0FBQ0E7QUExQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQStDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFIQTs7QUFBQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTs7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9