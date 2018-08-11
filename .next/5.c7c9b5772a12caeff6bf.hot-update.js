webpackHotUpdate(5,{

/***/ 733:
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

var _factory = __webpack_require__(734);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(497);

var _Layout = __webpack_require__(1163);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(727);

var _campaign = __webpack_require__(1184);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(481);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/practice/home.js?entry';


var PracticeIndex = function (_Component) {
    (0, _inherits3.default)(PracticeIndex, _Component);

    function PracticeIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PracticeIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PracticeIndex.__proto__ || (0, _getPrototypeOf2.default)(PracticeIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderCampaigns = function () {

            _this.props.questionsDescriptions.map(function (val) {
                //    console.log("question " + val);
            });

            //  console.log( this.props.questionsDescriptions[1])

            var filteredAddressIndexes = [];

            for (var i = 0; i < _this.props.questionsListAddress.length; i++) {
                //  console.log(this.props.questionsPrice[i])
                if (_this.props.questionsPrice[i] === '0') {
                    filteredAddressIndexes.push(i);
                }
            }

            var items = filteredAddressIndexes.map(function (index) {
                return {
                    key: index,
                    header: _this.props.questionsDescriptions[index],
                    meta: "Prize Money: " + _web2.default.utils.fromWei(_this.props.questionsPrice[index], 'ether') + "  Ether",
                    description: _react2.default.createElement(_routes.Link, { route: '/compete/' + _this.props.questionsListAddress[index], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    }, 'View Question Details ')),

                    fluid: true
                };
            });

            console.log(items);

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PracticeIndex, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Practice Competitions !!'), _react2.default.createElement(_routes.Link, { route: '/compete/newproblem', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create Question', icon: 'add circle', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',

        // state = {
        //     campaignsList : null
        // }

        // this renders on server and passes props to this class on browser
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var questionsListAddress, questionsDescriptions, questionsPrice, i, question, description, _question, balance;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedQuestions().call();

                            case 2:
                                questionsListAddress = _context.sent;
                                questionsDescriptions = [];
                                questionsPrice = [];
                                i = 0;

                            case 6:
                                if (!(i < questionsListAddress.length)) {
                                    _context.next = 15;
                                    break;
                                }

                                question = (0, _campaign2.default)(questionsListAddress[i]);
                                _context.next = 10;
                                return question.methods.getQuestionDescription().call();

                            case 10:
                                description = _context.sent;

                                questionsDescriptions.push(description);

                            case 12:
                                i++;
                                _context.next = 6;
                                break;

                            case 15:
                                i = 0;

                            case 16:
                                if (!(i < questionsListAddress.length)) {
                                    _context.next = 25;
                                    break;
                                }

                                _question = (0, _campaign2.default)(questionsListAddress[i]);
                                _context.next = 20;
                                return _question.methods.getBalance().call();

                            case 20:
                                balance = _context.sent;

                                questionsPrice.push(balance);

                            case 22:
                                i++;
                                _context.next = 16;
                                break;

                            case 25:
                                return _context.abrupt('return', { questionsListAddress: questionsListAddress, questionsDescriptions: questionsDescriptions, questionsPrice: questionsPrice });

                            case 26:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return PracticeIndex;
}(_react.Component);

exports.default = PracticeIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ByYWN0aWNlL2hvbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJHZXRRdWVzdGlvbiIsIndlYjMiLCJQcmFjdGljZUluZGV4IiwicmVuZGVyQ2FtcGFpZ25zIiwicHJvcHMiLCJxdWVzdGlvbnNEZXNjcmlwdGlvbnMiLCJtYXAiLCJmaWx0ZXJlZEFkZHJlc3NJbmRleGVzIiwiaSIsInF1ZXN0aW9uc0xpc3RBZGRyZXNzIiwibGVuZ3RoIiwicXVlc3Rpb25zUHJpY2UiLCJwdXNoIiwiaXRlbXMiLCJpbmRleCIsImtleSIsImhlYWRlciIsIm1ldGEiLCJ1dGlscyIsImZyb21XZWkiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFF1ZXN0aW9ucyIsImNhbGwiLCJxdWVzdGlvbiIsImdldFF1ZXN0aW9uRGVzY3JpcHRpb24iLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs4TkE2QkYsQSxrQkFBa0IsWUFBTSxBQUVwQjs7a0JBQUEsQUFBSyxNQUFMLEFBQVcsc0JBQVgsQUFBaUMsSUFBTSxlQUFPLEFBQzlDO0FBQ0M7QUFGRCxBQUlGOztBQUVFOztnQkFBSyx5QkFBTCxBQUE4QixBQUU5Qjs7aUJBQUksSUFBSSxJQUFSLEFBQVcsR0FBRSxJQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcscUJBQTVCLEFBQWlELFFBQWpELEFBQXlELEtBQUssQUFDNUQ7QUFDRTtvQkFBRyxNQUFBLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsT0FBN0IsQUFBb0MsS0FBSSxBQUNwQzsyQ0FBQSxBQUF1QixLQUF2QixBQUE0QixBQUMvQjtBQUVKO0FBRUQ7O2dCQUFNLCtCQUFRLEFBQXVCLElBQUksVUFBQSxBQUFDLE9BQVUsQUFDaEQ7O3lCQUFNLEFBQ0ksQUFDTjs0QkFBUyxNQUFBLEFBQUssTUFBTCxBQUFXLHNCQUZsQixBQUVPLEFBQWlDLEFBQzFDOzBCQUFPLGtCQUFrQixjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsTUFBQSxBQUFLLE1BQUwsQUFBVyxlQUE5QixBQUFtQixBQUEwQixRQUEvRCxBQUFrQixBQUFxRCxXQUg1RSxBQUd1RixBQUN6RjtpREFDSSxBQUFDLDhCQUFLLHFCQUFtQixNQUFBLEFBQUssTUFBTCxBQUFXLHFCQUFwQyxBQUF5QixBQUFnQztzQ0FBekQ7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFOTixBQUtFLEFBQ0ksQUFJUjs7MkJBVkosQUFBTSxBQVVNLEFBRWY7QUFaUyxBQUNGO0FBRlIsQUFBYyxBQWVkLGFBZmM7O29CQWVkLEFBQVEsSUFBUixBQUFZLEFBRVo7O2lEQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7QTs7Ozs7aUNBR0QsQUFFTjs7bUNBRUksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUVJO0FBRko7QUFBQSwrQkFFSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBRUEsNkNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDQztBQUREOytCQUNDLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0Q7QUFEQztBQUFBLCtCQUNELEFBQUMseUNBQVEsU0FBVCxBQUFpQixTQUFRLFNBQXpCLEFBQWlDLG1CQUFrQixNQUFuRCxBQUF3RCxjQUFhLFNBQXJFOzhCQUFBO2dDQU5KLEFBSUksQUFDQyxBQUNELEFBSUM7QUFKRDt1QkFUUixBQUVJLEFBQ0EsQUFVSyxBQUFLLEFBSWpCOzs7YUFwRkQ7O0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7dUNBRXlDLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF1Qzs7aUNBQXRFO0EsZ0VBRUY7QSx3RCxBQUF3QixBQUN4QjtBLGlEQUFnQixBLEFBRVo7QSxvQyxBQUFJOzs7c0NBQUcsSUFBSSxxQkFBcUIsQTs7O0FBQzlCOztBLDJDQUFXLHdCQUFZLHFCQUFBLEEsQUFBWixBQUFpQzs7dUNBQ3hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLHlCQUFqQixBQUEwQyxBOztpQ0FBOUQ7QSx1REFDTjs7c0RBQUEsQUFBc0IsS0FBdEIsQUFBMkI7O2lDQUhpQjtBOzs7O2lDQU14QztBLG9DLEFBQUk7OztzQ0FBRyxJQUFJLHFCLEFBQXFCOzs7QUFDOUI7O0EsNENBQVcsd0JBQVkscUIsQUFBWixBQUFZLEFBQXFCOzt1Q0FDNUIsVUFBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7aUNBQTlDO0EsbURBQ047OytDQUFBLEFBQWUsS0FBZixBQUFvQjs7aUNBSHdCO0E7Ozs7O2lFQU16QyxFQUFDLHNCQUFELHNCQUF1Qix1QkFBdkIsdUJBQStDLGdCQUEvQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekJhLEEsQUEwRjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImhvbWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ticjAwMDMvRG9jdW1lbnRzL2V0aGVyZXVtLWJsb2NrY2hhaW4vb25saW5lSnVkZ2UifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/practice/home.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/practice/home.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/practice/home")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jN2M5YjU3NzJhMTJjYWVmZjZiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJhY3RpY2UvaG9tZS5qcz8yNzA5MGE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHtDYXJkICwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vcm91dGVzJztcbmltcG9ydCBHZXRRdWVzdGlvbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcblxuY2xhc3MgUHJhY3RpY2VJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvLyBzdGF0ZSA9IHtcbiAgICAvLyAgICAgY2FtcGFpZ25zTGlzdCA6IG51bGxcbiAgICAvLyB9XG5cbiAgICAvLyB0aGlzIHJlbmRlcnMgb24gc2VydmVyIGFuZCBwYXNzZXMgcHJvcHMgdG8gdGhpcyBjbGFzcyBvbiBicm93c2VyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uc0xpc3RBZGRyZXNzID0gICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRRdWVzdGlvbnMoKS5jYWxsKCkgO1xuXG4gICAgICAgIHZhciBxdWVzdGlvbnNEZXNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uc1ByaWNlID1bXTtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnNMaXN0QWRkcmVzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBHZXRRdWVzdGlvbihxdWVzdGlvbnNMaXN0QWRkcmVzc1tpXSk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGF3YWl0IHF1ZXN0aW9uLm1ldGhvZHMuZ2V0UXVlc3Rpb25EZXNjcmlwdGlvbigpLmNhbGwoKTtcbiAgICAgICAgICAgIHF1ZXN0aW9uc0Rlc2NyaXB0aW9ucy5wdXNoKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnNMaXN0QWRkcmVzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBHZXRRdWVzdGlvbihxdWVzdGlvbnNMaXN0QWRkcmVzc1tpXSk7XG4gICAgICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcXVlc3Rpb24ubWV0aG9kcy5nZXRCYWxhbmNlKCkuY2FsbCgpO1xuICAgICAgICAgICAgcXVlc3Rpb25zUHJpY2UucHVzaChiYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtxdWVzdGlvbnNMaXN0QWRkcmVzcywgcXVlc3Rpb25zRGVzY3JpcHRpb25zICwgcXVlc3Rpb25zUHJpY2UgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyQ2FtcGFpZ25zID0gKCkgPT4ge1xuXG4gICAgICAgIHRoaXMucHJvcHMucXVlc3Rpb25zRGVzY3JpcHRpb25zLm1hcCAoIHZhbCA9PiB7XG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwicXVlc3Rpb24gXCIgKyB2YWwpO1xuICAgICAgICB9IClcblxuICAgICAgLy8gIGNvbnNvbGUubG9nKCB0aGlzLnByb3BzLnF1ZXN0aW9uc0Rlc2NyaXB0aW9uc1sxXSlcblxuICAgICAgICB2YXIgIGZpbHRlcmVkQWRkcmVzc0luZGV4ZXMgPSBbXTtcblxuICAgICAgICBmb3IodmFyIGkgPTA7aSA8IHRoaXMucHJvcHMucXVlc3Rpb25zTGlzdEFkZHJlc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2codGhpcy5wcm9wcy5xdWVzdGlvbnNQcmljZVtpXSlcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMucXVlc3Rpb25zUHJpY2VbaV0gPT09ICcwJyl7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRBZGRyZXNzSW5kZXhlcy5wdXNoKGkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgfSAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpdGVtcyA9IGZpbHRlcmVkQWRkcmVzc0luZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIGtleSA6IGluZGV4LFxuICAgICAgICAgICAgICAgIGhlYWRlciA6IHRoaXMucHJvcHMucXVlc3Rpb25zRGVzY3JpcHRpb25zW2luZGV4XSAsXG4gICAgICAgICAgICAgICAgbWV0YSA6IFwiUHJpemUgTW9uZXk6IFwiICsgd2ViMy51dGlscy5mcm9tV2VpKHRoaXMucHJvcHMucXVlc3Rpb25zUHJpY2VbaW5kZXhdLCAnZXRoZXInKSArIFwiICBFdGhlclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogKCBcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY29tcGV0ZS8ke3RoaXMucHJvcHMucXVlc3Rpb25zTGlzdEFkZHJlc3NbaW5kZXhdfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+VmlldyBRdWVzdGlvbiBEZXRhaWxzIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgZmx1aWQgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMpXG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuXG4gICAgICAgIHJldHVybihcblxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgzPlByYWN0aWNlIENvbXBldGl0aW9ucyAhITwvaDM+XG5cbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jb21wZXRlL25ld3Byb2JsZW1cIj5cbiAgICAgICAgICAgICAgICAgPGE+ICAgXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiAgZmxvYXRlZD0ncmlnaHQnIGNvbnRlbnQ9J0NyZWF0ZSBRdWVzdGlvbicgaWNvbj0nYWRkIGNpcmNsZScgcHJpbWFyeSAvPlxuICAgICAgICAgICAgICAgICAgPC9hPiAgXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNlSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcHJhY3RpY2UvaG9tZS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFYQTtBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFRQTs7O0FBcEZBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFFQTs7Ozs7O0FBR0E7OztBQUNBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUpBOzs7OztBQU1BOzs7O0FBQUE7OztBQUNBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUpBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9