'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Question = require('./build/Question.json');

var _Question2 = _interopRequireDefault(_Question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getQuestion = function getQuestion(address) {
    var instance = new _web2.default.eth.Contract(JSON.parse(_Question2.default.interface), address);
    return instance;
};

exports.default = getQuestion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJRdWVzdGlvbiIsImdldFF1ZXN0aW9uIiwiYWRkcmVzcyIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQjs7Ozs7O0FBRUEsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFDLEFBQUQsU0FBYSxBQUM3QjtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBQXRCLFlBQ2pCLEFBRGlCLEFBQWpCLEFBRUE7V0FBTyxBQUFQLEFBRUg7QUFMRCxBQU9BOztrQkFBZSxBQUFmIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc2hudS9jb2RlL3Byb2plY3QtYnV0YXJpbi1uZXcifQ==