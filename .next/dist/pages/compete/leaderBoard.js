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