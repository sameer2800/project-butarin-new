webpackHotUpdate(7,{

/***/ 1198:
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

var _Layout = __webpack_require__(1163);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1184);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(497);

var _web = __webpack_require__(481);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1189);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(727);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/leaderBoard.js';


var leaderBoard = function (_Component) {
    (0, _inherits3.default)(leaderBoard, _Component);

    function leaderBoard() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, leaderBoard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = leaderBoard.__proto__ || (0, _getPrototypeOf2.default)(leaderBoard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            userDetails: []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(leaderBoard, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var question, userDetails, i, address, getparticipantdetails, userDetail;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log("question address " + this.props.contractAddress);
                                question = (0, _campaign2.default)(this.props.contractAddress);
                                userDetails = [];
                                i = 0;

                            case 4:
                                if (!(i < this.props.participantsCount)) {
                                    _context.next = 17;
                                    break;
                                }

                                _context.next = 7;
                                return question.methods.participants(i).call();

                            case 7:
                                address = _context.sent;

                                console.log("adresss of participants " + address);
                                _context.next = 11;
                                return question.methods.getParticipantDetails(address).call();

                            case 11:
                                getparticipantdetails = _context.sent;
                                userDetail = {
                                    address: address,
                                    username: getparticipantdetails[0],
                                    gasUsed: getparticipantdetails[2]
                                };

                                userDetails.push(userDetail);

                            case 14:
                                i++;
                                _context.next = 4;
                                break;

                            case 17:

                                console.log(userDetails);

                                this.setState({
                                    userDetails: userDetails
                                });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderRows',
        value: function renderRows() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body,
                Cell = _semanticUiReact.Table.Cell;

            return this.state.userDetails.sort(function (a, b) {
                return a.gasUsed > b.gasUsed;
            }).map(function (user, index) {
                console.log(user);
                return _react2.default.createElement(Row, { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }, ' ', user.username), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                    }
                }, ' ', user.address, ' '), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }, ' ', user.gasUsed, ' '));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'UserID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'User Address'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Gas Used'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, this.renderRows()));
        }
    }]);

    return leaderBoard;
}(_react.Component);

exports.default = leaderBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvbGVhZGVyQm9hcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHZXRRdWVzdGlvbiIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpc3QiLCJNZW51IiwiVGFibGUiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwibGVhZGVyQm9hcmQiLCJzdGF0ZSIsInVzZXJEZXRhaWxzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiY29udHJhY3RBZGRyZXNzIiwicXVlc3Rpb24iLCJpIiwicGFydGljaXBhbnRzQ291bnQiLCJtZXRob2RzIiwicGFydGljaXBhbnRzIiwiY2FsbCIsImFkZHJlc3MiLCJnZXRQYXJ0aWNpcGFudERldGFpbHMiLCJnZXRwYXJ0aWNpcGFudGRldGFpbHMiLCJ1c2VyRGV0YWlsIiwidXNlcm5hbWUiLCJnYXNVc2VkIiwicHVzaCIsInNldFN0YXRlIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJDZWxsIiwic29ydCIsImEiLCJiIiwibWFwIiwidXNlciIsImluZGV4IiwicmVuZGVyUm93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFRLEFBQU8sQUFBUyxBQUFNLEFBQVUsQUFBWSxBQUFPLEFBQU87O0FBQ2xFLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJLEFBR2I7Ozs7Ozs7Ozs7Ozs7OzBOLEFBRUY7eUIsQUFBUSxBQUNVO0FBRFYsQUFDSjs7Ozs7Ozs7Ozs7aUNBSUE7d0NBQUEsQUFBUSxJQUFJLHNCQUFzQixLQUFBLEFBQUssTUFBdkMsQUFBNkMsQUFDdkM7QSwyQ0FBVyx3QkFBWSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFHbEMsQTtBLDhDQUFjLEEsQUFFYjtBLG9DLEFBQUc7OztzQ0FBRyxJQUFJLEtBQUEsQUFBSyxNLEFBQU07Ozs7Ozt1Q0FDTixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixHQUE5QixBQUFpQyxBOztpQ0FBakQ7QSxtREFDTjs7d0NBQUEsQUFBUSxJQUFLLDZCQUFiLEFBQTBDOzt1Q0FDTixTQUFBLEFBQVMsUUFBVCxBQUFpQixzQkFBakIsQUFBdUMsU0FBdkMsQUFBZ0QsQTs7aUNBQTlFO0EsaUVBRUE7QTs2Q0FBYSxBQUNMLEFBQ1Y7OENBQVcsc0JBRkksQUFFSixBQUFzQixBQUNqQzs2Q0FBVSxzQkFISyxBQUdMLEEsQUFBc0IsQUFHcEM7QUFObUIsQUFDZjs7NENBS0osQUFBWSxLQUFaLEFBQWlCOztpQ0FYOEI7QTs7OztpQ0FjaEQ7O3dDQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O3FDQUFBLEFBQUs7aURBQUwsQUFBYyxBQUNLO0FBREwsQUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQU1LO2dCQUFBLEFBRUQsU0FGQyxBQUVzQyx1QkFGdEMsQUFFRDtnQkFGQyxBQUVPLE1BRlAsQUFFc0MsdUJBRnRDLEFBRU87Z0JBRlAsQUFFWSxhQUZaLEFBRXNDLHVCQUZ0QyxBQUVZO2dCQUZaLEFBRXdCLE9BRnhCLEFBRXNDLHVCQUZ0QyxBQUV3QjtnQkFGeEIsQUFFOEIsT0FGOUIsQUFFc0MsdUJBRnRDLEFBRThCLEFBR3ZDOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLEtBQUssVUFBQSxBQUFDLEdBQUQsQUFBSSxHQUFKO3VCQUFVLEVBQUEsQUFBRSxVQUFVLEVBQXRCLEFBQXdCO0FBQXBELGFBQUEsRUFBQSxBQUE2RCxJQUFLLFVBQUEsQUFBQyxNQUFELEFBQU0sT0FBVyxBQUN0Rjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3VDQUNNLGNBQUQsT0FBSyxLQUFMLEFBQVU7a0NBQVY7b0NBQUEsQUFFRDtBQUZDO2lCQUFBLGtCQUVBLGNBQUQ7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFBUSxVQUZQLEFBRUQsQUFBYSxBQUNiLDJCQUFDLGNBQUQ7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFBUSxVQUFSLEFBQWEsU0FIWixBQUdELEFBQ0Esc0JBQUMsY0FBRDs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUFRLFVBQVIsQUFBYSxTQUxqQixBQUNLLEFBSUQsQUFFUDtBQVRELEFBQU8sQUFXVjs7OztpQ0FFUTtnQkFBQSxBQUVHLFNBRkgsQUFFb0MsdUJBRnBDLEFBRUc7Z0JBRkgsQUFFVyxNQUZYLEFBRW9DLHVCQUZwQyxBQUVXO2dCQUZYLEFBRWdCLGFBRmhCLEFBRW9DLHVCQUZwQyxBQUVnQjtnQkFGaEIsQUFFNEIsT0FGNUIsQUFFb0MsdUJBRnBDLEFBRTRCLEFBRWpDOzttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNRO0FBRFI7QUFBQSxhQUFBLGtCQUNTLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsaUNBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTGhCLEFBQ1EsQUFDSSxBQUdJLEFBSVIsK0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBWFosQUFFSSxBQVNRLEFBQ0ssQUFBSyxBQU16Qjs7Ozs7QUE1RXFCLEEsQUFnRjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImxlYWRlckJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYnIwMDAzL0RvY3VtZW50cy9ldGhlcmV1bS1ibG9ja2NoYWluL29ubGluZUp1ZGdlIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/leaderBoard.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/leaderBoard.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/compete/leaderBoard")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4yZjlhMGZhMmY2Y2E1OTc3OGVhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcGV0ZS9sZWFkZXJCb2FyZC5qcz8zYzdjMmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEdldFF1ZXN0aW9uIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB7Q2FyZCAsIEJ1dHRvbiAsIEdyaWQsIERpdmlkZXIgLCBDb250YWluZXIgLCBMaXN0ICwgTWVudSAsIFRhYmxlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtJztcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuXG5jbGFzcyBsZWFkZXJCb2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHsgICAgICAgXG4gICAgICAgIHVzZXJEZXRhaWxzIDogW11cbiAgICB9XG4gICAgXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInF1ZXN0aW9uIGFkZHJlc3MgXCIgKyB0aGlzLnByb3BzLmNvbnRyYWN0QWRkcmVzcyApXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gR2V0UXVlc3Rpb24odGhpcy5wcm9wcy5jb250cmFjdEFkZHJlc3MpO1xuXG4gICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXJEZXRhaWxzID0gW107XG5cbiAgICAgICBmb3IodmFyIGkgPTA7IGkgPCB0aGlzLnByb3BzLnBhcnRpY2lwYW50c0NvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHF1ZXN0aW9uLm1ldGhvZHMucGFydGljaXBhbnRzKGkpLmNhbGwoKTtcbiAgICAgICAgY29uc29sZS5sb2coIFwiYWRyZXNzcyBvZiBwYXJ0aWNpcGFudHMgXCIgKyBhZGRyZXNzKTtcbiAgICAgICAgY29uc3QgZ2V0cGFydGljaXBhbnRkZXRhaWxzID0gYXdhaXQgcXVlc3Rpb24ubWV0aG9kcy5nZXRQYXJ0aWNpcGFudERldGFpbHMoYWRkcmVzcykuY2FsbCgpO1xuICAgICAgIFxuICAgICAgICBjb25zdCB1c2VyRGV0YWlsID0ge1xuICAgICAgICAgICAgYWRkcmVzcyA6IGFkZHJlc3MsXG4gICAgICAgICAgICB1c2VybmFtZSA6IGdldHBhcnRpY2lwYW50ZGV0YWlsc1swXSxcbiAgICAgICAgICAgIGdhc1VzZWQgOiBnZXRwYXJ0aWNpcGFudGRldGFpbHNbMl1cbiAgICAgICAgfVxuXG4gICAgICAgIHVzZXJEZXRhaWxzLnB1c2godXNlckRldGFpbCk7XG4gICAgICAgfVxuXG4gICAgICAgY29uc29sZS5sb2codXNlckRldGFpbHMpO1xuXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1c2VyRGV0YWlscyA6IHVzZXJEZXRhaWxzXG4gICAgfSkgXG4gICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyUm93cygpIHtcblxuICAgICAgICBjb25zdCB7IEhlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5LCBDZWxsfSA9IFRhYmxlO1xuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudXNlckRldGFpbHMuc29ydCgoYSwgYikgPT4gYS5nYXNVc2VkID4gYi5nYXNVc2VkKS5tYXAoICh1c2VyLGluZGV4ICkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgIDxSb3cga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Q2VsbD4ge3VzZXIudXNlcm5hbWV9PC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPiB7dXNlci5hZGRyZXNzfSA8L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+IHt1c2VyLmdhc1VzZWR9IDwvQ2VsbD5cbiAgICAgICAgICAgIDwvUm93PikgXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keX0gPSBUYWJsZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlVzZXJJRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5Vc2VyIEFkZHJlc3M8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+R2FzIFVzZWQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keT5cblxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsZWFkZXJCb2FyZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wZXRlL2xlYWRlckJvYXJkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7Ozs7O0FBS0E7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBO0FBREE7QUFFQTs7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQVpBOzs7OztBQWNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==