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
        key: 'renderCards',
        value: function renderCards() {
            var items = [{
                header: this.props.manager,
                meta: 'Address of Manager',
                description: 'Manager created this question',
                style: { overflowWrap: 'break-word' }
            }, {
                header: this.props.balance,
                meta: 'Bounty (ether)',
                description: 'Solution with lowest transaction gas receives this bounty',
                style: { overflowWrap: 'break-word' }
            }, {
                header: this.props.participantsCount,
                meta: 'Number of contributors',
                description: 'Number of contributors who already contributed to this campaign',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(this.props.balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'This balance shows how much money is left with contract to spend',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var pageDetails = null;
            if (this.state.activeItem === 'description') {

                pageDetails = _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, ' ', this.props.questionDescription, ' ');
            } else if (this.state.activeItem === 'submit') {
                console.log("addrs show problem " + this.props.address);
                pageDetails = _react2.default.createElement(_submitSolution2.default, { contractAddress: this.props.address, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                });
            } else if (this.state.activeItem === 'leaderBoard') {
                pageDetails = _react2.default.createElement(_leaderBoard2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                    }
                });
            }

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, ' ', this.props.questionDescription), _react2.default.createElement(_semanticUiReact.List, { celled: true, horizontal: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, '  Bounty : ', _web2.default.utils.fromWei(this.props.balance, 'ether'), '     ether '), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'Total Solution submitted : ', this.props.participantsCount, ' '), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'Manager address : ', this.props.manager, '   ')), _react2.default.createElement(_semanticUiReact.Menu, { tabular: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'description', active: this.state.activeItem === 'description', onClick: this.handleItemClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'submit', active: this.state.activeItem === 'submit', onClick: this.handleItemClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'leaderBoard', active: this.state.activeItem === 'leaderBoard', onClick: this.handleItemClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
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
                                    questionDescription: getQuestionDetails[1],
                                    balance: getQuestionDetails[2],
                                    participantsCount: getQuestionDetails[3],
                                    managerKey: getQuestionDetails[4]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvc2hvd3Byb2JsZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHZXRRdWVzdGlvbiIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpc3QiLCJNZW51Iiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkxlYWRlckJvYXJkIiwiU3VibWl0U29sdXRpb24iLCJRdWVzdGlvblNob3ciLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJlIiwibmFtZSIsInNldFN0YXRlIiwiaXRlbXMiLCJoZWFkZXIiLCJwcm9wcyIsIm1hbmFnZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImJhbGFuY2UiLCJwYXJ0aWNpcGFudHNDb3VudCIsInV0aWxzIiwiZnJvbVdlaSIsInBhZ2VEZXRhaWxzIiwicXVlc3Rpb25EZXNjcmlwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwicXVlc3Rpb24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImdldFF1ZXN0aW9uRGV0YWlscyIsIm1hbmFnZXJLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUSxBQUFPLEFBQVMsQUFBTSxBQUFVLEFBQVksQUFBTzs7QUFDM0QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJQUVyQixBOzs7Ozs7Ozs7Ozs7Ozs0TkFFRixBLFFBQVEsRUFBRSxZLEFBQUYsQUFBYyx1QkFFdEIsQSxrQkFBa0IsVUFBQSxBQUFD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QUFDQTtBQURBOzhDQUNBLEFBQUMsc0JBQUQsQUFBTSxRQUFLLE1BQVgsQUFBZ0IsVUFBUyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBNUMsQUFBMkQsVUFBVSxTQUFTLEtBQTlFLEFBQW1GOzhCQUFuRjtnQ0FGSixBQUVJLEFBQ0E7QUFEQTs4Q0FDQSxBQUFDLHNCQUFELEFBQU0sUUFBSyxNQUFYLEFBQWdCLGVBQWMsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWpELEFBQWdFLGVBQWUsU0FBUyxLQUF4RixBQUE2Rjs4QkFBN0Y7Z0NBYlosQUFVUSxBQUdJLEFBSUg7QUFKRztpQkFkWixBQUNBLEFBcUJIOzs7YUF0RkQ7Ozs7a0hBQzZCLEE7Ozs7O2lDQUM1QjtBQUNTO0EsMkNBQVcsd0JBQVksTUFBQSxBQUFNLE1BQU0sQSxBQUF4Qjs7dUNBRWdCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUF6RDtBOzs2Q0FHUSxNQUFBLEFBQU0sTUFEYixBQUNtQixBQUN0Qjs2Q0FBVSxtQkFGUCxBQUVPLEFBQW1CLEFBQzdCO3lEQUFzQixtQkFIbkIsQUFHbUIsQUFBbUIsQUFDekM7NkNBQVUsbUJBSlAsQUFJTyxBQUFtQixBQUM3Qjt1REFBb0IsbUJBTGpCLEFBS2lCLEFBQW1CLEFBQ3ZDO2dEQUFhLG1CQU5WLEFBTVUsQUFBbUIsQTs7QUFON0IsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZlLEEsQUFnRzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dwcm9ibGVtLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYnIwMDAzL0RvY3VtZW50cy9ldGhlcmV1bS1ibG9ja2NoYWluL29ubGluZUp1ZGdlIn0=