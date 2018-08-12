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

var _jsxFileName = '/home/vishnu/code/project-butarin-new/pages/practice/home.js?entry';


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

            _this.props.questionsTitles.map(function (val) {
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
                    header: _this.props.questionsTitles[index],
                    meta: "Prize Money: " + _web2.default.utils.fromWei(_this.props.questionsPrice[index], 'ether') + "  Ether",
                    description: _react2.default.createElement(_routes.Link, { route: '/compete/' + _this.props.questionsListAddress[index], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 59
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    }, 'View Question Details ')),

                    fluid: true
                };
            });

            console.log(items);

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
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
                    lineNumber: 77
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Practice Questions'), _react2.default.createElement(_semanticUiReact.Image, { size: 'large', src: 'http://localhost:9991/static/space.svg', fluid: true, centered: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }), _react2.default.createElement(_routes.Link, { route: '/compete/newproblem', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create Question', icon: 'add circle', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }))), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',

        // state = {
        //     campaignsList : null
        // }

        // this renders on server and passes props to this class on browser
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var questionsListAddress, questionsTitles, questionsPrice, i, question, summaryDetails;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedQuestions().call();

                            case 2:
                                questionsListAddress = _context.sent;
                                questionsTitles = [];
                                questionsPrice = [];
                                i = 0;

                            case 6:
                                if (!(i < questionsListAddress.length)) {
                                    _context.next = 16;
                                    break;
                                }

                                question = (0, _campaign2.default)(questionsListAddress[i]);
                                _context.next = 10;
                                return question.methods.getSummary().call();

                            case 10:
                                summaryDetails = _context.sent;

                                //  const balance = await question.methods.getBalance().call();
                                questionsTitles.push(summaryDetails[1]);
                                questionsPrice.push(summaryDetails[3]);

                            case 13:
                                i++;
                                _context.next = 6;
                                break;

                            case 16:
                                return _context.abrupt('return', { questionsListAddress: questionsListAddress, questionsTitles: questionsTitles, questionsPrice: questionsPrice });

                            case 17:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3ByYWN0aWNlL2hvbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJHZXRRdWVzdGlvbiIsIndlYjMiLCJJbWFnZSIsIkhlYWRlciIsIkljb24iLCJQcmFjdGljZUluZGV4IiwicmVuZGVyQ2FtcGFpZ25zIiwicHJvcHMiLCJxdWVzdGlvbnNUaXRsZXMiLCJtYXAiLCJmaWx0ZXJlZEFkZHJlc3NJbmRleGVzIiwiaSIsInF1ZXN0aW9uc0xpc3RBZGRyZXNzIiwibGVuZ3RoIiwicXVlc3Rpb25zUHJpY2UiLCJwdXNoIiwiaXRlbXMiLCJpbmRleCIsImtleSIsImhlYWRlciIsIm1ldGEiLCJ1dGlscyIsImZyb21XZWkiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFF1ZXN0aW9ucyIsImNhbGwiLCJxdWVzdGlvbiIsImdldFN1bW1hcnkiLCJzdW1tYXJ5RGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFVLEFBQ2pCLEFBQVMsQUFBTyxBQUFROzs7Ozs7Ozs7SUFFbEIsQTs7Ozs7Ozs7Ozs7Ozs7OE4sQUF5QkYsa0JBQWtCLFlBQU0sQUFFcEI7O2tCQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFYLEFBQTJCLElBQU0sZUFBTyxBQUN4QztBQUNDO0FBRkQsQUFJRjs7QUFFRTs7Z0JBQUsseUJBQUwsQUFBOEIsQUFFOUI7O2lCQUFJLElBQUksSUFBUixBQUFXLEdBQUUsSUFBSSxNQUFBLEFBQUssTUFBTCxBQUFXLHFCQUE1QixBQUFpRCxRQUFqRCxBQUF5RCxLQUFLLEFBQzVEO0FBQ0U7b0JBQUcsTUFBQSxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLE9BQTdCLEFBQW9DLEtBQUksQUFDcEM7MkNBQUEsQUFBdUIsS0FBdkIsQUFBNEIsQUFDL0I7QUFFSjtBQUVEOztnQkFBTSwrQkFBUSxBQUF1QixJQUFJLFVBQUEsQUFBQyxPQUFVLEFBQ2hEOzt5QkFBTSxBQUNJLEFBQ047NEJBQVMsTUFBQSxBQUFLLE1BQUwsQUFBVyxnQkFGbEIsQUFFTyxBQUEyQixBQUNwQzswQkFBTyxrQkFBa0IsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLE1BQUEsQUFBSyxNQUFMLEFBQVcsZUFBOUIsQUFBbUIsQUFBMEIsUUFBL0QsQUFBa0IsQUFBcUQsV0FINUUsQUFHdUYsQUFDekY7aURBQ0ksQUFBQyw4QkFBSyxxQkFBbUIsTUFBQSxBQUFLLE1BQUwsQUFBVyxxQkFBcEMsQUFBeUIsQUFBZ0M7c0NBQXpEO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBTk4sQUFLRSxBQUNJLEFBSVI7OzJCQVZKLEFBQU0sQUFVTSxBQUVmO0FBWlMsQUFDRjtBQUZSLEFBQWMsQUFlZCxhQWZjOztvQkFlZCxBQUFRLElBQVIsQUFBWSxBQUVaOztpREFBTyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBO0E7Ozs7O2lDQUdELEFBRU47O21DQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVDQUFBLEFBQUMsd0NBQU0sTUFBUCxBQUFZLFNBQVEsS0FBcEIsQUFBeUIsMENBQTBDLE9BQW5FLE1BQXlFLFVBQXpFOzhCQUFBO2dDQUZKLEFBRUksQUFFQTtBQUZBO2dDQUVBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0M7QUFERDsrQkFDQyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNEO0FBREM7QUFBQSwrQkFDRCxBQUFDLHlDQUFRLFNBQVQsQUFBaUIsU0FBUSxTQUF6QixBQUFpQyxtQkFBa0IsTUFBbkQsQUFBd0QsY0FBYSxTQUFyRTs4QkFBQTtnQ0FOSixBQUlJLEFBQ0MsQUFDRCxBQUlBO0FBSkE7Ozs4QkFJQTtnQ0FWSixBQVVJLEFBRUM7QUFGRDtBQUFBLHFCQWJSLEFBRUksQUFDQSxBQVlLLEFBQUssQUFJakI7OzthQWxGRDs7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O3VDQUV5QyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O2lDQUF0RTtBLGdFQUVGO0Esa0RBQWtCLEEsQUFDbEI7QSxpREFBZ0IsQSxBQUVaO0Esb0NBQUksQTs7O3NDQUFHLElBQUkscUJBQXFCLEE7OztBQUM5Qjs7QSwyQ0FBVyx3QkFBWSxxQkFBQSxBLEFBQVosQUFBaUM7O3VDQUNyQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOztpQ0FBckQ7QSwwREFDUjs7QUFDQTtnREFBQSxBQUFnQixLQUFLLGVBQXJCLEFBQXFCLEFBQWUsQUFDbEM7K0NBQUEsQUFBZSxLQUFLLGVBQXBCLEFBQW9CLEFBQWU7O2lDQUxTO0E7Ozs7O2lFQVF6QyxFQUFDLHNCQUFELHNCQUF1QixpQkFBdkIsaUJBQXlDLGdCQUF6QyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckJhLEEsQUF3RjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImhvbWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzaG51L2NvZGUvcHJvamVjdC1idXRhcmluLW5ldyJ9