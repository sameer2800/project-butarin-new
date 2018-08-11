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
            participants: [],
            usernames: [],
            gas: []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(leaderBoard, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var question, participantsAddress, users, gasUsed, i, address, getparticipantdetails;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log("question address " + this.props.contractAddress);
                                question = (0, _campaign2.default)(this.props.contractAddress);
                                participantsAddress = [];
                                users = [];
                                gasUsed = [];
                                i = 0;

                            case 6:
                                if (!(i < this.props.participantsCount)) {
                                    _context.next = 20;
                                    break;
                                }

                                _context.next = 9;
                                return question.methods.participants(i).call();

                            case 9:
                                address = _context.sent;

                                console.log("adresss of participants " + address);
                                _context.next = 13;
                                return question.methods.getParticipantDetails(address).call();

                            case 13:
                                getparticipantdetails = _context.sent;

                                participantsAddress.push(address);
                                users.push(getparticipantdetails[0]);
                                gasUsed.push(getparticipantdetails[2]);

                            case 17:
                                i++;
                                _context.next = 6;
                                break;

                            case 20:

                                this.setState({ participants: participantsAddress,
                                    usernames: users,
                                    gas: gasUsed
                                });

                            case 21:
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
            var _this2 = this;

            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body,
                Cell = _semanticUiReact.Table.Cell;

            return this.state.participants.map(function (address, index) {
                return _react2.default.createElement(Row, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                }, _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }, ' ', _this2.state.usernames[index]), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }, ' ', address, ' '), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }, ' ', _this2.state.gas[index], ' '));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            console.log("leaderboard  " + this.props.getParticipants);
            return _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'UserID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'User Address'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Gas Consumption (best solution)'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, this.renderRows()));
        }
    }]);

    return leaderBoard;
}(_react.Component);

exports.default = leaderBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBldGUvbGVhZGVyQm9hcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJHZXRRdWVzdGlvbiIsIkNhcmQiLCJCdXR0b24iLCJHcmlkIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpc3QiLCJNZW51IiwiVGFibGUiLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwibGVhZGVyQm9hcmQiLCJzdGF0ZSIsInBhcnRpY2lwYW50cyIsInVzZXJuYW1lcyIsImdhcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImNvbnRyYWN0QWRkcmVzcyIsInF1ZXN0aW9uIiwicGFydGljaXBhbnRzQWRkcmVzcyIsInVzZXJzIiwiZ2FzVXNlZCIsImkiLCJwYXJ0aWNpcGFudHNDb3VudCIsIm1ldGhvZHMiLCJjYWxsIiwiYWRkcmVzcyIsImdldFBhcnRpY2lwYW50RGV0YWlscyIsImdldHBhcnRpY2lwYW50ZGV0YWlscyIsInB1c2giLCJzZXRTdGF0ZSIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiQ2VsbCIsIm1hcCIsImluZGV4IiwiZ2V0UGFydGljaXBhbnRzIiwicmVuZGVyUm93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFRLEFBQU8sQUFBUyxBQUFNLEFBQVUsQUFBWSxBQUFPLEFBQU87O0FBQ2xFLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJLEFBR2I7Ozs7Ozs7Ozs7Ozs7OzBOQUVGLEE7MEJBQVEsQUFDVyxBQUNmO3VCQUZJLEFBRVEsQUFDWjtpQixBQUhJLEFBR0U7QUFIRixBQUNKOzs7Ozs7Ozs7OztpQ0FNQTt3Q0FBQSxBQUFRLElBQUksc0JBQXNCLEtBQUEsQUFBSyxNQUF2QyxBQUE2QyxBQUN2QztBLDJDQUFXLHdCQUFZLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBLEFBRWxDO0Esc0RBQXNCLEFBQ3RCLEE7QSx3QyxBQUFRLEFBQ1I7QSwwQ0FBVSxBLEFBRVQ7QSxvQyxBQUFHOzs7c0NBQUcsSUFBSSxLQUFBLEFBQUssTUFBTSxBOzs7Ozs7dUNBQ04sU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsRyxBQUE5QixBQUFpQzs7aUNBQWpEO0EsbURBQ047O3dDQUFBLEFBQVEsSUFBSyw2QkFBYixBQUEwQzs7dUNBQ04sU0FBQSxBQUFTLFFBQVQsQUFBaUIsc0JBQWpCLEFBQXVDLFMsQUFBdkMsQUFBZ0Q7O2lDQUE5RTtBLGlFQUNOOztvREFBQSxBQUFvQixLQUFwQixBQUF5QixBQUN6QjtzQ0FBQSxBQUFNLEtBQUssc0JBQVgsQUFBVyxBQUFzQixBQUNqQzt3Q0FBQSxBQUFRLEtBQUssc0JBQWIsQUFBYSxBQUFzQjs7aUNBTlk7QTs7OztpQ0FXaEQ7O3FDQUFBLEFBQUssV0FBVSxjQUFELEFBQWdCLEFBQ3pCOytDQURTLEFBQ0csQUFDWjt5Q0FGTCxBQUFjLEFBRUg7QUFGRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQVFKO3lCQUFBOztnQkFBQSxBQUVELFNBRkMsQUFFc0MsdUJBRnRDLEFBRUQ7Z0JBRkMsQUFFTyxNQUZQLEFBRXNDLHVCQUZ0QyxBQUVPO2dCQUZQLEFBRVksYUFGWixBQUVzQyx1QkFGdEMsQUFFWTtnQkFGWixBQUV3QixPQUZ4QixBQUVzQyx1QkFGdEMsQUFFd0I7Z0JBRnhCLEFBRThCLE9BRjlCLEFBRXNDLHVCQUZ0QyxBQUU4QixBQUV2Qzs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFLLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBVyxBQUNwRDt1Q0FDTSxjQUFEOztrQ0FBQTtvQ0FBQSxBQUNEO0FBREM7QUFBQSxpQkFBQSxrQkFDQSxjQUFEOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBQVEsWUFBQSxBQUFLLE1BQUwsQUFBVyxVQURsQixBQUNELEFBQVEsQUFBcUIsQUFDN0IseUJBQUMsY0FBRDs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUFRLEtBQVIsU0FGQyxBQUVELEFBQ0Esc0JBQUMsY0FBRDs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUFRLFlBQUEsQUFBSyxNQUFMLEFBQVcsSUFBbkIsQUFBUSxBQUFlLFFBSjNCLEFBQ0ssQUFHRCxBQUVQO0FBUEQsQUFBTyxBQVFWLGFBUlU7Ozs7aUNBVUY7Z0JBQUEsQUFFRyxTQUZILEFBRW9DLHVCQUZwQyxBQUVHO2dCQUZILEFBRVcsTUFGWCxBQUVvQyx1QkFGcEMsQUFFVztnQkFGWCxBQUVnQixhQUZoQixBQUVvQyx1QkFGcEMsQUFFZ0I7Z0JBRmhCLEFBRTRCLE9BRjVCLEFBRW9DLHVCQUZwQyxBQUU0QixBQUVqQzs7b0JBQUEsQUFBUSxJQUFJLGtCQUFrQixLQUFBLEFBQUssTUFBbkMsQUFBeUMsQUFDekM7bUNBRUksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDUTtBQURSO0FBQUEsYUFBQSxrQkFDUyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLGlDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxoQixBQUNRLEFBQ0ksQUFHSSxBQUlSLHNEQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQVhaLEFBRUksQUFTUSxBQUNLLEFBQUssQUFNekI7Ozs7O0FBeEVxQixBLEFBNEUxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJsZWFkZXJCb2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2JyMDAwMy9Eb2N1bWVudHMvZXRoZXJldW0tYmxvY2tjaGFpbi9vbmxpbmVKdWRnZSJ9