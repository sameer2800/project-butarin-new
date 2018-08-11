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

var _leaderBoard = require('./leaderBoard');

var _leaderBoard2 = _interopRequireDefault(_leaderBoard);

var _submitSolution = require('./submitSolution');

var _submitSolution2 = _interopRequireDefault(_submitSolution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/showproblem.js?entry';


var QuestionShow = function (_Component) {
    (0, _inherits3.default)(QuestionShow, _Component);

    function QuestionShow() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, QuestionShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = QuestionShow.__proto__ || (0, _getPrototypeOf2.default)(QuestionShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: 'leaderBoard' }, _this.handleItemClick = function (e, _ref2) {
            var name = _ref2.name;
            return _this.setState({ activeItem: name });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(QuestionShow, [{
        key: 'render',
        value: function render() {

            var pageDetails = null;
            if (this.state.activeItem === 'description') {

                pageDetails = _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, ' ', this.props.questionDescription, ' ');
            } else if (this.state.activeItem === 'submit') {
                console.log("addrs show problem " + this.props.address);
                pageDetails = _react2.default.createElement(_submitSolution2.default, { contractAddress: this.props.address, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                });
            } else if (this.state.activeItem === 'leaderBoard') {
                pageDetails = _react2.default.createElement(_leaderBoard2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                });
            }

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, ' ', this.props.questionTitle), _react2.default.createElement(_semanticUiReact.List, { celled: true, horizontal: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, '  Bounty :  ', _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _web2.default.utils.fromWei(this.props.balance, 'ether'), '  '), '   ether '), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Total Solution submitted : ', _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, ' ', this.props.participantsCount, ' '), ' '), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Manager address : ', _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, ' ', this.props.manager, '  '), '  ')), _react2.default.createElement(_semanticUiReact.Menu, { tabular: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'description', active: this.state.activeItem === 'description', onClick: this.handleItemClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'submit', active: this.state.activeItem === 'submit', onClick: this.handleItemClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'leaderBoard', active: this.state.activeItem === 'leaderBoard', onClick: this.handleItemClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })), pageDetails);
        }
    }], [{
        key: 'getInitialProps',

        //recieves dynamic url info here
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var question, getQuestionDetails;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                //   console.log("hello show " + props.query.address);
                                question = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return question.methods.getSummary().call();

                            case 3:
                                getQuestionDetails = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    manager: getQuestionDetails[0],
                                    questionTitle: getQuestionDetails[1],
                                    questionDescription: getQuestionDetails[2],
                                    balance: getQuestionDetails[3],
                                    participantsCount: getQuestionDetails[4],
                                    managerKey: getQuestionDetails[5]

                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return QuestionShow;
}(_react.Component);

exports.default = QuestionShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvc2hvd3Byb2JsZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHZXRRdWVzdGlvbiIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpc3QiLCJNZW51Iiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkxlYWRlckJvYXJkIiwiU3VibWl0U29sdXRpb24iLCJRdWVzdGlvblNob3ciLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJlIiwibmFtZSIsInNldFN0YXRlIiwicGFnZURldGFpbHMiLCJwcm9wcyIsInF1ZXN0aW9uRGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsInF1ZXN0aW9uVGl0bGUiLCJ1dGlscyIsImZyb21XZWkiLCJiYWxhbmNlIiwicGFydGljaXBhbnRzQ291bnQiLCJtYW5hZ2VyIiwicXVlc3Rpb24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImdldFF1ZXN0aW9uRGV0YWlscyIsIm1hbmFnZXJLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUSxBQUFPLEFBQVMsQUFBTSxBQUFVLEFBQVksQUFBTzs7QUFDM0QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBOzs7Ozs7Ozs7Ozs7Ozs0TixBQUVGLFFBQVEsRUFBRSxZQUFGLEFBQWMsQSx1QixBQUV0QixrQkFBa0IsVUFBQSxBQUFDLFVBQUQ7Z0JBQUEsQUFBTSxhQUFOLEFBQU07bUJBQVcsTUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFqQyxBQUFpQixBQUFjLEFBQWM7QTs7Ozs7aUNBdUJ0RCxBQUVMOztnQkFBSSxjQUFKLEFBQWtCLEFBQ2xCO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBZCxBQUE2QixlQUFlLEFBRXhDOzs4Q0FBYyxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsaUJBQUEsRUFBTyxVQUFBLEFBQUssTUFBWixBQUFrQixxQkFBaEMsQUFBYyxBQUNqQjtBQUhELHVCQUdTLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBZCxBQUE2QixVQUFVLEFBQ3pDO3dCQUFBLEFBQVEsSUFBSSx3QkFBeUIsS0FBQSxBQUFLLE1BQTFDLEFBQWdELEFBQ2hEOzhDQUFjLEFBQUMsMENBQWdCLGlCQUFpQixLQUFBLEFBQUssTUFBdkMsQUFBNkM7a0NBQTdDO29DQUFkLEFBQWMsQUFDakI7QUFEaUI7aUJBQUE7QUFGWixhQUFBLE1BR0EsSUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWQsQUFBNkIsZUFBZSxBQUM5Qzs4Q0FBYyxBQUFDOztrQ0FBRDtvQ0FBZCxBQUFjLEFBQ2pCO0FBRGlCO0FBQUEsaUJBQUE7QUFJbEI7O21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQU0sVUFBQSxBQUFLLE1BRGYsQUFDSSxBQUFpQixBQUVqQixnQ0FBQSxBQUFDLHVDQUFLLFFBQU4sTUFBYSxZQUFiOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUF1QixnQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFVO0FBQVY7QUFBQSw2QkFBVSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixTQUF4QyxBQUFVLEFBQXVDLFVBQXhFLEFBQXVCLE9BRDNCLEFBQ0ksQUFDQSw4QkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUFzQywrQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBVSxVQUFBLEFBQUssTUFBZixBQUFxQixtQkFBM0QsQUFBc0MsTUFGMUMsQUFFSSxBQUNBLHNCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBQTZCLHNDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFVLFVBQUEsQUFBSyxNQUFmLEFBQXFCLFNBQWxELEFBQTZCLE9BTnJDLEFBR0ksQUFHSSxBQUlBLHdCQUFBLEFBQUMsdUNBQUssU0FBTjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7NkNBQ0ksQUFBQyxzQkFBRCxBQUFNLFFBQUssTUFBWCxBQUFnQixlQUFjLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxlQUFqRCxBQUFnRSxlQUFlLFNBQVMsS0FBeEYsQUFBNkY7OEJBQTdGO2dDQURKLEFBQ0ksQUFDQTtBQURBOzhDQUNBLEFBQUMsc0JBQUQsQUFBTSxRQUFLLE1BQVgsQUFBZ0IsVUFBUyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBNUMsQUFBMkQsVUFBVSxTQUFTLEtBQTlFLEFBQW1GOzhCQUFuRjtnQ0FGSixBQUVJLEFBQ0E7QUFEQTs4Q0FDQSxBQUFDLHNCQUFELEFBQU0sUUFBSyxNQUFYLEFBQWdCLGVBQWMsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWpELEFBQWdFLGVBQWUsU0FBUyxLQUF4RixBQUE2Rjs4QkFBN0Y7Z0NBYlosQUFVUSxBQUdJLEFBSUg7QUFKRztpQkFkWixBQUNBLEFBcUJIOzs7YUF4REQ7Ozs7a0hBQzZCLEE7Ozs7O2lDQUM1QjtBQUNTO0EsMkNBQVcsd0JBQVksTUFBQSxBQUFNLE1BQWxCLEEsQUFBd0I7O3VDQUVSLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUF6RDtBOzs2Q0FHUSxNQUFBLEFBQU0sTUFEYixBQUNtQixBQUN0Qjs2Q0FBVSxtQkFGUCxBQUVPLEFBQW1CLEFBQzdCO21EQUFnQixtQkFIYixBQUdhLEFBQW1CLEFBQ25DO3lEQUFzQixtQkFKbkIsQUFJbUIsQUFBbUIsQUFDekM7NkNBQVUsbUJBTFAsQUFLTyxBQUFtQixBQUM3Qjt1REFBb0IsbUJBTmpCLEFBTWlCLEFBQW1CLEFBQ3ZDO2dEQUFhLG1CQUFBLEFBQW1CLEEsQUFQN0I7O0FBQUEsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZlLEEsQUFrRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dwcm9ibGVtLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYnIwMDAzL0RvY3VtZW50cy9ldGhlcmV1bS1ibG9ja2NoYWluL29ubGluZUp1ZGdlIn0=