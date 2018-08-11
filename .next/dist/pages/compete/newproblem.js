'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/newproblem.js?entry';


var NewProblem = function (_Component) {
    (0, _inherits3.default)(NewProblem, _Component);

    function NewProblem() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NewProblem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewProblem.__proto__ || (0, _getPrototypeOf2.default)(NewProblem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            title: '',
            description: '',
            publicKey: '',
            errorMsg: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.prev = 1;

                                _this.setState({ loading: true, errorMsg: '' });

                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createQuestion(_this.state.title, _this.state.description, _this.state.publicKey).send({ from: accounts[0], value: _this.state.value });

                            case 8:

                                _routes.Router.pushRoute('/compete/home/');

                                //  console.log(this.state.description + " "  + this.state.publicKey +  " " + web3.eth.defaultAccount);   
                                //  OnlineJudge.methods.createQuestion(this.state.description, this.state.publicKey).
                                //             send({from: web3.eth.defaultAccount});

                                // console.log("before fetching")    

                                // const campaignsList =   await OnlineJudge.methods.deployedQuestions(1).call() ;    

                                // console.log("campaign lists " + campaignsList);


                                // this.props.history.push('/compete');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 14:
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(NewProblem, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, ' create a new problem '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Problem Statement'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.title,
                onChange: function onChange(event) {
                    return _this3.setState({ title: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Problem Description'), _react2.default.createElement(_semanticUiReact.TextArea, { autoHeight: true, placeholder: 'Try adding multiple lines', value: this.state.description,
                onChange: function onChange(event) {
                    _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Price Money '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                label: 'wei', labelPosition: 'right',
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, ' Public key '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.publicKey,
                onChange: function onChange(event) {
                    return _this3.setState({ publicKey: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'OOPS!!', content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, ' Post Request')));
        }
    }]);

    return NewProblem;
}(_react.Component);

exports.default = NewProblem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvbmV3cHJvYmxlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJUZXh0QXJlYSIsIkNhcmQiLCJ3ZWIzIiwiT25saW5lSnVkZ2UiLCJMaW5rIiwiUm91dGVyIiwiTmV3UHJvYmxlbSIsInN0YXRlIiwidmFsdWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHVibGljS2V5IiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVF1ZXN0aW9uIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQU0sQUFBUyxBQUFPLEFBQVMsQUFBVTs7QUFDakQsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFLLEFBQWM7Ozs7Ozs7SSxBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBRUY7bUJBQVEsQUFDRyxBQUNQO21CQUZJLEFBRUksQUFDUjt5QkFISSxBQUdVLEFBQ2Q7dUJBSkksQUFJUSxBQUNaO3NCQUxJLEFBS08sQUFDWDtxQkFOSSxBQU1NLEE7QUFOTixBQUNKLGlCLEFBUUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQURPLEFBQ1AsQUFBTTs7Z0RBR047O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLFVBSnZCLEFBSVAsQUFBYyxBQUEyQjs7Z0RBSmxDO3VDQU1nQixjQUFBLEFBQUssSUFOckIsQUFNZ0IsQUFBUzs7aUNBQTFCO0FBTkMsb0RBQUE7Z0RBQUE7dUNBT0Qsa0JBQUEsQUFBWSxRQUFaLEFBQW9CLGVBQWUsTUFBQSxBQUFLLE1BQXhDLEFBQThDLE9BQU8sTUFBQSxBQUFLLE1BQTFELEFBQWdFLGFBQWEsTUFBQSxBQUFLLE1BQWxGLEFBQXdGLFdBQXhGLEFBQ04sS0FBSyxFQUFDLE1BQU8sU0FBUixBQUFRLEFBQVMsSUFBSyxPQUFRLE1BQUEsQUFBSyxNQVJqQyxBQU9ELEFBQ0QsQUFBeUM7O2lDQUU5Qzs7K0NBQUEsQUFBTyxVQUFQLEFBQWlCLEFBRWpCOztBQUNBO0FBQ0E7QUFFQTs7QUFFQTs7QUFFQTs7QUFHQTs7O0FBdkJPO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQXlCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsVUFBVyxZQXpCdkIsQUF5QkgsQUFBYyxBQUFnQjs7aUNBRWxDO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBM0JSLEFBMkJQLEFBQWMsQUFBVTs7aUNBM0JqQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQThCRjt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDRztBQURIO0FBQUEsYUFBQSxrQkFDRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESCxBQUNHLEFBQ0MsMkNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNBO0FBREE7K0JBQ0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0NBQUEsQUFBQzt1QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7MEJBQVkseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFRLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGN0Q7OzhCQUFBO2dDQUhKLEFBQ0EsQUFFSSxBQU1IO0FBTkc7QUFDSSxpQ0FLTixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0c7QUFESDtBQUFBLCtCQUNHLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURILEFBQ0csQUFDQSx3Q0FBQSxBQUFDLDJDQUFTLFlBQVYsTUFBcUIsYUFBckIsQUFBaUMsNkJBQTZCLE9BQU8sS0FBQSxBQUFLLE1BQTFFLEFBQWdGLEFBQ2hGOzBCQUFhLHlCQUFTLEFBQUM7MkJBQUEsQUFBSyxTQUFTLEVBQUMsYUFBYyxNQUFBLEFBQU0sT0FBbkMsQUFBYyxBQUE0QixBQUFTO0FBRDFFOzs4QkFBQTtnQ0FYSixBQVNDLEFBRUcsQUFLSjtBQUxJO2lDQUtILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGlDQUFBLEFBQUM7dUJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3BCO3VCQUZKLEFBRVUsT0FBUSxlQUZsQixBQUVnQyxBQUM1QjswQkFBWSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQVEsTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUg3RDs7OEJBQUE7Z0NBbEJKLEFBZ0JBLEFBRUksQUFPSjtBQVBJO0FBQ0ksaUNBTVAsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsaUNBQUEsQUFBQzt1QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7MEJBQVkseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFZLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFGakU7OzhCQUFBO2dDQTNCSixBQXlCQSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFVLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBaENBLEFBZ0NBLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFwQ1IsQUFDSSxBQUVJLEFBaUNBLEFBS1g7Ozs7O0FBbkZvQixBLEFBdUZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXdwcm9ibGVtLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYnIwMDAzL0RvY3VtZW50cy9ldGhlcmV1bS1ibG9ja2NoYWluL29ubGluZUp1ZGdlIn0=