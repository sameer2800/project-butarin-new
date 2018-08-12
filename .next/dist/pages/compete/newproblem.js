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

var _jsxFileName = '/home/vishnu/code/project-butarin-new/pages/compete/newproblem.js?entry';


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
            testCases: '',
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
                    lineNumber: 52
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, ' create a new problem '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Problem Statement'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.title,
                onChange: function onChange(event) {
                    return _this3.setState({ title: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Problem Description'), _react2.default.createElement(_semanticUiReact.TextArea, { autoHeight: true, placeholder: 'Try adding multiple lines', value: this.state.description,
                onChange: function onChange(event) {
                    _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Price Money '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                label: 'wei', labelPosition: 'right',
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, ' Encryption key (key for encrypting user submissions) '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.publicKey,
                onChange: function onChange(event) {
                    return _this3.setState({ publicKey: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'Test cases code '), _react2.default.createElement(_semanticUiReact.TextArea, { autoHeight: true, placeholder: 'Try adding multiple lines', value: this.state.testCases,
                onChange: function onChange(event) {
                    _this3.setState({ testCases: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'OOPS!!', content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Submit Problem')));
        }
    }]);

    return NewProblem;
}(_react.Component);

exports.default = NewProblem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvbmV3cHJvYmxlbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJUZXh0QXJlYSIsIkNhcmQiLCJ3ZWIzIiwiT25saW5lSnVkZ2UiLCJMaW5rIiwiUm91dGVyIiwiTmV3UHJvYmxlbSIsInN0YXRlIiwidmFsdWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHVibGljS2V5IiwiZXJyb3JNc2ciLCJ0ZXN0Q2FzZXMiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVF1ZXN0aW9uIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQU0sQUFBUyxBQUFPLEFBQVMsQUFBVTs7QUFDakQsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFLLEFBQWM7Ozs7Ozs7SSxBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7O3dOQUVGLEE7bUJBQVEsQUFDRyxBQUNQO21CQUZJLEFBRUksQUFDUjt5QkFISSxBQUdVLEFBQ2Q7dUJBSkksQUFJUSxBQUNaO3NCQUxJLEFBS08sQUFDWDt1QkFOSSxBQU1PLEFBQ1g7cUJBUEksQUFPTSxBO0FBUE4sQUFDSixpQixBQVNKO2lHQUFXLGlCQUFBLEFBQU0sT0FBTjtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FETyxBQUNQLEFBQU07O2dEQUdOOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxVQUp2QixBQUlQLEFBQWMs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O0FBRmpFOzs4QkFBQTtnQ0E3QkosQUEyQkEsQUFFSSxBQU9IO0FBUEc7QUFDSSxpQ0FNTixjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0c7QUFESDtBQUFBLCtCQUNHLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURILEFBQ0csQUFDQSxxQ0FBQSxBQUFDLDJDQUFTLFlBQVYsTUFBcUIsYUFBckIsQUFBaUMsNkJBQTZCLE9BQU8sS0FBQSxBQUFLLE1BQTFFLEFBQWdGLEFBQ2hGOzBCQUFhLHlCQUFTLEFBQUM7MkJBQUEsQUFBSyxTQUFTLEVBQUMsV0FBWSxNQUFBLEFBQU0sT0FBakMsQUFBYyxBQUEwQixBQUFTO0FBRHhFOzs4QkFBQTtnQ0F0Q0osQUFvQ0MsQUFFRyxBQU1KO0FBTkk7aUNBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVUsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0E1Q0EsQUE0Q0EsQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWhEUixBQUNJLEFBRUksQUE2Q0EsQUFLWDs7Ozs7QUFoR29CLEEsQUFvR3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ld3Byb2JsZW0uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzaG51L2NvZGUvcHJvamVjdC1idXRhcmluLW5ldyJ9