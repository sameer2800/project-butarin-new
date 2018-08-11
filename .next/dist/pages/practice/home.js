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