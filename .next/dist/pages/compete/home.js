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

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kbr0003/Documents/ethereum-blockchain/onlineJudge/pages/compete/home.js?entry';


var CompeteIndex = function (_Component) {
    (0, _inherits3.default)(CompeteIndex, _Component);

    function CompeteIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CompeteIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CompeteIndex.__proto__ || (0, _getPrototypeOf2.default)(CompeteIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderCampaigns = function () {

            _this.props.questionsDescriptions.map(function (val) {
                console.log("question " + val);
            });

            console.log(_this.props.questionsDescriptions[1]);
            var items = _this.props.questionsListAddress.map(function (address, index) {
                return {
                    key: address,
                    header: _this.props.questionsDescriptions[index],
                    meta: "Bounty: " + _web2.default.utils.fromWei(_this.props.questionsPrice[index], 'ether') + "  Ether",
                    description: _react2.default.createElement(_routes.Link, { route: '/compete/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    }, 'View Question Details')),

                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CompeteIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Open Competitions !!'), _react2.default.createElement(_routes.Link, { route: '/compete/newproblem', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create Campaign', icon: 'add circle', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
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

    return CompeteIndex;
}(_react.Component);

exports.default = CompeteIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvaG9tZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkdldFF1ZXN0aW9uIiwid2ViMyIsIkNvbXBldGVJbmRleCIsInJlbmRlckNhbXBhaWducyIsInByb3BzIiwicXVlc3Rpb25zRGVzY3JpcHRpb25zIiwibWFwIiwiY29uc29sZSIsImxvZyIsInZhbCIsIml0ZW1zIiwicXVlc3Rpb25zTGlzdEFkZHJlc3MiLCJhZGRyZXNzIiwiaW5kZXgiLCJrZXkiLCJoZWFkZXIiLCJtZXRhIiwidXRpbHMiLCJmcm9tV2VpIiwicXVlc3Rpb25zUHJpY2UiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWV0aG9kcyIsImdldERlcGxveWVkUXVlc3Rpb25zIiwiY2FsbCIsImkiLCJsZW5ndGgiLCJxdWVzdGlvbiIsImdldFF1ZXN0aW9uRGVzY3JpcHRpb24iLCJwdXNoIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7NE5BNkJGLEEsa0JBQWtCLFlBQU0sQUFFcEI7O2tCQUFBLEFBQUssTUFBTCxBQUFXLHNCQUFYLEFBQWlDLElBQU0sZUFBTyxBQUMxQzt3QkFBQSxBQUFRLElBQUksY0FBWixBQUEwQixBQUM3QjtBQUZELEFBSUE7O29CQUFBLEFBQVEsSUFBSyxNQUFBLEFBQUssTUFBTCxBQUFXLHNCQUF4QixBQUFhLEFBQWlDLEFBQzlDO2dCQUFNLGNBQVEsQUFBSyxNQUFMLEFBQVcscUJBQVgsQUFBZ0MsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFXLE9BQVUsQUFDbkU7O3lCQUFNLEFBQ0ksQUFDTjs0QkFBUyxNQUFBLEFBQUssTUFBTCxBQUFXLHNCQUZsQixBQUVPLEFBQWlDLEFBQzFDOzBCQUFPLGFBQWEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLE1BQUEsQUFBSyxNQUFMLEFBQVcsZUFBOUIsQUFBbUIsQUFBMEIsUUFBMUQsQUFBYSxBQUFxRCxXQUh2RSxBQUdrRixBQUNwRjtpREFDSSxBQUFDLDhCQUFLLHFCQUFOLEFBQXlCO3NDQUF6Qjt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQU5OLEFBS0UsQUFDSSxBQUlSOzsyQkFWSixBQUFNLEFBVU0sQUFFZjtBQVpTLEFBQ0Y7QUFGUixBQUFjLEFBZWQsYUFmYzs7aURBZVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTtBOzs7OztpQ0FHRCxBQUNOO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFHSTtBQUhKO0FBQUEsK0JBR0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUVBLHlDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0M7QUFERDsrQkFDQyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNEO0FBREM7QUFBQSwrQkFDRCxBQUFDLHlDQUFRLFNBQVQsQUFBaUIsU0FBUSxTQUF6QixBQUFpQyxtQkFBa0IsTUFBbkQsQUFBd0QsY0FBYSxTQUFyRTs4QkFBQTtnQ0FQSixBQUtJLEFBQ0MsQUFDRCxBQUlDO0FBSkQ7dUJBVFIsQUFDSSxBQUNBLEFBV0ssQUFBSyxBQUlqQjs7O2FBdEVEOztBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O3VDQUV5QyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEEsQUFBdUM7O2lDQUF0RTtBLGdFQUVGO0Esd0RBQXdCLEFBQ3hCLEE7QSxpRCxBQUFnQixBQUVaO0Esb0MsQUFBSTs7O3NDQUFHLElBQUkscUJBQXFCLEE7OztBQUM5Qjs7QSwyQ0FBVyx3QkFBWSxxQkFBWixBQUFZLEEsQUFBcUI7O3VDQUN4QixTQUFBLEFBQVMsUUFBVCxBQUFpQix5QkFBakIsQUFBMEMsQTs7aUNBQTlEO0EsdURBQ047O3NEQUFBLEFBQXNCLEtBQXRCLEFBQTJCOztpQ0FIaUI7QTs7OztpQ0FNeEM7QSxvQ0FBSSxBOzs7c0NBQUcsSUFBSSxxQkFBcUIsQTs7O0FBQzlCOztBLDRDQUFXLHdCQUFZLHFCQUFaLEFBQVksQUFBcUIsQTs7dUNBQzVCLFVBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUE5QztBLG1EQUNOOzsrQ0FBQSxBQUFlLEtBQWYsQUFBb0I7O2lDQUh3QjtBOzs7OztpRUFNekMsRUFBQyxzQkFBRCxzQkFBdUIsdUJBQXZCLHVCQUErQyxnQkFBL0MsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpCWSxBLEFBNEUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJob21lLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYnIwMDAzL0RvY3VtZW50cy9ldGhlcmV1bS1ibG9ja2NoYWluL29ubGluZUp1ZGdlIn0=