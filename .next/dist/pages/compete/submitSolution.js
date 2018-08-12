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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

var _axios = require('axios');

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
                                url = "http://localhost:9991/submit";

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